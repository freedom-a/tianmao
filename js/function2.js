//1.兼容函数
//功能:ie8兼容通过类名获取html元素的问题
//参数说明:classname:要获取的元素的类名的形参
//obj:缩小范围，利用父容器来找要获取的元素
    function getClass(classname,obj){
      var obj=obj|| document;
      if(obj.getElementsByClassName){//判断是否是W3C浏览器
        return obj.getElementsByClassName(classname);//结果返回
      }else{//否则是IE8
        var all=obj.getElementsByTagName("*");//用标签名先获取到所有元素，是一个集合
        var arr=[];
        for(var i=0;i<all.length;i++){
          if(checkRel(all[i].className,classname)){
            arr.push(all[i]);
          }
        }
        return arr;
      }
    }
    //参数说明:str:多个类名的集合以后的字符串
    //         val:想找的类名
    function checkRel(str,val){
      var newarr=str.split(" ");
      for(var i=0;i<newarr.length;i++){
        if(newarr[i]==val){
          return true;
        }
      }
      return false;
    }
    /***********************************/
//2.可以获取与设置纯文本的兼容函数
 //obj:哪个对象用这个方法
 //val:接收第二个实参，表示设置一个文本
 function getText(obj,val){
  if(val==undefined){//如果val为undefined，表示只有一个参数，这个函数实现的功能是获取文本
     if(obj.innerText){//如果为真是IE8浏览器
      return obj.innerText;
    }else{//是W3C浏览器
      return obj.textContent;
    }
  }else{
      if(obj.innerText||obj.innerText==""){//IE8，当浏览器有innerText这个属性时，或者当对象的内容为空字符串时，都可以给这个对象设置文本
      obj.innerText=val;
    }else{//W3C
      obj.textContent=val;
    }
  }
 }
 function getStyle(obj,attr){
  if(obj.currentStyle){
    return obj.currentStyle[attr];
  }else{
    return getComputedStyle(obj,null)[attr];
  }
}
 function $(select,obj){
    var obj=obj||document;//缩小范围通过父元素来寻找
    if(typeof select=="string"){//判断它是否是字符串
      select=select.replace(/^\s*|\s*$/g,"");
       if(select.charAt(0)=="."){//类名
           return getClass(select.slice(1),obj);
       }else if(select.charAt(0)=="#"){//ID名
        return obj.getElementById(select.slice(1));
       }else if(/^[a-z|1-6]{1,10}$/g.test(select)){//标签名
        return obj.getElementsByTagName(select);
       }
    }else if(typeof select=="function"){
      window.onload=function(){
        select();
      }
    }
  }
  /*********************************************/
  /*
    5.getChilds(parent,type);
    "a":获取元素子节点的兼容函数
    "b":获取元素+文本
    原理:先获取所有的儿子，然后根据节点的类型判断，如果为1，表示是元素节点，保存到数组里。
  */
  function getChilds(parent,type){//根据父元素找子元素节点
    type=type||"a";//不输入参数的时候按"a"走只获取元素节点
    var childs=parent.childNodes;//从父元素节点中找出节点集合
    var arr=[];//创建新的空数组
    for(var i=0;i<childs.length;i++){//遍历节点集合
      if(type=="a"){//只获取元素子节点
        if(childs[i].nodeType==1){//节点类型为1时是元素节点
          arr.push(childs[i]);//将元素节点添加到新数组中
        }
      }else if(type=="b"){//从父元素节点中获取元素节点和文本节点
          if(childs[i].nodeType==1||(childs[i].nodeType==3&&childs[i].nodeValue.replace(/^\s*|\s*$/g,""))){//获取元素节点和文本节点，去除文本节点两端的空格
          arr.push(childs[i]);
        }
      }
      
    }
    return arr;
  }
  //一般以下三个用来获得元素节点，文本节点一般不需要;
  //6.获得第一个子节点
  function getFirst(parent){
    return getChilds(parent)[0];
  }
  //7.获得最后一个子节点
  function getLast(parent){
    return getChilds(parent)[getChilds(parent).length-1];
  }
  //8.获得一个指定子节点
  function getNum(parent,num){
    return getChilds(parent)[num];
  }
  //9.获得下一个兄弟节点
  function getNext(obj){
    var next=obj.nextSibling;
    if(next==null){
      return false;
    }
    while(next.nodeType==3||next.nodeType==8){
      next=next.nextSibling;
      if(next==null){
        return false;
      }
    }
    return next;
  }
  //10.获得上一个兄弟节点
  function getUp(obj){
    var up=obj.previousSibling;
    if(up==null){
      return false;
    }
    while(up.nodeType==3||up.nodeType==8){
      up=up.previousSibling;
      if(up==null){
        return false;
      }
    }
    return up;
  }
