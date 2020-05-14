$(function(){
  $('a[href^="#"]').click(function(){
    var speed = 500;
    var href= $(this).attr("href");
    var target = $(href == "#" || href == "" ? 'html' : href);
    var position = target.offset().top;
    $("html, body").animate({scrollTop:position}, speed, "swing");
    return false;
  });

  // let tab = $(".exit");
  // function tabSwitch(){
  //   $('.header-list').removeClass('active');
  //   $('.header-list').addClass('active');
  // }
  // tab.click(tabSwitch);
});
$(document).ready(function(){
  var sides =["right"];
  for (var i =0; i< sides.length; ++i){
    var cSide = sides[i];
    $(".sidebar" + cSide).sidebar({side: cSide});
  }
  $(".btn[data-action]").on("click",function(){
    var $this =$(this);
    var action = $this.attr("data-action");
    var side = $this.attr("data-side");
    $(".sidebar" + side).trigger("sidebar" + action);
    return false;
    })
})