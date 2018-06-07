var flag2=0;
$('.logo input').click(function(){
	if(flag2%2 == 0){
		$('.minState').css('display','block');
		$('.box').css('display','none'); 
		$('.logo input').css('background','url("../images/cha.svg") no-repeat');
	}else{
		$('.minState').css('display','none');
		$('.box').css('display','block'); 
		$('.logo input').css('background','url("../images/logo3.svg") no-repeat');
	}
	flag2++;
})  
window.onresize=function(){
	var w = window.innerWidth||document.documentElement.clientWidth||document.body.clientWidth;
	if(w>750){
		$('.minState').css('display','none');
		$('.box').css('display','block');
		$('.logo input').css('background','url("../images/logo3.svg") no-repeat');
	}
}
$('.btn-default').hover(function(){
	$(this).parent().siblings().attr('class','btn-group');
	$(this).parent().attr('class','btn-group open');
})
// 添加标签
$('[type="checkbox"]').click(function(){
	$('.filter-tags').prepend('<li class="active-filter">'+$(this).siblings().text()+'</li>');
	$('.sel-recipes').css('display','block');
	// 删除单独标签
	$('.active-filter').click(function(){
		$(this).css('display','none');
		var num=1;
		$('.active-filter').each(function(n){	
			num++; 
			if($(this).css("display") == 'none'){  
				num--;
			}
		});
		if (num<=1) {
			$('.sel-recipes').css('display','none');
			$('.filter-tags').html('<li class="clear-filter-li">清除所有</li>');
		}else{
			$(this).css('display','none');
		}
	})
	// 一键删除
	$('.clear-filter-li').click(function(){
		$('.sel-recipes').css('display','none');
	})
})