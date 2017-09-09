(function(){
	h = window.innerHeight;
	w = window.innerWidth;
	bgChange();
	titleChange();
	listChange();
})();

var h;
var w;

//监听窗口改变
window.onresize = function(){
	h = window.innerHeight;
	w = window.innerWidth;
	bgChange();
	titleChange();
	listChange();
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
	var ttl = document.getElementById("title").style;
	var navimg = document.getElementById("navimg").style;

	if(w < 480){
		ttl.fontSize = w/20 + 'px';
		ttl.marginTop = 34 - (w / 20) +'px';
		navimg.width = w/12 + 'px';
		navimg.height = w/12 + 'px';
		navimg.top = 35 - w/24 + 'px'; 
	}
	else{
		ttl.fontSize = "24px";
		ttl.marginTop = "10px";
		navimg.width = "40px";
		navimg.height = "40px";
		navimg.top = "15px";
	}
}

var status=1;
//status=0 welcome
//status=1 list
//status=2 article
function listChange(){
//	if(status !=1) return;
	var conlist = document.getElementById("content-list").style;

	conlist.height = h - 70 + 'px';
}