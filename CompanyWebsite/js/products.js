window.addEventListener("scroll",function(event){
    var scrollY= window.scrollY;
    // animation mac
    var macAirDetail =document.getElementsByClassName("macbook-air-detail");
    var macAirImage  =document.getElementsByClassName("macbook-air-image");
    var macProDetail =document.getElementsByClassName("macbook-pro-detail");
    var macProImage  =document.getElementsByClassName("macbook-pro-image");
    var macMiniDetail=document.getElementsByClassName("mac-mini-detail");
    var macMiniImage =document.getElementsByClassName("mac-mini-image");
    console.log(scrollY);
    if(scrollY>150 && scrollY<600)
    {
        macAirDetail[0].style.marginRight= (scrollY-100)/2 + 'px';
        macAirImage[0].style.marginLeft  = (scrollY-100)/2 + 'px';
        macAirDetail[0].style.opacity    = 150/scrollY;
        macAirImage[0].style.opacity     = 150/scrollY;
    }
    else if(scrollY>300 && scrollY<890)
    {
        macProDetail[0].style.marginLeft = (890-scrollY)/2 + 'px';
        macProImage[0].style.marginTop   = (890-scrollY)/2 + 'px';
        macProDetail[0].style.opacity    = (890/(890-(-890*3+scrollY*3)));
        macProImage[0].style.opacity     = (890/(890-(-890*3+scrollY*3)));
    }
    else if(scrollY>1300 && scrollY<1600)
    {
        macMiniDetail[0].style.marginRight =(1600-scrollY)/2 +'px';
        macMiniImage[0].style.marginLeft   =(1600-scrollY)/2 +'px';
        macMiniDetail[0].style.opacity     =(1600/(1600-(-1600*3+scrollY*3)));
        macMiniImage[0].style.opacity      =(1600/(1600-(-1600*3+scrollY*3)));
    }
    // animation watch
    var watchS6Image =document.getElementsByClassName("watch-s6-image");
    var watchS6Detail=document.getElementsByClassName("watch-s6-detail");
    var watchSeImage =document.getElementsByClassName("watch-se-image");
    var watchSeDetail=document.getElementsByClassName("watch-se-detail");
    if(scrollY>240 && scrollY<600)
    {
        watchS6Detail[0].style.marginLeft = (scrollY-240)/2 + 'px';
        watchS6Detail[0].style.opacity    = 240/scrollY;
        watchS6Image[0].style.opacity     = 240/scrollY;
    }
    else if(scrollY>500 && scrollY<1000)
    {
        watchSeDetail[0].style.marginRight = (1000-scrollY)/2 + 'px';
        watchSeImage[0].style.marginTop   = (1000-scrollY)/2 + 'px';
        watchSeDetail[0].style.opacity    = (1000/(1000-(-1000*3+scrollY*3)));
        watchSeImage[0].style.opacity     = (1000/(1000-(-1000*3+scrollY*3)));
    }
},false);
