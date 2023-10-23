let e = document.getElementById("test");
let l = document.getElementById("phoneTabs")
    
function test(){
    var c = 0;
    e.addEventListener('click' ,function (){
        if(c === 0){
            c = 1;
            l.style.display = "flex";
            l.style.opacity = 0;
            setTimeout(function(){
                l.style.opacity = 1;
            },200);
        }
        else if(c === 1){
            c = 0;
            l.style.opacity = 0;
            setTimeout(function(){
                l.style.display = "none";
            },200);
        }
        })
}
test();