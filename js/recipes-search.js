var flag2=0;
$('.logo input').click(function(){
	if(flag2%2 == 0){
		$('.box').css('display','none'); 
		$('.minState').css('display','block');
		$('#footer').css('display','none');
		$('.logo input').css('background','url("../images/cha.svg") no-repeat');
	}else{
		$('.minState').css('display','none');
		$('.box').css('display','block'); 
		$('#footer').css('display','block');
		$('.logo input').css('background','url("../images/logo3.svg") no-repeat');
	}
	flag2++;
})  
window.onresize=function(){
	var w = window.innerWidth||document.documentElement.clientWidth||document.body.clientWidth;
	if(w>750){
		$('.minState').css('display','none');
		$('.box').css('display','block');
		$('#footer').css('display','block');
		$('.logo input').css('background','url("../images/logo3.svg") no-repeat');
	}
}
$('.fr label').click(function(){
	$('.fr label').removeAttr('class');
	$(this).addClass('active');
})
