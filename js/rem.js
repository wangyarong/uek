var designWidth=750;
function resize(){
    var clientWidth=document.documentElement.clientWidth;
    var fontSize=clientWidth/designWidth*100;
    document.documentElement.style.fontSize=fontSize+'px';
}
resize();
window.addEventListener('resize',resize);