$('.scul').mouseover(function(){
	$('.hover-show').css('display','block');
}).mouseout(function(){
	$('.hover-show').css('display','none');
})
$('.nav-self button').click(function(){
	$(this).css({"color":"black","border-bottom":"2px solid #0a7f78"});
	$(this).siblings('button').css({"color":"#0a7f78","border-bottom":"none"})
})
$('.hover-show').click(function(){
	$('.modal').css('display','block');
})
// modal
$('.modalHeader img').click(function(){
	$('.modal').css('display','none');
})
$('.other button').click(function(){
	$('.modal-design').css('display','block');
})
$('.modalHeader img').click(function(){
	$('.modal-design').css('display','none');
})
$('.modal .delete').click(function(){
	$('.modal').css('display','none');
})
$('.modalHeader img').click(function(){
	$('.modal-person').css('display','none');
})
// modal-book
$('.modal-book .cancel').click(function(){
	$('.modal-book').css('display','none')
})
$('.shizi').click(function(){
	$('.modal-book').css('display','block')
})
$('.modalHeader img').click(function(){
	$('.modal-book').css('display','none');
})
$('.btn-ziliao').click(function(){
	$('.modal-design').css('display','none');
	$('.modal-person').css('display','block');
})
$('.modal-person .left').click(function(){
	$('.modal-person').css('display','none');
	$('.modal-design').css('display','block');
})
$('.btn-pwd').click(function(){
	$('.modal-design').css('display','none');
	$('.modal-pwd').css('display','block');
})
$('.modal-pwd .left').click(function(){
	$('.modal-pwd').css('display','none');
	$('.modal-design').css('display','block');
})
$('.nav-self :first').click(function(){
	$('.book-click').css('display','block');
	$('.love-click').css('display','none');
})
$('.nav-self :last').click(function(){
	$('.book-click').css('display','none');
	$('.love-click').css('display','block');
})
$('.logo-cha').click(function(){
	$('.personal').css('display','block');  
})	
$('.logo-image').click(function(){
	$('.personal').css('display','none');
})
$('.modal-person .delete').click(function(){
	$('.modal-person').css('display','none');
})
$('.modal-pwd .right').click(function(){
	$('.modal-pwd').css('display','none');
})
$('.modal-design .btn-tuichu').click(function(){
	$('.modal-design').css('display','none');
})
$('.modal-book .minM').focus(function(){
	$('.modal-book .minM').css('border-bottom','1px solid #0a7f78');
	$('.modal-book .more').text('');
})
window.onresize=function(){
	var w = window.innerWidth||document.documentElement.clientWidth||document.body.clientWidth;
	if(w>750){
		$('.minState').css('display','none');
		$('.boder').css('display','block'); 
		$('#footer').css('display','block');
		$('.logo input').css('background','url("../images/logo3.svg") no-repeat');
	}
}
var flag6=0;
$('.logo input').click(function(){
	if(flag6%2 == 0){
		$('.boder').css('display','none');
	}else{
		$('.boder').css('display','block');
	}
	flag6++;
})
$('.modal-pwd .cancel').click(function(){
	$('.modal-pwd').css('display','none');
})
$('.modal-pwd .reserve').click(function(){
	$('.modal-pwd').css('display','none');
})
$('.modal-person .cancel').click(function(){
	$('.modal-person').css('display','none');
})
$('.modal-person .reserve').click(function(){
	$('.modal-person').css('display','none');
})
$('.shizi').click(function(){
	$('.modal-book').css('display','block');
	$('.modal-book .minM').focus();
	$('.modal-book .cancel').click(function(){
		$('.modal-book').css('display','none');
	})
	$('.modal-book .reserve').click(function(){
		var txt = $('.modal-book .minM').val();
		if(txt == ''){
			$('.modal-book .more').text('请添加标题！');
			$('.modal-book .minM').css('border-bottom','1px solid red');
		}else{
			$('.book-click').css('display','none');
			$('.chuangjian').css('display','block');
			$('.modal-book').css('display','none');
			var newAdd = $('\
				<div class="newAdd">\
				<img src="../images/more.png" alt="">\
				<p class="shipuname"></p>\
				<p>0道食谱</p>\
				</div>')
			$(newAdd).find('.shipuname').text(txt);
			$('.chuangjian').prepend(newAdd);
			$('.modal-book .minM').val('');
		}
	})
})
