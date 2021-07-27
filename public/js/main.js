const headerLink = document.querySelectorAll('.header--link');
const range = document.querySelectorAll('input[type="range"]');
const sumRange = document.querySelector('#sumRange');
const termRange = document.querySelector('#termRange');
const dateReturn = document.querySelector('#datereturn');
const sumReturn1 = document.querySelector('#sumReturn');
const sumReturn2 = document.querySelector('#sumReturn2');
const inputTermRange = document.querySelector('#inputTermRange');
const inputSumRange = document.querySelector('#inputSumRange');
const loginBtn = document.querySelector('#loginBtn');
const loginBtn2 = document.querySelector('#loginBtn2');
const creditForm = document.querySelector('#creditForm');
const profile = document.querySelector('#profile');
const profileMob = document.querySelector('#profileMob');
const locale = document.querySelector('#locale').value;

const now = Math.round(new Date().getTime()/1000.0)


function getCookie(name) {
    let matches = document.cookie.match(new RegExp(
        "(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
    ));
    return matches ? decodeURIComponent(matches[1]) : undefined;
}
function setCookie(name, value, options) {
    options = options || {};

    var expires = options.expires;

    if (typeof expires == "number" && expires) {
        var d = new Date();
        d.setTime(d.getTime() + expires * 1000);
        expires = options.expires = d;
    }
    if (expires && expires.toUTCString) {
        options.expires = expires.toUTCString();
    }

    value = encodeURIComponent(value);

    var updatedCookie = name + "=" + value;

    for (var propName in options) {
        updatedCookie += "; " + propName;
        var propValue = options[propName];
        if (propValue !== true) {
            updatedCookie += "=" + propValue;
        }
    }

    document.cookie = updatedCookie;
}
function logOut(){
    setCookie('user', "", {
        expires: -1
    })

}
function parseData(data) {
    if (!data) return {};
    if (typeof data === 'object') return data;
    if (typeof data === 'string') return JSON.parse(data);

    return {};
}
if(getCookie('user')!== undefined){

    let d = parseData(getCookie('user'));

    creditForm.innerHTML = ''
    if(locale=='ua'){
        profile.innerHTML = '<a class=" header--auth" href="#">\n' +
            '\n' +
            '                            <div class="header--auth-block">\n' +
            '                                <div class="header--block-title">ім\'я: </div>\n' +
            '                                <div class="header--block-value">'+d.name+'</div>\n' +
            '                                <div class="header--block-title">Телефон: </div>\n' +
            '                                <div class="header--block-value">'+d.tel+' </div>\n' +
            '                                <div class="header--block-title">Email: </div>\n' +
            '                                <div class="header--block-value">'+d.email+' </div>\n' +
            '                            </div>\n' +
            '                        </a>';
    }else{
        profile.innerHTML = '<a class=" header--auth" href="#">\n' +
            '\n' +
            '                            <div class="header--auth-block">\n' +
            '                                <div class="header--block-title">Имя: </div>\n' +
            '                                <div class="header--block-value">'+d.name+'</div>\n' +
            '                                <div class="header--block-title">Телефон: </div>\n' +
            '                                <div class="header--block-value">'+d.tel+' </div>\n' +
            '                                <div class="header--block-title">Email: </div>\n' +
            '                                <div class="header--block-value">'+d.email+' </div>\n' +
            '                            </div>\n' +
            '                        </a>';
    }


    if(locale=='ua'){
        profileMob.innerHTML = '<a class=" header--auth" href="#">\n' +
            '\n' +
            '                            <div class="header--auth-block">\n' +
            '                                <div class="header--block-title">ім\'я: </div>\n' +
            '                                <div class="header--block-value">'+d.name+'</div>\n' +
            '                                <div class="header--block-title">Телефон: </div>\n' +
            '                                <div class="header--block-value">'+d.tel+' </div>\n' +
            '                                <div class="header--block-title">Email: </div>\n' +
            '                                <div class="header--block-value">'+d.email+' </div>\n' +
            '                            </div>\n' +
            '                        </a>';
    }else{
        profileMob.innerHTML = '<a class=" header--auth" href="#">\n' +
            '\n' +
            '                            <div class="header--auth-block">\n' +
            '                                <div class="header--block-title">Имя: </div>\n' +
            '                                <div class="header--block-value">'+d.name+'</div>\n' +
            '                                <div class="header--block-title">Телефон: </div>\n' +
            '                                <div class="header--block-value">'+d.tel+' </div>\n' +
            '                                <div class="header--block-title">Email: </div>\n' +
            '                                <div class="header--block-value">'+d.email+' </div>\n' +
            '                            </div>\n' +
            '                        </a>';
    }
    if(locale=='ua'){
        loginBtn.innerHTML = '<a class=" header--btn" onclick="logOut()" href="">Вийти</a>'
        loginBtn2.innerHTML = '<a class=" header--btn" onclick="logOut()" href="">Вийти</a>'
    }else {
        loginBtn.innerHTML = '<a class=" header--btn" onclick="logOut()" href="">Выйти</a>'
        loginBtn2.innerHTML = '<a class=" header--btn" onclick="logOut()" href="">Выйти</a>'
    }

}


