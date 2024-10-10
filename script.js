let treands=document.querySelectorAll(".treandsCard");
let card=document.querySelectorAll(".card");
let count=0;

treands.forEach(function(slide,index){
    slide.style.left=`${index*100}%`
})

function myFun(){
    treands.forEach(function(curvVal){
        curvVal.style.transform=`translateX(-${count*100}%)`
    })
}
setInterval(function(){
    count++;
    if(count==treands.length){
        count=0;
    }
    myFun()
}, 2000)

