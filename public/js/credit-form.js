const diagramProcess = document.getElementById('diagramProcess');
const diagramValue = document.getElementById('diagramValue');
const form = document.querySelector('form');
const email = document.getElementById('email');
const tel = document.getElementById('tel');
const name = document.getElementById('name');
const emailError = document.getElementById('emailError');
const telError = document.getElementById('telError');
const nameError = document.getElementById('nameError');
const checkbox = document.getElementById('scales');
const checkError = document.getElementById('passCheck');
const formError = document.getElementById('formError');

const progress = document.getElementById('progress');
const ip = document.getElementById('ip');









if(getCookie('user')!== undefined){
    location.href = '/'+locale+'/credits-banks'
}

let geo = ''
let XMLHttp = new XMLHttpRequest();

XMLHttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        let json = JSON.parse(this.responseText);

        if(json.success){
            geo = json.city
        }
    }
};
XMLHttp.open("GET", "https://ipwhois.app/json/" + ip.value+"?lang=ru", true);
XMLHttp.send();
function random(min, max) {
    var rand = min + Math.random() * (max + 1 - min);
    rand = Math.floor(rand);
    return rand;
};



function addProcess(){
    let p=0
    if (email.validity.valid) {
        p+=40
    }
    if (tel.validity.valid) {
        p+=35
    }
    if (name.validity.valid) {
        p+=25
    }

    progress.value=p

}




email.addEventListener("input", function (event) {
    if (!email.validity.valid) {
        email.className = "error form--field";
        if(locale=='ua'){
            emailError.innerHTML = "Невалідний електронну адресу.";
        }else{
            emailError.innerHTML = "Невалидный электронный адрес.";
        }

    }else {
        email.className = " form--field";
        emailError.innerHTML = "";
        formError.innerHTML = ""
    }
    addProcess()

}, false);

tel.addEventListener("input", function (event) {
    if (tel.value.length<4) {
        tel.value='+380'
    }

    if (!tel.validity.valid) {
        tel.className = "error form--field";
        if(locale=='ua'){
            telError.innerHTML = "* Поле обов'язкове для заповнення, Телефон повинен бути в форматі + 3XXXXXXXXXX.";
        }else {
            telError.innerHTML = "*Поле обязательное для заполнения, Телефон должен быть в формате +3XXXXXXXXXX.";
        }
    }else{
        tel.className = " form--field";
        telError.innerHTML = "";
    }
    addProcess()

}, false);
name.addEventListener("input", function (event) {
    if (!name.validity.valid) {
        name.className = "error form--field";
        if(locale=='ua'){
            nameError.innerHTML = "* Поле обов'язкове для заповнення, Ім'я повинно містити від 2 символів.";
        }else {
            nameError.innerHTML = "*Поле обязательное для заполнения, Имя должно содержать от 2 символов.";
        }
    }else{
        name.className = "form--field";
        nameError.innerHTML = "";
    }
    addProcess()

}, false);

checkbox.addEventListener("input", function (event) {
    if (!checkbox.validity.valid) {
        if(locale=='ua'){
            checkError.innerHTML = "Погодьтеся з умовами вище."
        }else {
            checkError.innerHTML = "Согласитесь с условиями выше."
        }
    }else{
        checkError.innerHTML = ""
    }
}, false);

form.addEventListener("submit", function (event) {

    event.preventDefault();
    let send = true
    if (!email.validity.valid) {
        send = false
        email.className = "error form--field";
        if(locale=='ua'){
            emailError.innerHTML = "Невалідний електронну адресу.";
        }else {
            emailError.innerHTML = "Невалидный электронный адрес.";
        }

    }
    if (!tel.validity.valid) {
        send = false
        tel.className = "error form--field";
        if(locale=='ua'){
            telError.innerHTML = "* Поле обов'язкове для заповнення, Телефон повинен бути в форматі + 3XXXXXXXXXX.";
        }else {
            telError.innerHTML = "*Поле обязательное для заполнения, Телефон должен быть в формате +3XXXXXXXXXX.";
        }
    }
    if (!name.validity.valid) {
        send = false
        name.className = "error form--field";
        if(locale=='ua'){
            nameError.innerHTML = "* Поле обов'язкове для заповнення, Ім'я повинно містити від 2 символів.";
        }else {
            nameError.innerHTML = "*Поле обязательное для заполнения, Имя должно содержать от 2 символов.";
        }
    }
    if (!checkbox.validity.valid) {
        send = false
        if(locale=='ua'){
            checkError.innerHTML = "Погодьтеся з умовами вище."
        }else {
            checkError.innerHTML = "Согласитесь с условиями выше."
        }
    }
    if(send) {

        event.preventDefault();



        let xhr = new XMLHttpRequest();
        let url = "https://zaymu-24.ru/api/add-user";
        xhr.open("POST", url, true);
        xhr.setRequestHeader("Content-Type", "application/json");
        xhr.onreadystatechange = function () {
            if (xhr.readyState === 4 && xhr.status === 200) {
                let json = JSON.parse(xhr.responseText);
                if(json.status===200){
                    form.reset();
                    document.cookie = 'user= {"email": "'+json.email+'", "name": "'+json.name+'", "tel": "'+json.tel+'", "id": "'+json.id+'"}; max-age=1800';
                    location.href = '/'+locale+'/credits-banks'
                }else{
                    if(locale=='ua'){
                        formError.innerHTML = "Некоректні дані";
                    }else{
                        formError.innerHTML = "Некорректные данные";
                    }

                }
            }
        };
        let data = JSON.stringify({
            "email": email.value,
            "password": 'qwqwewq',
            "name": name.value,
            "tel": tel.value,
            "host": document.domain,
            "geo": geo
        });
        xhr.send(data)
    }


}, false);



