
function addDays(date, days) {
    var result = new Date(date);
    result.setDate(result.getDate() + days);
    return result;
}

inputSumRange.addEventListener("input",function(e){
    sumReturn1.innerHTML = Math.round(inputSumRange.value*1.111)+' ₴'
    sumReturn2.innerHTML = inputSumRange.value+'₴'


});

inputTermRange.addEventListener("input",function(e){
    let unix_timestamp = Number(now)+86400*Number(inputTermRange.value)
    let date = new Date(unix_timestamp * 1000);
    dateReturn.innerHTML =date.getDate()+'.'+date.getMonth()+'.'+date.getFullYear()

});

document.onreadystatechange = function(){
    if(document.readyState === 'complete'){
        sumReturn1.innerHTML = Math.round(inputSumRange.value*1.111)+' ₴'

        sumReturn2.innerHTML = inputSumRange.value+'₴'
        let unix_timestamp = Number(now)+86400*Number(inputTermRange.value)
        let date = new Date(unix_timestamp * 1000);
        dateReturn.innerHTML =date.getDate()+'.'+date.getMonth()+'.'+date.getFullYear()

    }
}
