let btn = document.getElementById("getTimeZone");

if(btn !== null){
    btn.addEventListener("click", TimeZone);
}

function TimeZone(){
    let time = document.getElementById("showTimeZone");
    time.innerHTML = Date();
    
}