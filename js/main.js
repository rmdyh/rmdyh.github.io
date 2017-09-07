(function(){
	bgChange();
})();

//监听窗口改变
window.onresize = function(){
	bgChange();
}

function bgChange(){
	var h = window.innerHeight;
	var w = window.innerWidth;

	var bg = document.getElementsByClassName("page-bg");

	if((w/h) >= (1920/1370)){
        for(var i = 0;i < bg.length; i++){
           bg[i].style.width = w + 'px';
           bg[i].style.height = w * (1370/1920) + 'px';
           bg[i].style.top = -(w * (1370/1920) - h)/2 + 'px';
           bg[i].style.left = '0';
        }
    }
    else{
        for(var i = 0; i < bg.length; i++){
            bg[i].style.height = h + 'px';
            bg[i].style.width = h*(1920/1370) + 'px';
            bg[i].style.left = -(h*(1920/1370) - w)/3 + 'px';
            bg[i].style.top = '0';
        }
    }
}