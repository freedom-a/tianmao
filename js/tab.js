window.onload=function(){
  //表单动效和小心形动效
   var onearr=[];
   var twoarr=[];
   var threearr=[];
   var fourarr=[];
   var pinpaibottomcenterone=$(".pinpai-bottom-center-one");
   var pinpaitopcenterli=$(".pinpai-top-center-li");
   for(var i=1;i<25;i++){
    onearr.push("shuaxinimages/pinpaiul1"+i+".jpg");
    twoarr.push("shuaxinimages/pinpaiul2"+i+".jpg");
    threearr.push("shuaxinimages/pinpaiul3"+i+".jpg");
    fourarr.push("shuaxinimages/pinpaiul4"+i+".jpg");
   }
   function randomImg(arr){
      var newarr=[];
      for(var i=0;i<24;i++){
        newarr.push(arr[parseInt(Math.random()*24)]);
      }
      return newarr;
   }
   var arr=[onearr,twoarr,threearr,fourarr];
   function show(num){
     var imgarr=randomImg(arr[num]);
     for(var i=0;i<24;i++){
      var divs=document.createElement("div");
      divs.className="divs";
     divs.style.cssText="float:left;width:132px;height:80px;margin-right:1px;background:#fff;position:relative;";
     pinpaibottomcenterone[num].appendChild(divs);
     var as=document.createElement("a");
     as.href="#";
     divs.appendChild(as);
     var img1=document.createElement("img");
     img1.src=imgarr[i];
     img1.style.cssText="margin-left:21px;margin-top:15px;";
     as.appendChild(img1);
     var img2=document.createElement("img");
     img2.src="shuaxinimages/pinpaibj.png";
     img2.className="xin";
     img2.style.cssText="position:absolute;top:10px;right:8px;display:none;"
     divs.appendChild(img2);
     }
     var divsbox=$(".divs");
     var xins=$(".xin");
     for(var i=0;i<divsbox.length;i++){
      divsbox[i].index=i;
      divsbox[i].onmouseover=function(){
        for(var j=0;j<xins.length;j++){
          xins[j].style.display="none";
        }
        xins[this.index].style.display="block";
      }
     }
   }
   show(0);
   for(var i=0;i<pinpaitopcenterli.length;i++){
      pinpaitopcenterli[i].index=i;
      pinpaitopcenterli[i].flag=true;
      pinpaitopcenterli[0].flag=false;
      var now=0;
      pinpaitopcenterli[i].onclick=function(){
        now=this.index;
        for(var j=0;j<pinpaibottomcenterone.length;j++){
          pinpaibottomcenterone[j].style.display="none";
        }
        pinpaibottomcenterone[this.index].style.display="block";
       if(this.flag){
          show(this.index);
        this.flag=false;
       }
       for(var j=0;j<pinpaitopcenterli.length;j++){
          pinpaitopcenterli[j].style.color="#666";
          pinpaitopcenterli[j].style.textDecoration="none";
        }
        this.style.color="#000";
        this.style.textDecoration="underline";
      }
   }
   var pinpaitoprightli1=$(".pinpai-top-right-li1")[0];
   pinpaitoprightli1.onclick=function(){
    pinpaibottomcenterone[now].innerHTML="";
    show(now);
   }

     
  	/*var pinpaibottomcenterone=getClass("pinpai-bottom-center-one");
  	var pinpaitopcenterli=getClass("pinpai-top-center-li");
  	for(var i=0;i<pinpaitopcenterli.length;i++){
  		pinpaitopcenterli[i].index=i;
  		pinpaitopcenterli[i].onclick=function(){
  			for(var j=0;j<pinpaibottomcenterone.length;j++){
  				pinpaibottomcenterone[j].style.display="none";
  				pinpaitopcenterli[j].style.color="#666";
  				pinpaitopcenterli[j].style.textDecoration="none";
  			}
            pinpaibottomcenterone[this.index].style.display="block";
            this.style.color="#000";
  				this.style.textDecoration="underline";
  		}
  	}
    var pinpaibottomcenter1li=getClass("pinpai-bottom-center-1-li");
    var pinpaibottomcenter1liimg2=getClass("pinpai-bottom-center-1-li-img2");
    for(var i=0;i<pinpaibottomcenter1li.length;i++){
      pinpaibottomcenter1li[i].index=i;
    pinpaibottomcenter1li[i].onmouseover=function(){
      pinpaibottomcenter1liimg2[this.index].style.display="block";
    }
      pinpaibottomcenter1li[i].onmouseout=function(){
      pinpaibottomcenter1liimg2[this.index].style.display="none";
    }
    }*/
    //banner动效
    var bannerboimg=$(".bannerbo-img");
    var shuzili=$(".shuzi-li");
    var bannerbox=$(".bannerbox")[0];
    var num=1;
    function aa(){
      if(num==6){
        num=0;
      }
      for(var i=0;i<bannerboimg.length;i++){
        bannerboimg[i].style.zIndex=2;
        shuzili[i].style.background="#000000";
      }
       bannerboimg[num].style.zIndex=3;
       shuzili[num].style.background="#c40000";
       switch(num){
        case 0:bannerbox.style.background="#E0053B";
        break;
        case 1:bannerbox.style.background="#E8E8E8";
        break;
        case 2:bannerbox.style.background="#E8E8E8";
        break;
        case 3:bannerbox.style.background="#202020";
        break;
        case 4:bannerbox.style.background="#FB6B0A";
        break;
         case 5:bannerbox.style.background="#CE2043";
         break;
         default:bannerbox.style.background="white";
       }
       num++;
    }
    var t=setInterval(aa,2000);
    for(var i=0;i<shuzili.length;i++){
      shuzili[i].index=i;
      shuzili[i].onmouseover=function(){
        clearInterval(t);
            for(var j=0;j<shuzili.length;j++){
              shuzili[j].style.background="#000000";
              bannerboimg[j].style.zIndex=2;
            }
        this.style.background="#c40000";
        bannerboimg[this.index].style.zIndex=3;
        switch(this.index){
        case 0:bannerbox.style.background="#E0053B";
        break;
        case 1:bannerbox.style.background="#E8E8E8";
        break;
        case 2:bannerbox.style.background="#E8E8E8";
        break;
        case 3:bannerbox.style.background="#202020";
        break;
        case 4:bannerbox.style.background="#FB6B0A";
        break;
         case 5:bannerbox.style.background="#CE2043";
         break;
         default:bannerbox.style.background="white";
       }
      }
    shuzili[i].onmouseout=function(){
      num=this.index+1;
      t=setInterval(aa,2000);
    }
    }
    //文本框动效
    var sousuocentertop1=$(".sousuo-center-top-1")[0];
    sousuocentertop1.onfocus=function(){
      if(sousuocentertop1.value=="猫猫狗狗购物狂欢,给它最好的"){
        sousuocentertop1.value="";
      }
    }
     sousuocentertop1.onblur=function(){
      if(sousuocentertop1.value){
      }else{
        sousuocentertop1.value="猫猫狗狗购物狂欢,给它最好的";
      }
     }
     //楼层1内轮播动效;还可以用封装的方法再用循环遍历每个
      var f1leftcenterula=$(".f1-left-center-ul-a");
      function moveleft(){
        for(var i=0;i<f1leftcenterula.length;i++){
            animate(f1leftcenterula[i],{left:-90},600,Tween.Linear,function(){
              var first=getFirst(this);
              this.appendChild(first);
              this.style.left=0+"px";
            });
        }
      }
      function moveright(){
        for(var i=0;i<f1leftcenterula.length;i++){
           f1leftcenterula[i].style.left=-90+"px";
           var first=getFirst(f1leftcenterula[i]);
           var last=getLast(f1leftcenterula[i]);
           f1leftcenterula[i].insertBefore(last,first);
           animate(f1leftcenterula[i],{left:0},600,Tween.Linear);
        }
      }
      var t=setInterval(moveleft,2000);
      var f1leftcenterdiv1=$(".f1-left-center-div1");
      var f1leftcenterdiv2=$(".f1-left-center-div2");
      for(var i=0;i<f1leftcenterdiv1.length;i++){
            f1leftcenterdiv1[i].index=i;
            f1leftcenterdiv1[i].onmouseover=function(){
            clearInterval(t);
            this.style.background="#F0F0F0";
          }
             f1leftcenterdiv1[i].onmouseout=function(){
            t=setInterval(moveright,2000);
            this.style.background="white";
          }
              f1leftcenterdiv1[i].onclick=function(){
            moveright();
          }
      }
      for(var i=0;i<f1leftcenterdiv2.length;i++){
           f1leftcenterdiv2[i].index=i;
          f1leftcenterdiv2[i].onmouseover=function(){
             clearInterval(t);
             this.style.background="#F0F0F0";
          }
         
          f1leftcenterdiv2[i].onmouseout=function(){
             t=setInterval(moveleft,2000);
             this.style.background="white";
          }
          
          f1leftcenterdiv2[i].onclick=function(){
             moveleft();
          }
      }
      //侧导航动效
      var cnav1=$(".cnav1")[0];
      var ccnav1=$(".ccnav1")[0];
      var ccnavbox=$(".ccnavbox")[0];
      var cnavbox=$(".cnavbox")[0];
      cnavbox.style.height=document.documentElement.clientHeight+"px";
      ccnavbox.style.height=document.documentElement.clientHeight+"px";
      cnav1.onmouseover=function(){
        cnav1.style.background="#c40000";
        cnav1.style.cursor="pointer";
        ccnav1.style.display="block";
        animate(ccnavbox,{right:35},200);
      }
       cnav1.onmouseout=function(){
        cnav1.style.background="#000";
        animate(ccnavbox,{right:85},200);
        ccnav1.style.display="none";
      }
      var cnav2=$(".cnav2")[0];
      var xian1=$(".xian1")[0];
      var xian2=$(".xian2")[0];
      cnav2.onmouseover=function(){
        cnav2.style.background="#c40000";
        cnav2.style.cursor="pointer";
        xian1.style.display="none";
        xian2.style.display="none";
      }
      cnav2.onmouseout=function(){
        cnav2.style.background="#000";
        xian1.style.display="block";
        xian2.style.display="block";
      }
      var cnav3=$(".cnav3")[0];
      var ccnav3=$(".ccnav3")[0];
      cnav3.onmouseover=function(){
        cnav3.style.background="#c40000";
        cnav3.style.cursor="pointer";
        ccnav3.style.display="block";
        animate(ccnavbox,{right:35},200);
      }
       cnav3.onmouseout=function(){
        cnav3.style.background="#000";
        animate(ccnavbox,{right:85},200);
        ccnav3.style.display="none";
      }
      var cnav4=$(".cnav4")[0];
      var ccnav4=$(".ccnav4")[0];
      cnav4.onmouseover=function(){
        cnav4.style.background="#c40000";
        cnav4.style.cursor="pointer";
        ccnav4.style.display="block";
        animate(ccnavbox,{right:35},200);
      }
       cnav4.onmouseout=function(){
        cnav4.style.background="#000";
        animate(ccnavbox,{right:85},200);
        ccnav4.style.display="none";
      }
      var cnav5=$(".cnav5")[0];
      var ccnav5=$(".ccnav5")[0];
      cnav5.onmouseover=function(){
        cnav5.style.background="#c40000";
        cnav5.style.cursor="pointer";
        ccnav5.style.display="block";
        animate(ccnavbox,{right:35},200);
      }
       cnav5.onmouseout=function(){
        cnav5.style.background="#000";
        animate(ccnavbox,{right:85},200);
        ccnav5.style.display="none";
      }
      var cnav6=$(".cnav6")[0];
      var ccnav6=$(".ccnav6")[0];
      cnav6.onmouseover=function(){
        cnav6.style.background="#c40000";
        cnav6.style.cursor="pointer";
        ccnav6.style.display="block";
        animate(ccnavbox,{right:35},200);
      }
       cnav6.onmouseout=function(){
        cnav6.style.background="#000";
        animate(ccnavbox,{right:85},200);
        ccnav6.style.display="none";
      }
      var cnav7=$(".cnav7")[0];
      var ccnav7=$(".ccnav7")[0];
      cnav7.onmouseover=function(){
        cnav7.style.background="#c40000";
        cnav7.style.cursor="pointer";
        ccnav7.style.display="block";
        animate(ccnavbox,{right:35},200);
      }
       cnav7.onmouseout=function(){
        cnav7.style.background="#000";
        animate(ccnavbox,{right:85},200);
        ccnav7.style.display="none";
      }
      var cnav8=$(".cnav8")[0];
      var ccnav8=$(".ccnav8")[0];
      cnav8.onmouseover=function(){
        cnav8.style.background="#c40000";
        cnav8.style.cursor="pointer";
        ccnav8.style.display="block";
        animate(ccnavbox,{right:35},200);
      }
       cnav8.onmouseout=function(){
        cnav8.style.background="#000";
        animate(ccnavbox,{right:85},200);
        ccnav8.style.display="none";
      }
      var cnav9=$(".cnav9")[0];
      cnav9.onmouseover=function(){
        cnav9.style.background="#c40000";
        cnav9.style.cursor="pointer";
      }
       cnav9.onmouseout=function(){
        cnav9.style.background="#000";
      }
      var cnav10=$(".cnav10")[0];
      var ccnav10=$(".ccnav10")[0];
      cnav10.onmouseover=function(){
        cnav10.style.background="#c40000";
        cnav10.style.cursor="pointer";
        ccnav10.style.display="block";
        animate(ccnavbox,{right:35},200);
      }
       cnav10.onmouseout=function(){
        cnav10.style.background="#000";
        animate(ccnavbox,{right:85},200);
        ccnav10.style.display="none";
      }
      //楼层跳转和呼出顶部搜索框
      var dbox=$(".dbox")[0];
      dbox.style.width=document.documentElement.clientWidth+"px";
      var flag=true;
      var flag1=true;
      var loubox=$(".loubox")[0];
       var floors=$(".floor");
       var btn=$(".btn");
       for(var i=0;i<btn.length;i++){
          btn[i].index=i;
          btn[i].onclick=function(){
                //alert(floors[this.index].t)
                var obj=document.documentElement.scrollTop?document.documentElement:document.body;//获取滚动条的对象
                //var scrollT=getScrollT();
                //obj.scrollTop=floors[this.index].t;
                animate(obj,{scrollTop:floors[this.index].t})//当前按钮的对应楼层的top赋值给滚动条
                for(var j=0;j<btn.length;j++){
                    btn[j].style.display="block";
                 }
                this.style.display="none";
          }
        }
     window.onscroll=function(){
          var scrollT=getScrollT();
          //document.title=scrollT;
          if(scrollT>=440){
            if(flag){
              animate(dbox,{top:0},500);
              flag=false;
              flag1=true;
            }           
          }else{
                  if(flag1){
                    animate(dbox,{top:-50});
                    flag1=false;
                    flag=true;
                  }         
          }

          if(scrollT>=792){
            loubox.style.display="block";
          }else{
            loubox.style.display="none";
          }

          for(var i=0;i<floors.length;i++){
              floors[i].t=floors[i].offsetTop;
              if(floors[i].t<=scrollT){//如果scrollTop大于当前楼层的top
                //alert(11111)
                for(var j=0;j<btn.length;j++){
                    btn[j].style.display="block";
                 }
                btn[i].style.display="none";
              }
              //floors[i].index=i;
            }
            //图片按需加载
          var ch=document.documentElement.clientHeight;
        for(var i=0;i<floors.length;i++){
          if(floors[i].offsetTop<ch+scrollT){//当前楼层到顶部的高度如果小于页面内容超出浏览器的距离+浏览器的距离时
          var imgs=$("img",floors[i]);//获取当前楼层的所有图片
            for(var j=0;j<imgs.length;j++){//遍历图片
              imgs[j].src=imgs[j].getAttribute("aa");//每一个图片的aa赋值给src属性即可
            }
          }
        }
      }
      //图片向左滑动动效
      var f1right=$(".f1-right");
      for(var i=0;i<f1right.length;i++){
          var imgs=$("img",f1right[i]);
          f1right[i].style.background="#fff";
           for(var j=0;j<imgs.length;j++){
            imgs[j].index=j;
            imgs[j].style.cssText="position:relative;top:0;right:0";
            imgs[j].onmouseover=function(){
               /* for(vari=0;i<imgs.length;i++){
                  animate(imgs[i],{right:0},60);
                }*/
                this.style.right=5+"px";
            }
            imgs[j].onmouseout=function(){
              this.style.right=0+"px";
            }
           }
      }
      //顶导航下拉菜单
      var yiji1=$(".yiji1");
      var erji1=$(".erji1");
      var yiji2=$(".yiji2")[0];
      var erji2=$(".erji2")[0];
      var yiji3=$(".yiji3")[0];
      var erji3=$(".erji3")[0];
      for(var i=0;i<yiji1.length;i++){
        yiji1[i].index=i;
        yiji1[i].onmouseover=function(){
            for(var j=0;j<erji1.length;j++){
              erji1[j].style.display="none";
            }
            erji2.style.display="none";
            erji3.style.display="none";
            //erji1[this.index].style.height=0+"px";
          erji1[this.index].style.display="block";
          //animate(erji1[this.index],{height:70});
        }
         yiji1[i].onmouseout=function(){
          erji1[this.index].style.display="none";
         }
      }
      yiji2.onmouseover=function(){
        for(var j=0;j<erji1.length;j++){
            erji1[j].style.display="none";
          }
          erji3.style.display="none";
       erji2.style.display="block";
       erji2.style.zIndex=5;
      }
      yiji2.onmouseout=function(){
        erji2.style.display="none";
      }
      yiji3.style.zIndex=7;
      yiji3.onmouseover=function(){
        for(var j=0;j<erji1.length;j++){
              erji1[j].style.display="none";
            }
            erji2.style.display="none";
       erji3.style.display="block";
       erji3.style.zIndex=5;
      }
      yiji3.onmouseout=function(){
        erji3.style.display="none";
      }
      //banner列表动效
      
}