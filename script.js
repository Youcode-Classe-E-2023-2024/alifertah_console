let e = document.getElementById("test");
let l = document.getElementById("phoneTabs")
// console.log("testtttttttt   ");
    
function test(){
    var c = 0;
    e.addEventListener('click' ,function show(){
        if(c === 0){
            c = 1;
            l.style.display = "flex";
        }
        else{
            c = 0;
            l.style.display = "none";
        }
        })
}

test();