//11.插入到某个对象之后
//插入到下一个对象之前
//给对象的原型添加此方法
//原理：找到第二个参数的下一个兄弟节点，将第一个参数插入到此兄弟节点之前(插入到下一个对象周期之前)
//obj1:要插入的节点
//obj2:在此节点之后插入
Object.prototype.insertAfter=function(obj1,obj2){
    var next=getNext(obj2);
    if(next){
      this.insertBefore(obj1,next);
    }else{
      this.appendChild(obj1);
    }
}
//兼容问题
//获取滚动条高度的兼容问题

//第一种
/*var obj=document.documentElement.scrollTop?document.documentElement:document.body;
var scrollT=obj.scrollTop;*/
//第二种
/*var scrollT=document.documentElement.scrollTop||document.body.scrollTop;*/
 /*function getSrollT(obj){
    var obj=document.documentElement.scrollTop?document.documentElement:document.body;
    return obj.scrollTop;
 }*/
 function getScrollT(){
     var scrollT=document.documentElement.scrollTop||document.body.scrollTop;
     return scrollT;
 }
  function addEvent(obj,ev,fun){
   if(obj.addEventListener){
    return obj.addEventListener(ev,function(){
      fun.call(obj);
    },false);
   }else{
    return obj.attachEvent("on"+ev,function(){
      fun.call(obj);
    });//在IE8中this不指当前对象，指的是window
   }
 }
function getCW(){
  return document.documentElement.clientWidth;
 }
 function getCH(){
  return document.documentElement.clientHeight;
 }
 //拖拽函数
 function drag(obj){
        var cw=getCW();//浏览器的宽度
      var ch=getCH();//浏览器的高度
      var ow=obj.offsetWidth;//盒子自身的宽度
      var oh=obj.offsetHeight;//盒子自身的高度
      obj.onmousedown=function(e){
        var ev=e||window.event;
        var ox=ev.offsetX;//鼠标按下时距离有定位属性的父容器的x轴的距离
        var oy=ev.offsetY;//鼠标按下时距离有定位属性的父容器的y轴的距离
        //阻止浏览器的默认行为
        if (ev.preventDefault ){
        ev.preventDefault();
      }else{//阻止默认浏览器动作(W3C)
        ev.returnValue = false;
      }//IE中阻止函数器默认动作的方式
        //事件委托的思想
        document.onmousemove=function(e){
            var ev=e||window.event;
            var cx=ev.clientX;//鼠标移动时到浏览器x轴的距离
            var cy=ev.clientY;//鼠标移动时到浏览器y轴的距离
            var newx=cx-ox;//为了保证鼠标在盒子中的位置不改变
            var newy=cy-oy;
            if(newx<=0){//控制盒子不出浏览器的边界，而且也表示盒子位置可以赋值的范围
              newx=0;
            }if(newx>=(cw-ow)){
              newx=cw-ow;
            }if(newy<=0){
              newy=0;
            }if(newy>=(ch-oh)){
              newy=ch-oh;
            }
            obj.style.left=newx+"px";
            obj.style.top=newy+"px";
        }
       }
    obj.onmouseup=function(){
        document.onmousemove=null;//当鼠标抬起时就清空移动事件
    }
  }