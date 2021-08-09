const offers = document.querySelector('#offers');

// if(getCookie('user')== undefined){
//     location.href = '/'+locale+'/login'
// }
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
            let top = ''
            let offersTop = ''
            let rec=''
            if(res[prop].topSignature=='Мы рекомендуем!'){
                rec='offers--rec'
                res[prop].topValue=''
            }
            if(res[prop].topValueSwich==true){
                res[prop].topValue=''
            }
            if(res[prop].top==true){
                offersTop = 'offers--top-box offers--top-box__'+res[prop].topColor;
                top = '<div class="offers--top offers--top__'+res[prop].topColor+'">\n' +
                    '                    <div class="offers--top-value '+rec+'">\n' +
                    '                        '+res[prop].topValue+'\n' +
                    '                    </div>\n' +
                    '                    <div class="offers--top-signature">\n' +
                    '                        '+res[prop].topSignature+'\n' +
                    '                    </div>\n' +
                    '                </div>'
            }
            if(locale=='ua'){
                content+='<div class="offers--item '+offersTop+'" >' +top+
                    '                    <a class="offers--logo" target="_blank" href="'+res[prop].link+'">\n' +
                    '                        <img src="'+res[prop].img+'" class="offers--img" alt="'+res[prop].name+'">\n' +
                    '                    </a>\n' +
                    '                    <a class="offers--1" target="_blank" href="'+res[prop].link+'"><div class="offers--signature">Процентна ставка</div>Від '+res[prop].rateFrom+'%</a>\n' +
                    '                    <a class="offers--2" target="_blank" href="'+res[prop].link+'"><div class="offers--signature">Сума</div>До '+new Intl.NumberFormat('ru-RU').format(res[prop].amountUp)+'₴</a>\n' +
                    '                    <a class="offers--3" target="_blank" href="'+res[prop].link+'"><div class="offers--signature">Графік роботи</div>'+res[prop].operatingMode+'</a>\n' +
                    '                    <a class="offers--4" target="_blank" href="'+res[prop].link+'"><div class="offers--signature"></div>'+res[prop].endorsements+'</a>\n' +
                    '                    <a href="'+res[prop].link+'" target="_blank" class="btn offers--btn">ПОДАТИ ЗАЯВКУ</a>\n' +
                    '                </div>';
            }else{
                content+='<div class="offers--item '+offersTop+'" >\n' +top+
                    '                    <a class="offers--logo" href="'+res[prop].link+'" target="_blank">\n' +
                    '                        <img src="'+res[prop].img+'" class="offers--img" alt="'+res[prop].name+'">\n' +
                    '                    </a>\n' +
                    '                    <a class="offers--1" target="_blank" href="'+res[prop].link+'"><div class="offers--signature">Процентная ставка</div>От '+res[prop].rateFrom+'%</a>\n' +
                    '                    <a class="offers--2" target="_blank" href="'+res[prop].link+'"><div class="offers--signature">Сумма</div>До '+new Intl.NumberFormat('ru-RU').format(res[prop].amountUp)+'₴</a>\n' +
                    '                    <a class="offers--3" target="_blank" href="'+res[prop].link+'"><div class="offers--signature">График работы</div>'+res[prop].operatingMode+'</a>\n' +
                    '                    <a class="offers--4" target="_blank" href="'+res[prop].link+'"><div class="offers--signature"></div>'+res[prop].endorsements+'</a>\n' +
                    '                    <a href="'+res[prop].link+'" target="_blank" class="btn offers--btn">ПОДАТЬ ЗЯВКУ</a>\n' +
                    '               </div>';
            }

        }
        offers.innerHTML = content
    } else {
        //console.log('err', xhr.responseText)
        offers.innerHTML = "<p>По вашему запросу ничего ненайдено!!!</p>"
    }
}

