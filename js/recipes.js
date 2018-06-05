$('.btn').hover(function(){
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