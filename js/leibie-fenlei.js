$('.storyPic div').mouseover(function(){
	$(this).children('p').children('a').css('opacity','1');
}).mouseout(function(){
	$(this).children('p').children('a').css('opacity','.8');
})
$('.more').click(function(){
	var newAdd = $('<div class="storyPic">\
		<div>\
		<div class="position-border">\
		<a href="" class="Pic"><img src="../images/s1.jpg" alt=""></a>\
		<img src="../images/play.svg" alt="" class="play">\
		<div class="dianzan">\
		<span class="like-heart"></span>\
		<span class="dianzanNum">423</span>\
		<span class="cookTime">15 分钟</span>\
		</div>\
		</div>\
		<p><a href="" class="txtlink">沙拉菜终极指南</a></p>\
		</div>\
		\
		<div>\
		<div class="position-border">\
		<a href="" class="Pic"><img src="../images/s2.jpg" alt=""></a>\
		<img src="../images/play.svg" alt="" class="play">\
		<div class="dianzan">\
		<span class="like-heart"></span>\
		<span class="dianzanNum">523</span>\
		<span class="cookTime">15 分钟</span>\
		</div>\
		</div> \
		<p><a href="" class="txtlink">如何在鱼料理上百战百胜</a></p>\
		</div>\
		<div>\
		<div class="position-border">\
		<a href="" class="Pic"><img src="../images/s3.jpg" alt=""></a>\
		<div class="dianzan">\
		<span class="like-heart"></span>\
		<span class="dianzanNum">23</span>\
		<span class="cookTime">15 分钟</span>\
		</div>\
		</div>\
		<p><a href="" class="txtlink">香料与柑橘味道的完美碰撞：秘鲁酸桔汁腌鱼</a></p>\
		</div>\
		<div>\
		<div class="position-border">\
		<a href="" class="Pic"><img src="../images/s4.jpg" alt=""></a>\
		\
		<div class="dianzan">\
		<span class="like-heart"></span>\
		<span class="dianzanNum">13</span>\
		<span class="cookTime">15 分钟</span>\
		</div>\
		</div>\
		<p><a href="" class="txtlink">为什么诸多专业餐厅都有男性经营？</a></p>  \
		</div>\
		<div>\
		<div class="position-border">\
		<a href="" class="Pic"><img src="../images/s5.jpg" alt=""></a>\
		\
		<div class="dianzan">\
		<span class="like-heart"></span>\
		<span class="dianzanNum">323</span>\
		<span class="cookTime">15 分钟</span>\
		</div>\
		</div>\
		<p><a href="" class="txtlink">如何充分利用椰子的每一分每一毫</a></p>\
		</div>\
		<div>\
		<div class="position-border">\
		<a href="" class="Pic"><img src="../images/s6.jpg" alt=""></a>\
		\
		<div class="dianzan">\
		<span class="like-heart"></span>\
		<span class="dianzanNum">223</span>\
		<span class="cookTime">15 分钟</span>\
		</div>\
		</div> \
		<p><a href="" class="txtlink">27种可食花朵以及如何使用它们</a></p>	                \
		</div>\
		<div>\
		<div class="position-border">\
		<a href="" class="Pic"><img src="../images/s7.jpg" alt=""></a>\
		\
		<div class="dianzan">\
		<span class="like-heart"></span>\
		<span class="dianzanNum">123</span>\
		<span class="cookTime">15 分钟</span>\
		</div>\
		</div>\
		<p><a href="" class="txtlink">咖啡、曲奇和巧克力的丝滑梦幻组合</a></p>	                \
		</div>\
		<div>\
		<div class="position-border">\
		<a href="" class="Pic"><img src="../images/s8.jpg" alt=""></a>\
		\
		<div class="dianzan">\
		<span class="like-heart"></span>\
		<span class="dianzanNum">403</span>\
		<span class="cookTime">15 分钟</span>\
		</div>\
		</div>\
		<p><a href="" class="txtlink">关于西瓜，你应该知道的4件事</a></p>	                \
		</div>\
		</div>\
		')
	$('.container').append(newAdd);
	var flag = 0;
	$('.dianzan .like-heart').click(function(){
		var num = $(this).next('.dianzanNum').text();
		console.log(num)
		if(flag%2 == 0){
			$(this).css('background','url("../images/like_filled.svg") no-repeat');
			$(this).css('background-size','30px 30px');
			num++;
			$(this).next('.dianzanNum').text(num)
		}else{
			$(this).css('background','url("../images/like_white.svg") no-repeat');
			$(this).css('background-size','30px 30px');
			num--;
			$(this).next('.dianzanNum').text(num);
		}
		flag++;
	})
})
var flag = 0;
$('.dianzan .like-heart').click(function(){
	var num = $(this).next('.dianzanNum').text();
	console.log(num)
	if(flag%2 == 0){
		$(this).css('background','url("../images/like_filled.svg") no-repeat');
		$(this).css('background-size','30px 30px');
		num++;
		$(this).next('.dianzanNum').text(num)
	}else{
		$(this).css('background','url("../images/like_white.svg") no-repeat');
		$(this).css('background-size','30px 30px');
		num--;
		$(this).next('.dianzanNum').text(num);
	}
	flag++;
})
window.onresize=function(){
	var w = window.innerWidth||document.documentElement.clientWidth||document.body.clientWidth;
	if(w>750){
		$('.minState').css('display','none');
		$('.container').css('display','block'); 
		$('.btns').css('display','block');
		$('#footer').css('display','block');
		$('.logo input').css('background','url("../images/logo3.svg") no-repeat');
	}
}
var flag5=0;
$('.logo input').click(function(){
	if(flag5%2 == 0){
		$('.container').css('display','none');
		$('.btns').css('display','none');
		$('#footer').css('display','none');
	}else{
		$('.container').css('display','block');
		$('.btns').css('display','block');
		$('#footer').css('display','block');
	}
	flag5++;
})