var e=document.querySelector(".range-slider__slider"),s=document.querySelector(".range-slider__input--min"),u=document.querySelector(".range-slider__input--max"),o=[s,u];noUiSlider.create(e,{start:[0,900],connect:!0,step:1,range:{min:0,max:1e3},cssPrefix:"noui-"});e.classList.add("custom-range-slider");e.noUiSlider.on("update",function(i,n){o[n].value=Math.round(i[n])});o.forEach((i,n)=>{i.addEventListener("change",function(){let t=parseFloat(this.value);if(!isNaN(t)&&t>=0&&t<=1e3){let r=[null,null];r[n]=t,e.noUiSlider.set(r)}})});document.getElementById("reset-button").addEventListener("click",function(){s.value=0,u.value=900,e.noUiSlider.set([0,900])});
