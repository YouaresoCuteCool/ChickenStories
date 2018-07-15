var flag2=0;
$('.logo input').click(function(){
	if(flag2%2 == 0){
	  $('.minState').css('display','block');
	  $('.jq22-container').css('display','none');
	  $('.todaytips').css('display','none'); 
	  $('#footer').css('display','none');
	  $('.logo input').css('background','url("../images/cha.svg") no-repeat')
	}else{
	  $('.minState').css('display','none');
	  $('.jq22-container').css('display','block');
	  $('.todaytips').css('display','block'); 
	  $('#footer').css('display','block');
	  $('.logo input').css('background','url("../images/logo3.svg") no-repeat')
	}
	flag2++;
})  
window.onresize=function(){
	var w = window.innerWidth||document.documentElement.clientWidth||document.body.clientWidth;
    if(w>750){
    	$('.minState').css('display','none');
   	    $('.jq22-container').css('display','block');
	    $('.todaytips').css('display','block'); 
	    $('#footer').css('display','block');
   	    $('.logo input').css('background','url("../images/logo3.svg") no-repeat');
    }
}
$('a').click(function(){
	$('.playvideo').css({
		'display':'block'
	})
})
$('.cancelvideo').click(function(){
	$('.playvideo').css({
		'display':'none'
	})
})