document.getElementById("trigger").onclick = function() {open()};

function open() {
    document.getElementById("menu").classList.toggle("show");
    document.getElementById("nav").classList.toggle("show");
}

let pathname = document.location.pathname
if(pathname =='/ru/'||pathname =='/ua/'){
    window.addEventListener('scroll', function() {

        if(pageYOffset>200){
            document.getElementById('header').classList.add("scroll")
        }else{
            document.getElementById('header').classList.remove("scroll")
        }
    });
}else{
    document.getElementById('header').classList.add("scroll")
}



for(let r of headerLink) {

    if ( pathname ==r.getAttribute('href'))
    {
        r.classList.add('active');
    }else{
        r.classList.remove('active');
    }
}
for(let r of range) {
    document.addEventListener('DOMContentLoaded', () => {
        let p = r.value;
        rangeForm(r, p)
    });


    let p = r.value;
    rangeForm(r, p)
    r.addEventListener('input', (e) => {
        let p = r.value;
        rangeForm(r, p)
    });
    r.addEventListener('mousemove', (e) => {
        let p = r.value;
        rangeForm(r, p)
    });


}

function rangeForm(el, p){
    let max = el.getAttribute('max');
    let n=0
    if(Number(p)<=Number(el.getAttribute('min'))){
        n = Number(el.getAttribute('min'))
        p = el.getAttribute('min')
    }else if(Number(p)>=Number(el.getAttribute('max'))){
        n = 100
        p = el.getAttribute('max')
    }else{
        n = 100/(Number(max)-1)*(Number(p)-1)
    }
    el.value=p

    el.style.backgroundImage = '-webkit-linear-gradient(left ,rgb(255,228,1) 0%,rgb(255,210,0) ' + n + '%,#f0f0f2 ' + n + '%, #f0f0f2 100%)';



    let out =  el.parentNode.querySelector('.form--output-range-text')
    let output =  el.parentNode.querySelector('output')
    let rValue =  el.parentNode.querySelector('.form--range-value')
    if (typeof(out) != 'undefined' && out != null){
        out.innerHTML = p
    }
    if (typeof(rValue ) != 'undefined' && rValue  != null){
        rValue.value = p
    }
    if (typeof(output) != 'undefined' && output != null){
        output.innerHTML = p
        output.style.left = 'calc(' + n + '% + -13.5px)'
    }
}
window.onload = function () {
    document.body.classList.add('loaded_hiding');
    window.setTimeout(function () {
        document.body.classList.add('loaded');
        document.body.classList.remove('loaded_hiding');
    }, 500);
}


function progressView(){
    let diagramBox = document.querySelectorAll('.diagram.progress');
    diagramBox.forEach((box) => {
        let deg = (360 * box.dataset.percent / 100) + 180;
        if(box.dataset.percent >= 50){
            box.classList.add('over_50');
        }else{
            box.classList.remove('over_50');
        }
        box.querySelector('.piece.right').style.transform = 'rotate('+deg+'deg)';
    });
}
progressView();

