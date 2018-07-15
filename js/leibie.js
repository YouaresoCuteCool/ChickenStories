window.onresize=function(){
	var w = window.innerWidth||document.documentElement.clientWidth||document.body.clientWidth;
	if(w>750){
		$('.minState').css('display','none');
		$('.container-leibie').css('display','block'); 
		$('#footer').css('display','block');
		$('.logo input').css('background','url("../images/logo3.svg") no-repeat');
	}
}
var flag4=0;
$('.logo input').click(function(){
	if(flag4%2 == 0){
		$('.container-leibie').css('display','none');
	}else{
		$('.container-leibie').css('display','block');
	}
	flag4++;
})