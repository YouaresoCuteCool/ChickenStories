window.onresize=function(){
	var w = window.innerWidth||document.documentElement.clientWidth||document.body.clientWidth;
	if(w>750){
		$('.minState').css('display','none');
		$('#footer').css('display','block');
		$('hr').css('display','block');
		$('.logo input').css('background','url("../images/logo3.svg") no-repeat');
	}
}
$('.leibie-hover').hide();
$('.xiaotieshi-hover').hide();
$('.category').mouseover(function(){
	$('.leibie-hover').show();
}).mouseout(function(){
	$('.leibie-hover').hide();
})
$('.tip').mouseover(function(){
	$('.xiaotieshi-hover').show();
}).mouseout(function(){
	$('.xiaotieshi-hover').hide();
})
var flag=0;
$('.logo input').click(function(){
	if(flag%2 == 0){
		$('.minState').css('display','block');
		$('#footer').css('display','none');
		$('hr').css('display','none');
		$('.logo input').css('background','url("../images/cha.svg") no-repeat');
	}else{
		$('.minState').css('display','none');
		$('#footer').css('display','block');
		$('hr').css('display','block');
		$('.logo input').css('background','url("../images/logo3.svg") no-repeat');
	}
	flag++;
})      