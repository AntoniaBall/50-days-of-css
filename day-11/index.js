const key = document.getElementById('keyboard');
const keyCode = document.getElementById('keyCode');
window.addEventListener('keydown', function(e){
    console.log('key down');
    console.log(keyCode);
    key.innerHTML = e.key;
    keyCode.innerHTML = e.code;
})