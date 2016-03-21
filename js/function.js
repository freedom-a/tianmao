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
      select=select.replace(/^\s*|\s*$/g,"")
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