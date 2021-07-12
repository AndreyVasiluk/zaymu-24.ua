if(getCookie('user')!== undefined){
    location.href = '/'+locale+'/credits-banks'
}
const formError = document.getElementById('formError');
const email = document.getElementById('email');
const password = document.getElementById('password');
const form = document.getElementById('form');

form.addEventListener("submit", function (event) {
    event.preventDefault();

    let xhr = new XMLHttpRequest();
    let url = "https://zaymu-24.ru/api/login";
    xhr.open("POST", url, true);
    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
            let json = JSON.parse(xhr.responseText);
            if(json.status===200){
                form.reset();
                document.cookie = 'user= {"email": "'+json.email+'", "name": "'+json.name+'", "tel": "'+json.tel+'"}; max-age=1800';
                location.href = '/'+locale+'/credits-banks'
            }else{
                if(locale=='ua'){
                    formError.innerHTML = "Невірні дані для входу";
                }else{
                    formError.innerHTML = "Неверные данные для входа";
                }

            }
        }
    };
    let data = JSON.stringify({
        "email": email.value,
        "password": password.value,
    });
    xhr.send(data)

})