function findWithAttr(t,e,a){for(var o=0;o<t.length;o+=1)for(var s=0;s<t[o].length;s+=1)if(t[o][s][e]===a)return{rowIndex:o,index:s};return{rowIndex:-1,index:-1}}function reloadBtn(t){var e=vueData.buttons[t.rowIndex][t.index];e.state="none",e.styleClass="none";var a=new TimelineMax,o=$(".rowIndex-"+t.rowIndex+" .buttonIndex-"+t.index+" .inner.text");a.set(o,{scale:.1}),a.to(o,1,{scale:1,onStart:function(){changeStep(e,"step1"),e.color=getRandomColor()},onComplete:function(){e.state="wait"}})}function changeStep(t,e){switch(e){case"step1":t.styleClass="step1",t.text="7";break;case"step2":t.styleClass="step2",t.text="77";break;case"step3":t.styleClass="step3",t.text="★";break;case"complete":t.text="7"}}function getRandomColor(){return["red","blue","yellow"][Math.floor(3*Math.random())]}function getComboScore(){return vueData.combo>500?5:vueData.combo>400?4:vueData.combo>300?3:vueData.combo>200?2:vueData.combo>90?1.9:vueData.combo>80?1.8:vueData.combo>70?1.7:vueData.combo>60?1.6:vueData.combo>50?1.5:vueData.combo>40?1.4:vueData.combo>30?1.3:vueData.combo>20?1.2:vueData.combo>10?1.1:1}var vueData={buttons:[[{state:"wait",text:"7",styleClass:"step1",color:"red"},{state:"wait",text:"7",styleClass:"step1",color:"red"},{state:"wait",text:"7",styleClass:"step1",color:"red"},{state:"wait",text:"7",styleClass:"step1",color:"red"}],[{state:"wait",text:"7",styleClass:"step1",color:"red"},{state:"wait",text:"7",styleClass:"step1",color:"red"},{state:"wait",text:"7",styleClass:"step1",color:"red"},{state:"wait",text:"7",styleClass:"step1",color:"red"}],[{state:"wait",text:"7",styleClass:"step1",color:"red"},{state:"wait",text:"7",styleClass:"step1",color:"red"},{state:"wait",text:"7",styleClass:"step1",color:"red"},{state:"wait",text:"7",styleClass:"step1",color:"red"}],[{state:"wait",text:"7",styleClass:"step1",color:"red"},{state:"wait",text:"7",styleClass:"step1",color:"red"},{state:"wait",text:"7",styleClass:"step1",color:"red"},{state:"wait",text:"7",styleClass:"step1",color:"red"}]],score:0,combo:0,time:60},userName="",mainVue=new Vue({el:"#main",data:vueData,methods:{buttonClick:function(t,e){var a=findWithAttr(vueData.buttons,"state","select"),o=void 0,s=vueData.buttons[t][e],r={rowIndex:t,index:e};if(-1!==a.rowIndex&&-1!==a.rowIndex){if((o=vueData.buttons[a.rowIndex][a.index]).styleClass!==s.styleClass||o.color!==s.color)return o.state="wait",vueData.combo=0,!1;if("wait"!==s.state)return"select"===s.state?s.state="wait":o.state="wait",!1;var n=getComboScore();switch(s.styleClass){case"step1":changeStep(s,"step2"),vueData.combo+=1,vueData.score+=1e3*n;break;case"step2":changeStep(s,"step3"),vueData.combo+=1,vueData.score+=3e3*n;break;case"step3":changeStep(s,"complete"),reloadBtn(r),vueData.combo+=1,vueData.score+=5e3*n}reloadBtn(a)}else s.state="select"}}});$(document).ready(function(){function t(){setTimeout(function(){vueData.time-=1,vueData.time>0?t():location.reload()},1e3)}var e=document.getElementById("main"),a=Hammer(e,{});a.on("panstart",function(t){$(event.target).closest(".gameButton").mousedown()}),a.on("Press",function(t){$(event.target).closest(".gameButton").mousedown()}),a.get("pinch").set({enable:!0}),a.get("rotate").set({enable:!0}),a.get("pan").set({direction:Hammer.DIRECTION_ALL}),a.get("swipe").set({direction:Hammer.DIRECTION_VERTICAL});var o=new Hammer.Pinch,s=new Hammer.Rotate;o.recognizeWith(s);for(var r=vueData.buttons,n=0;n<r.length;n+=1)for(var l=0;l<r[n].length;l+=1)r[n][l].color=getRandomColor();t(),userName=void 0});