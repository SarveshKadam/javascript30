
window.addEventListener('keydown',function(e){
    var b = document.querySelector('.key-'+e.keyCode);
    if(!b){return};
    b.currentTime = 0;
    b.play();
    document.querySelector('.data-'+e.keyCode).classList.add('playing');
    setTimeout(function(){
        document.querySelector('.data-'+e.keyCode).classList.remove('playing');
    },70)
})