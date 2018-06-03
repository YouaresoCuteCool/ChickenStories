var readyCanvas=document.getElementsByTagName('canvas')[0];
var readyContext=readyCanvas.getContext('2d');
readyContext.beginPath();
readyContext.font='15px bold';
readyContext.strokeText('15',30,38);
readyContext.font='12px lighter';
readyContext.strokeText('分钟',26,50);
readyContext.strokeStyle='#fec40a';
readyContext.lineWidth=2;
readyContext.arc(40,40,40,Math.PI*1.5,Math.PI*2,false);
readyContext.stroke();
var readyCan=document.getElementsByTagName('canvas')[1];
var readyCon=readyCan.getContext('2d');
readyCon.beginPath();
readyCon.font='15px bold';
readyCon.strokeText('20',30,38);
readyCon.font='12px lighter';
readyCon.strokeText('分钟',26,50);
readyCon.strokeStyle='#fec40a';
readyCon.lineWidth=2;
readyCon.arc(40,40,40,Math.PI*1.5,Math.PI*2.1,false);
readyCon.stroke();
var readyC=document.getElementsByTagName('canvas')[2];
var readyCxt=readyC.getContext('2d');
readyCxt.font='15px bold';
readyCxt.strokeText('0',33,38);
readyCxt.font='12px lighter';
readyCxt.strokeText('分钟',26,50);
readyCxt.strokeStyle='#fec40a';
/**  
 * 文本框根据输入内容自适应高度  
 * @param                {HTMLElement}        输入框元素  
 * @param                {Number}                设置光标与输入框保持的距离(默认0)  
 * @param                {Number}                设置最大高度(可选)  
 */  
var autoTextarea = function(elem, extra, maxHeight) {  
    extra = extra || 0;  
    var isFirefox = !!document.getBoxObjectFor || 'mozInnerScreenX' in window,  
        isOpera = !!window.opera && !!window.opera.toString().indexOf('Opera'),  
        addEvent = function(type, callback) {  
            elem.addEventListener ?  
                elem.addEventListener(type, callback, false) :  
                elem.attachEvent('on' + type, callback);  
        },  
        getStyle = elem.currentStyle ? function(name) {  
            var val = elem.currentStyle[name];  
            if (name === 'height' && val.search(/px/i) !== 1) {  
                var rect = elem.getBoundingClientRect();  
                return rect.bottom - rect.top -  
                    parseFloat(getStyle('paddingTop')) -  
                    parseFloat(getStyle('paddingBottom')) + 'px';  
            };  
            return val;  
        } : function(name) {  
            return getComputedStyle(elem, null)[name];  
        },  
        minHeight = parseFloat(getStyle('height'));  
    elem.style.resize = 'none';  
    var change = function() {  
        var scrollTop, height,  
            padding = 0,  
            style = elem.style;  
        if (elem._length === elem.value.length) return;  
        elem._length = elem.value.length;  
        if (!isFirefox && !isOpera) {  
            padding = parseInt(getStyle('paddingTop')) + parseInt(getStyle('paddingBottom'));  
        };  
        scrollTop = document.body.scrollTop || document.documentElement.scrollTop;  
        elem.style.height = minHeight + 'px';  
        if (elem.scrollHeight > minHeight) {  
            if (maxHeight && elem.scrollHeight > maxHeight) {  
                height = maxHeight - padding;  
                style.overflowY = 'auto';  
            } else {  
                height = elem.scrollHeight - padding;  
                style.overflowY = 'hidden';  
            };  
            style.height = height + extra + 'px';  
            scrollTop += parseInt(style.height) - elem.currHeight;  
            document.body.scrollTop = scrollTop;  
            document.documentElement.scrollTop = scrollTop;  
            elem.currHeight = parseInt(style.height);  
        };  
    };  
    addEvent('propertychange', change);  
    addEvent('input', change);  
    addEvent('focus', change);  
    change();  
};  
var text = document.getElementsByTagName("textarea")[0];  
document.getElementsByClassName('box-nav')[0]
autoTextarea(text); // 调用  
// 滚动到某个位置固定导航栏
document.addEventListener('scroll', function (event) { 
    var scrollDistance = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
    if (scrollDistance >= 600) {    // 触发的位置
        document.getElementsByClassName('box-nav')[0].style.cssText="max-width: 860px;width: 95%;margin:0 auto;"
        document.getElementsByClassName('nav-header')[0].style.cssText = 'position:fixed;top:0px;left:0px;width:100%;border-bottom: 1px solid #CDCDCD;';
    } else {
        document.getElementsByClassName('nav-header')[0].style.cssText = 'position:static;';
    }
});
var flag=true;
$('.box .box-sec .stars .like .heart').click(function(){
    if(flag){
        $(this).css({
            'background-image':'url(../images/icon_heart_made_in_berlin.svg)',
            'background-size':'16px'
         });
        $(this).text(' 835');
    }else{
         $(this).css({
            'background-image':'url(../images/icon_heart.svg)',
            'background-size':'16px'
         });
         $(this).text(' 834');
    }
    flag=!flag;
})
$('.save').click(function(){
    $('.modal-mask').css('display','table');
})
$('.modal-close-button').click(function(){
    $('.modal-mask').css('display','none');
})
$('.box .section .comments .language button').click(function(){
    if(flag){
        $(this).siblings().css('display','block');
    }else{
        $(this).siblings().css('display','none');
    }
    flag=!flag;
})
$('.res_num').click(function(){
     if(flag){
        $(this).css({
            'background-image':'url(../images/icon_heart_made_in_berlin.svg)',
            'background-size':'16px'
         });
        $(this).text(' 1');
    }else{
         $(this).css({
            'background-image':'url(../images/icon_heart.svg)',
            'background-size':'16px'
         });
         $(this).text(' 0');
    }
    flag=!flag;
})
$('.reply').click(function(){
    $(this).siblings().css('display','inline-block');
})
// 点击空白处消失
$(".report_button").click(function(event){
    //取消冒泡事件
    event.stopPropagation();//这句是必须
    $(this).siblings().show();
});
//点击空白或者其他区域时divTop隐藏
$(document).click(function(){
    $(".box .section .comments .dropdown_button").hide();
});