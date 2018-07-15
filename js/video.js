var flag2=0;
$('.logo input').click(function(){
	if(flag2%2 == 0){
	  $('.minState').css('display','block');
	  $('.box').css('display','none'); 
	  $('#footer').css('display','none');
	  $('.logo input').css('background','url("../images/cha.svg") no-repeat')
	}else{
	  $('.minState').css('display','none');
	  $('.box').css('display','block'); 
	  $('.logo input').css('background','url("../images/logo3.svg") no-repeat')
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
var imgs=["../images/tips/videos/R1282-photo-final-medium-landscape-200.jpg",
"../images/tips/videos/R964-photo-final-02-medium-landscape-200.jpg",
"../images/tips/videos/R1250-photo-final-medium-landscape-200.jpg",
"../images/tips/videos/R1310-photo-final-medium-landscape-200.jpg",
"../images/tips/videos/R1309-photo-final-medium-landscape-200.jpg",
'../images/tips/videos/R1211-photo-final-medium-landscape-200.jpg',
'../images/tips/videos/R964-photo-final-02-medium-landscape-200.jpg',
'../images/tips/videos/R897-photo-final-4x3-medium-landscape-200.jpg',
'../images/tips/videos/R926-photo-final-4x3-medium-landscape-200.jpg',
'../images/tips/videos/R1127-photo-final-medium-landscape-200.jpg',
'../images/tips/videos/R1128-photo-final-medium-landscape-200.jpg',
'../images/tips/videos/R1247-photo-final-medium-landscape-200.jpg',
'../images/tips/videos/R1246-photo-final-medium-landscape-200.jpg',
'../images/tips/videos/R1261-photo-final-medium-landscape-200.jpg',
'../images/tips/videos/R1246-photo-final-medium-landscape-200.jpg',
'../images/tips/videos/R1237-photo-final-2-medium-landscape-200.jpg',
'../images/tips/videos/R1182-photo-final-medium-landscape-200.jpg',
'../images/tips/videos/R1183-photo-final-medium-landscape-200.jpg'
]
$('.linkvideo').each(function(n){
    $(this).css({
        'background-image':"url('"+imgs[n]+"')",
        'background-size' : 'cover'
    })
})
$('.videomore').each(function(n){
	$(this).mouseover(function(){
		$(this).children('a').children($('.linkvideo')).css({
			'box-shadow':' 0px 0px 10px 4px #e6e6e6',
			'transform':'scale(1.005)'
		})
	})
	$(this).mouseout(function(){
		$(this).children('a').children($('.linkvideo')).css({
			'box-shadow':' 0px 0px 0px 0px transparent',
			'transform':'scale(1)'
		})
	})
})
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
$('.more').click(function(){

	var morevideo = $('<section>\
<div class="videomore">\
	<a>\
	<div class="linkvideo"><img src="../images/tips/icon_play_big.svg" alt=""></div>\
	</a>\
	<h4>意式炖牛脸肉佐西芹根泥</h4>\
\
<p>01:54 分钟24.3K 次观看</p>\
</div>\
<div class="videomore">\
	<a>\
	<div class="linkvideo"><img src="../images/tips/icon_play_big.svg" alt=""></div>\
	</a>\
	<h4>小茴香番茄薄荷意面</h4>\
\
<p>0:53 分钟23.5K 次观看</p>\
</div>\
<div class="videomore">\
	<a>\
	<div class="linkvideo"><img src="../images/tips/icon_play_big.svg" alt=""></div>\
	</a>\
	<h4>煎牛排凯撒沙拉</h4>\
\
<p>02:38 分钟16.8K 次观看</p>\
</div>\
<div class="videomore">\
	<a>\
	<div class="linkvideo"><img src="../images/tips/icon_play_big.svg" alt=""></div>\
	</a>\
	<h4>鱼饼佐西瓜沙拉</h4>\
\
<p>2:21 分钟214.1K 次观看</p>\
</div>\
<div class="videomore">\
	<a>\
	<div class="linkvideo"><img src="../images/tips/icon_play_big.svg" alt=""></div>\
	</a>\
	<h4>辣椒干酪小面包片</h4>\
\
<p>02:45 分钟13.9K 次观看</p>\
</div>\
<div class="videomore">\
	<a>\
	<div class="linkvideo"><img src="../images/tips/icon_play_big.svg" alt=""></div>\
	</a>\
	<h4>自制香草布丁</h4>\
\
<p>02:12 分钟2743 次观看</p>\
</div>\
<div class="videomore">\
	<a>\
	<div class="linkvideo"><img src="../images/tips/icon_play_big.svg" alt=""></div>\
	</a>\
	<h4>香煎西兰花粗麦粉佐柠檬酸奶</h4>\
\
<p>0:58 分钟23.1K 次观看</p>\
</div>\
<div class="videomore">\
	<a>\
	<div class="linkvideo"><img src="../images/tips/icon_play_big.svg" alt=""></div>\
	</a>\
	<h4>如何剥豌豆</h4>\
\
<p>03:25 分钟15.9K 次观看</p>\
</div>\
<div class="videomore">\
	<a>\
	<div class="linkvideo"><img src="../images/tips/icon_play_big.svg" alt=""></div>\
	</a>\
	<h4>3种口味甜馅饼</h4>\
\
<p>1:45 分钟26.1K 次观看</p>\
</div>\
<div class="videomore">\
	<a>\
	<div class="linkvideo"><img src="../images/tips/icon_play_big.svg" alt=""></div>\
	</a>\
	<h4>如何低温慢烤牛排</h4>\
\
<p>1:45 分钟22.1K 次观看</p>\
</div>\
<div class="videomore">\
	<a>\
	<div class="linkvideo"><img src="../images/tips/icon_play_big.svg" alt=""></div>\
	</a>\
	<h4>辣椒干酪小面包片</h4>\
\
<p>02:45 分钟13.9K 次观看</p>\
</div>\
<div class="videomore">\
	<a>\
	<div class="linkvideo"><img src="../images/tips/icon_play_big.svg" alt=""></div>\
	</a>\
	<h4>鱼饼佐西瓜沙拉</h4>\
<p>03:59 分钟24.7K 次观看</p>\
</div>\
<div class="videomore">\
	<a>\
	<div class="linkvideo"><img src="../images/tips/icon_play_big.svg" alt=""></div>\
	</a>\
	<h4>香煎西兰花粗麦粉佐柠檬酸奶</h4>\
\
<p>0:58 分钟23.1K 次观看</p>\
</div>\
<div class="videomore">\
	<a>\
	<div class="linkvideo"><img src="../images/tips/icon_play_big.svg" alt=""></div>\
	</a>\
	<h4>Grilled peaches with crumble<br> and ice cream</h4>\
<p>01:25 分钟17.9K 次观看</p>\
</div>\
<div class="videomore">\
	<a>\
	<div class="linkvideo"><img src="../images/tips/icon_play_big.svg" alt=""></div>\
	</a>\
	<h4>芦笋丝山羊芝士沙拉</h4>\
<p>0:40 分钟1412 次观看</p>\
</div>\
<div class="videomore">\
	<a>\
	<div class="linkvideo"><img src="../images/tips/icon_play_big.svg" alt=""></div>\
	</a>\
	<h4>伏特加配苦柠水</h4>\
\
<p>1:28 分钟23.1K 次观看</p>\
</div>\
<div class="videomore">\
	<a>\
	<div class="linkvideo"><img src="../images/tips/icon_play_big.svg" alt=""></div>\
	</a>\
	<h4>贝里尼鸡尾酒</h4>\
\
<p>02:45 分钟13.9K 次观看</p>\
</div>\
<div class="videomore">\
	<a>\
	<div class="linkvideo"><img src="../images/tips/icon_play_big.svg" alt=""></div>\
	</a>\
 <h4>可乐鸡尾酒</h4>\
\
<p>01:59 分钟17623 次观看</p>\
</div>\
</section>')
	$('section').append(morevideo);
		var imgs=["../images/tips/videos/R1282-photo-final-medium-landscape-200.jpg",
"../images/tips/videos/R964-photo-final-02-medium-landscape-200.jpg",
"../images/tips/videos/R1250-photo-final-medium-landscape-200.jpg",
"../images/tips/videos/R1310-photo-final-medium-landscape-200.jpg",
"../images/tips/videos/R1309-photo-final-medium-landscape-200.jpg",
'../images/tips/videos/R1211-photo-final-medium-landscape-200.jpg',
'../images/tips/videos/R964-photo-final-02-medium-landscape-200.jpg',
'../images/tips/videos/R897-photo-final-4x3-medium-landscape-200.jpg',
'../images/tips/videos/R926-photo-final-4x3-medium-landscape-200.jpg',
'../images/tips/videos/R1127-photo-final-medium-landscape-200.jpg',
'../images/tips/videos/R1128-photo-final-medium-landscape-200.jpg',
'../images/tips/videos/R1247-photo-final-medium-landscape-200.jpg',
'../images/tips/videos/R1246-photo-final-medium-landscape-200.jpg',
'../images/tips/videos/R1261-photo-final-medium-landscape-200.jpg',
'../images/tips/videos/R1246-photo-final-medium-landscape-200.jpg',
'../images/tips/videos/R1237-photo-final-2-medium-landscape-200.jpg',
'../images/tips/videos/R1182-photo-final-medium-landscape-200.jpg',
'../images/tips/videos/R1183-photo-final-medium-landscape-200.jpg',
'../images/tips/videos/R1211-photo-final-medium-landscape-200.jpg',
'../images/tips/videos/R964-photo-final-02-medium-landscape-200.jpg',
'../images/tips/videos/R897-photo-final-4x3-medium-landscape-200.jpg',
'../images/tips/videos/R926-photo-final-4x3-medium-landscape-200.jpg',
'../images/tips/videos/R1127-photo-final-medium-landscape-200.jpg',
'../images/tips/videos/R1128-photo-final-medium-landscape-200.jpg',
'../images/tips/videos/R1247-photo-final-medium-landscape-200.jpg',
'../images/tips/videos/R1246-photo-final-medium-landscape-200.jpg',
'../images/tips/videos/R1261-photo-final-medium-landscape-200.jpg',
'../images/tips/videos/R1246-photo-final-medium-landscape-200.jpg',
'../images/tips/videos/R1237-photo-final-2-medium-landscape-200.jpg',
'../images/tips/videos/R1182-photo-final-medium-landscape-200.jpg',
'../images/tips/videos/R1183-photo-final-medium-landscape-200.jpg',
'../images/tips/videos/R1211-photo-final-medium-landscape-200.jpg',
'../images/tips/videos/R964-photo-final-02-medium-landscape-200.jpg',
'../images/tips/videos/R897-photo-final-4x3-medium-landscape-200.jpg',
'../images/tips/videos/R926-photo-final-4x3-medium-landscape-200.jpg',
'../images/tips/videos/R1127-photo-final-medium-landscape-200.jpg',
'../images/tips/videos/R1128-photo-final-medium-landscape-200.jpg',
'../images/tips/videos/R1247-photo-final-medium-landscape-200.jpg',
'../images/tips/videos/R1246-photo-final-medium-landscape-200.jpg',
'../images/tips/videos/R1261-photo-final-medium-landscape-200.jpg',
'../images/tips/videos/R1246-photo-final-medium-landscape-200.jpg',
'../images/tips/videos/R1237-photo-final-2-medium-landscape-200.jpg',
'../images/tips/videos/R1182-photo-final-medium-landscape-200.jpg',
'../images/tips/videos/R1183-photo-final-medium-landscape-200.jpg',
'../images/tips/videos/R1211-photo-final-medium-landscape-200.jpg',
'../images/tips/videos/R964-photo-final-02-medium-landscape-200.jpg',
'../images/tips/videos/R897-photo-final-4x3-medium-landscape-200.jpg',
'../images/tips/videos/R926-photo-final-4x3-medium-landscape-200.jpg',
'../images/tips/videos/R1127-photo-final-medium-landscape-200.jpg',
'../images/tips/videos/R1128-photo-final-medium-landscape-200.jpg',
'../images/tips/videos/R1247-photo-final-medium-landscape-200.jpg',
'../images/tips/videos/R1246-photo-final-medium-landscape-200.jpg',
'../images/tips/videos/R1261-photo-final-medium-landscape-200.jpg',
'../images/tips/videos/R1246-photo-final-medium-landscape-200.jpg',
'../images/tips/videos/R1237-photo-final-2-medium-landscape-200.jpg',
'../images/tips/videos/R1182-photo-final-medium-landscape-200.jpg',
'../images/tips/videos/R1183-photo-final-medium-landscape-200.jpg',
'../images/tips/videos/R1211-photo-final-medium-landscape-200.jpg',
'../images/tips/videos/R964-photo-final-02-medium-landscape-200.jpg',
'../images/tips/videos/R897-photo-final-4x3-medium-landscape-200.jpg',
'../images/tips/videos/R926-photo-final-4x3-medium-landscape-200.jpg',
'../images/tips/videos/R1127-photo-final-medium-landscape-200.jpg',
'../images/tips/videos/R1128-photo-final-medium-landscape-200.jpg',
'../images/tips/videos/R1247-photo-final-medium-landscape-200.jpg',
'../images/tips/videos/R1246-photo-final-medium-landscape-200.jpg',
'../images/tips/videos/R1261-photo-final-medium-landscape-200.jpg',
'../images/tips/videos/R1246-photo-final-medium-landscape-200.jpg',
'../images/tips/videos/R1237-photo-final-2-medium-landscape-200.jpg',
'../images/tips/videos/R1182-photo-final-medium-landscape-200.jpg',
'../images/tips/videos/R1183-photo-final-medium-landscape-200.jpg',
'../images/tips/videos/R1211-photo-final-medium-landscape-200.jpg',
'../images/tips/videos/R964-photo-final-02-medium-landscape-200.jpg',
'../images/tips/videos/R897-photo-final-4x3-medium-landscape-200.jpg',
'../images/tips/videos/R926-photo-final-4x3-medium-landscape-200.jpg',
'../images/tips/videos/R1127-photo-final-medium-landscape-200.jpg',
'../images/tips/videos/R1128-photo-final-medium-landscape-200.jpg',
'../images/tips/videos/R1247-photo-final-medium-landscape-200.jpg',
'../images/tips/videos/R1246-photo-final-medium-landscape-200.jpg',
'../images/tips/videos/R1261-photo-final-medium-landscape-200.jpg',
'../images/tips/videos/R1246-photo-final-medium-landscape-200.jpg',
'../images/tips/videos/R1237-photo-final-2-medium-landscape-200.jpg',
'../images/tips/videos/R1182-photo-final-medium-landscape-200.jpg',
'../images/tips/videos/R1183-photo-final-medium-landscape-200.jpg',
'../images/tips/videos/R1211-photo-final-medium-landscape-200.jpg',
'../images/tips/videos/R964-photo-final-02-medium-landscape-200.jpg',
'../images/tips/videos/R897-photo-final-4x3-medium-landscape-200.jpg',
'../images/tips/videos/R926-photo-final-4x3-medium-landscape-200.jpg',
'../images/tips/videos/R1127-photo-final-medium-landscape-200.jpg',
'../images/tips/videos/R1128-photo-final-medium-landscape-200.jpg',
'../images/tips/videos/R1247-photo-final-medium-landscape-200.jpg',
'../images/tips/videos/R1246-photo-final-medium-landscape-200.jpg',
'../images/tips/videos/R1261-photo-final-medium-landscape-200.jpg',
'../images/tips/videos/R1246-photo-final-medium-landscape-200.jpg',
'../images/tips/videos/R1237-photo-final-2-medium-landscape-200.jpg',
'../images/tips/videos/R1182-photo-final-medium-landscape-200.jpg',
'../images/tips/videos/R1183-photo-final-medium-landscape-200.jpg',
]
$('.linkvideo').each(function(n){
    $(this).css({
        'background-image':"url('"+imgs[n]+"')",
        'background-size' : 'cover'
    })
})
})











