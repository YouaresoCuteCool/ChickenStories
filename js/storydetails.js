var flag2=0;
$('.logo input').click(function(){
  if(flag2%2 == 0){
    $('.minState').css('display','block');
    $('.login').css('display','none');
    $('.box').css('display','none'); 
    $('#footer').css('display','none');
    $('.logo input').css('background','url("../images/cha.svg") no-repeat')
  }else{
    $('.minState').css('display','none');
    $('.login').css('display','block');
    $('.box').css('display','block'); 
    $('#footer').css('display','block');
    $('.logo input').css('background','url("../images/logo3.svg") no-repeat')
  }
  flag2++;
})  
window.onresize=function(){
  var w = window.innerWidth||document.documentElement.clientWidth||document.body.clientWidth;
    if(w>750){
      $('.minState').css('display','none');
        $('.login').css('display','block');
      $('.box').css('display','block'); 
      $('#footer').css('display','block');
        $('.logo input').css('background','url("../images/logo3.svg") no-repeat');
    }
}
$(window).scroll(function(){ 
    var winPos = $(window).scrollTop();  
    if(winPos>560){        
        $('.section').css({
          "position":"fixed",
          "top":"0",
          "left":"0",
          "padding":"0 19%",
          "width":"100%",
          "background-color":"white",
          "z-index":"99999999999999",
      });
         var c = winPos-540;
         $('aside').css({ 
       "position":"absolute",        
          "top":+c
        });
    }else{
      $('aside').css({ 
       "position":"absolute",        
          "top":"10px"
        });
          $('.section').css({
            "position":"static",
            "padding":"0"
           });
    }
 
});

var flag=true;  
$('.translate').click(function(){
    if(flag){
        $(this).next().css({"display":"block"});
    }else{
        $(this).next().css('display','none');
    }
    flag=!flag;
  })
 $('.likeb').click(function(){
    if(flag){
        var num=parseInt($(this).children('p').text());
        // console.log($(this).children('p').text());
        $(this).css({
          'background-image':'url("../images/storydetails/icon_heart_made_in_berlin.svg")'
        });
        $(this).children('p').text(num+1);
    }else{
        var num=parseInt($(this).children('p').text());
        console.log($(this).children('p').text());
        $(this).css({
          'background-image':'url("../images/storydetails/icon_heart.svg")'
        })
         $(this).children('p').text(num-1);
    }
    flag=!flag;
 })
 $('.replyb').click(function(){
    $('.logind').css({
      'display':'block'
    })
 })
$('.logon').click(function(){
    $('.logind').css({
      'display':'block'
    })
})
$('.cancel').click(function(){
    $('.logind').css({
      'display':'none'
    })
})









