var flag2=0;
$('.logo input').click(function(){
	if(flag2%2 == 0){
	  $('.minState').css('display','block');
	  $('#page').css('display','none');
	  $('#footer').css('display','none');
	  $('.logo input').css('background','url("../images/cha.svg") no-repeat')
	}else{
	  $('.minState').css('display','none');
	  $('#page').css('display','block');
	  $('#footer').css('display','block');
	  $('.logo input').css('background','url("../images/logo3.svg") no-repeat')
	}
	flag2++;
})  
window.onresize=function(){
	var w = window.innerWidth||document.documentElement.clientWidth||document.body.clientWidth;
    if(w>750){
    	$('.minState').css('display','none');
   	    $('#page').css('display','block');
   	    $('#footer').css('display','block'); 
   	    $('.logo input').css('background','url("../images/logo3.svg") no-repeat');
    }
}
$('.showup').mouseover(function(){
	console.log($(this).children());
	$(this).children().css({
		'display':'inline-block',
		'width':'70%',
	    'height':'80%',
	    'border-radius':'15px',
	    'background-color':'white',
	    'position':'relative',
	    'top':'10%',
	    'left':'12%'
		})
})
$('.showup').mouseout(function(){
	$(this).children().css('display','none')

})