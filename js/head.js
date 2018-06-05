window.onresize=function(){
	var w = window.innerWidth||document.documentElement.clientWidth||document.body.clientWidth;
    if(w>750){
    	$('.minState').css('display','none');
    	$('.logo-cha').css('display','none');
    	$('.logo-image').css('display','block')
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

$('.logo-image').click(function(){
	$(this).css('display','none');
	$(this).parent().children('.logo-cha').css('display','block');
	$('.minState').css('display','block');
})
$('.logo-cha').click(function(){
	$(this).css('display','none');
	$(this).parent().children('.logo-image').css('display','block');
	$('.minState').css('display','none');
})

                