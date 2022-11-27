
window.addEventListener('resize',resizeAlert);

function resizeAlert (){
    alert("Width:" + document.documentElement.clientWidth + "/n Height:" + document.documentElement.clientHeight)
}