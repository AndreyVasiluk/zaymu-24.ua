const offers = document.querySelector('#offers');

if(getCookie('user')== undefined){
    location.href = '/'+locale+'/login'
}
let xhr = new XMLHttpRequest()
xhr.open(
    'GET',
    'https://zaymu-24.ru/api?geo=ua',
    true
)
xhr.send()

xhr.onreadystatechange = function() {
    if (xhr.readyState != 4) {
        return
    }
    if (xhr.status === 200) {
        let content='';
        res = JSON.parse(xhr.responseText)

        for (var prop in res) {

            if(locale=='ua'){
                content+='<div class="offers--item">\n' +
                    '                    <div class="offers--logo">\n' +
                    '                        <img src="'+res[prop].img+'" class="offers--img" alt="'+res[prop].name+'">\n' +
                    '                    </div>\n' +
                    '                    <div class="offers--1">Від '+res[prop].rateFrom+'%</div>\n' +
                    '                    <div class="offers--2">До '+new Intl.NumberFormat('ru-RU').format(res[prop].amountUp)+'₴</div>\n' +
                    '                    <div class="offers--3">'+res[prop].operatingMode+'</div>\n' +
                    '                    <div class="offers--4">'+res[prop].endorsements+'</div>\n' +
                    '                    <a href="'+res[prop].link+'" target="_blank" class="btn offers--btn">ПОДАТИ ЗАЯВКУ</a>\n' +
                    '                </div>';
            }else{
                content+='<div class="offers--item">\n' +
                    '                    <div class="offers--logo">\n' +
                    '                        <img src="'+res[prop].img+'" class="offers--img" alt="'+res[prop].name+'">\n' +
                    '                    </div>\n' +
                    '                    <div class="offers--1">От '+res[prop].rateFrom+'%</div>\n' +
                    '                    <div class="offers--2">До '+new Intl.NumberFormat('ru-RU').format(res[prop].amountUp)+'₴</div>\n' +
                    '                    <div class="offers--3">'+res[prop].operatingMode+'</div>\n' +
                    '                    <div class="offers--4">'+res[prop].endorsements+'</div>\n' +
                    '                    <a href="'+res[prop].link+'" target="_blank" class="btn offers--btn">ПОДАТЬ ЗЯВКУ</a>\n' +
                    '                </div>';
            }

        }
        offers.innerHTML = content
    } else {
        //console.log('err', xhr.responseText)
        offers.innerHTML = "<p>По вашему запросу ничего ненайдено!!!</p>"
    }
}

