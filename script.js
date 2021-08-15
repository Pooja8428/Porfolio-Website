$(document).ready(function(){
   $(document).scroll(function(){
      if(this.scrollY > 20){
          $('.navbar').addClass("sticky");
      }else{
          $('.navbar').removeClass("sticky");
      }
   });
});
$(document).ready(function () {
     $('.menu-btn').click(function () {
        $('ul').toggleClass('show')
     });
  });

$('.menu-btn').click(function(){
    $('.navbar .ul').toggleClass(".active");
});