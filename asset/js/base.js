(function(){
	h = window.innerHeight;
	w = window.innerWidth;
	bgChange();
	titleChange();
})();

var h;
var w;

//---------------关于窗口自适应---------------------------------
window.onresize = function(){
	h = window.innerHeight;
	w = window.innerWidth;
	bgChange();
	titleChange();
}
function bgChange(){
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
function titleChange(){
	var ttl = document.getElementsByClassName("title");
	var navimg = document.getElementById("navimg").style;

	if(w < 480){
		ttl[0].style.fontSize = w/20 + 'px';
		ttl[0].style.marginTop = 34 - (w / 20) +'px';
		ttl[1].style.fontSize = w/32 + 'px';
		navimg.width = w/12 + 'px';
		navimg.height = w/12 + 'px';
		navimg.top = 35 - w/24 + 'px'; 
	}
	else{
		ttl[0].style.fontSize = "24px";
		ttl[0].style.marginTop = "10px";
		ttl[1].style.fontSize = "15px";
		navimg.width = "40px";
		navimg.height = "40px";
		navimg.top = "15px";
	}
}

//---------------------关于菜单按钮------------------------
var navbtn = document.getElementById("navimg");
var navflag = 0;
//是否点击nav按钮，点击为1
var changeon = 0;
navbtn.onclick = function(){
	var header = document.getElementsByClassName("head");
	var navwrap = document.getElementsByClassName("wrapper-bar");
	if(navflag){
		navflag = 0;
		header[0].style.top = 0;
		navwrap[0].style.top = "-434px";
	}
	else{
		navflag = 1;
		header[0].style.top = "-70px";
		navwrap[0].style.top = 0;
	}
}
