//<!--====================  this is swiper slider work   ===================== -->
var swiper = new Swiper(".mySwiper", {
  slidesPerView: 3,
  spaceBetween: 30,
  freeMode: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});
  //<!--====================  this is swiper slider work   ===================== -->


    //<!--====================  add to cart  work start from here   ===================== -->

    let temp=0;

addcart=()=>{

  let cart1= document.querySelector(".cart1")


  if (temp>9){
    alert("Space is full") 
    return;
   }

  cart1.innerHTML=temp;
  temp++;

}


 removecart=()=>{

   let cart1= document.querySelector(".cart1")

   if (temp<0){
    alert("Item does not exist") 
    return;
   }
 
   cart1.innerHTML=temp;
   temp--;
   
  
 
 }


 
      //<!--====================  add to cart  work end from here   ===================== -->

