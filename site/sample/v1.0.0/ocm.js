//OCM.js v1.0.0
window.onload = function(){
    var ocm_context_menu = document.querySelector("#ocm_context_menu");
    var body = document.body;
    body.onContextmenu = "return false;";
    body.addEventListener('contextmenu',function (e){
        ocm_context_menu.style.left = e.pageX + "px";
        ocm_context_menu.style.top = e.pageY + "px";
        ocm_context_menu.style.display = "block";
    });
    body.addEventListener('click',function (e){
        ocm_context_menu.style.display = "none";
    });
    document.querySelector("#ocm-js-v").innerHTML = "OCM.js v1.0.0";
}