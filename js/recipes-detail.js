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
