const serviceWork = document.querySelectorAll('.fade-animation');
const activeWork = function(entries){
    entries.forEach(entry => {
        if(entry.isIntersecting){
            entry.target.classList.add('fade'); 
        }else{
            entry.target.classList.remove('fade'); 
        }
    });
}
const serviceWork2 = new IntersectionObserver(activeWork);
for(let i= 0; i < serviceWork.length; i++){
    serviceWork2.observe(serviceWork[i]);
}


// scroll 

// const blocks = document.querySelectorAll(".section"),
//       block = document.querySelector("section"),
//       sectionHeight = parseInt(window.getComputedStyle(block).height);

// let inScroll = false, //flag for correct duration step by step
//     durationOneScroll = 200, //duration if one step
//     arrSections =[],
//     step = 0;

// for (let i = 0; i<blocks.length; i++) {
//   arrSections.push(sectionHeight*i);
// };

// //one page scroll by mouse wheel
// document.addEventListener("wheel", function(event) {
//   if(inScroll === false) {
//     inScroll = true;   
//     //move down
//     if(event.deltaY>0) {
//       step >= arrSections.length-1 ? step = arrSections.length-1 : step = step + 1;
//       window.scrollTo({
//         top: arrSections[step],
//         behavior: "smooth"
//       });
//       setTimeout(()=>{inScroll = false}, durationOneScroll);

//     } else {

//     //move up
//       step === 0 ? step = 0 : step = step - 1;
//       window.scrollTo({
//         top: arrSections[step],
//         behavior: "smooth"
//       });
//       setTimeout(()=>{inScroll = false}, durationOneScroll);
//     };
//   };
// });





