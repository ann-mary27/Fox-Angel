const button_more=document.querySelector('.view-more');
const button_less=document.querySelector('.view-less');
var evt = new MouseEvent('click');
button_more.addEventListener('click', ()=>{
//     var dots = document.getElementById("dots");
//   var moreText = document.getElementById("more");
//   var btnText = document.getElementById("myBtn");
if (button_more.style.visibility==="hidden") {
     button_more.style.visibility="visible";
    button_more.style.transitionDuration="1500ms";
    button_less.style.transitionDuration="50ms";
} else {
    button_more.style.visibility="hidden";
    button_more.style.transitionDuration="50ms";
    button_less.style.transitionDuration="1000ms";
}

    // button_less.style.visibility=button_less.style.visibility==="hidden"?"visible":"hidden";
    
    

//   else {
//     dots.style.display = "none";
//     btnText.innerHTML = "Read less"; 
//     moreText.style.display = "inline";
//   }

})

button_less.addEventListener('click',()=>{

    // button_more.style.visibility="visible";
    button_more.dispatchEvent(evt);
})


//  if (dots.style.display === "none") {
//     dots.style.display = "inline";
//     btnText.innerHTML = "Read more"; 
//     moreText.style.display = "none";
//   }