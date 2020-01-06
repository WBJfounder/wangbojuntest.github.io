function flashChecker() {   
    var hasFlash = 0;　　　　 //是否安装了flash     
    var flashVersion = 0;　　 //flash版本     
     
    if(document.all) {   
      var swf = new ActiveXObject('ShockwaveFlash.ShockwaveFlash');   
      if(swf) {   
        hasFlash = 1;   
        VSwf = swf.GetVariable("$version");   
        flashVersion = parseInt(VSwf.split(" ")[1].split(",")[0]);   
      }   
    } else {   
      if(navigator.plugins && navigator.plugins.length > 0) {   
        var swf = navigator.plugins["Shockwave Flash"];   
        if(swf) {   
          hasFlash = 1;   
          var words = swf.description.split(" ");   
          for(var i = 0; i < words.length; ++i) {   
            if(isNaN(parseInt(words[i]))) continue;   
            flashVersion = parseInt(words[i]);   
          }   
        }   
      }   
    }   
    return { f: hasFlash, v: flashVersion };   
  }   
     
  var fls = flashChecker();   
  var s = "";
  console.log(!fls.f)
  if(!fls.f) {   
    if(confirm("您未配置浏览器flash插件功能，请点击确定查看配置方法（点击取消下载flash插件！）")) {   
      window.location.href = "https://docs.qq.com/doc/DVVlyWE9id1BHaEVZ";   
    }   
  }   