(function(){
	h = window.innerHeight;
	w = window.innerWidth;
	bgChange();
	titleChange();
	listChange();
	var navwrap = document.getElementsByClassName("wrapper-bar");
	navwrap[0].style.top = "-434px";

	var h1 = document.getElementById("article-list").offsetHeight;
	var h2 = document.getElementById("left-list").offsetHeight;
	if(h1 > h2)
		document.getElementById("button-down-list").style.visibility = "visible";
	h1 = document.getElementById("date-list").offsetHeight;
	h2 = document.getElementById("right-list").offsetHeight;
	if(h1 > h2)
		document.getElementById("button-down-sort").style.visibility = "visible";
	h1 = document.getElementById("text-content").offsetHeight;
	h2 = document.getElementById("text-text").offsetHeight;
	if(h1 > h2)
		document.getElementById("button-down-text").style.visibility = "visible";
})();

var h;
var w;

//---------------关于窗口自适应---------------------------------
window.onresize = function(){
	h = window.innerHeight;
	w = window.innerWidth;
	bgChange();
	titleChange();
	listChange();
	califbutton("article-list","left-list",artlistdown);
	califbutton("date-list","right-list",sortlistdown);
	califbutton("text-content","text-text",textlistdown);
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
var status=1;
//status=0 welcome
//status=1 list
//status=2 article
function listChange(){
//	if(status !=1) return;
	var conlist = document.getElementsByClassName("page");

	for(var i = 0;i < conlist.length;i++){
		conlist[i].style.height = h - 70 + 'px';
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

//------------------------关于翻页按钮--------------------
var artlistup = document.getElementById("button-up-list");
var artlistdown = document.getElementById("button-down-list");
var sortlistup = document.getElementById("button-up-sort");
var sortlistdown = document.getElementById("button-down-sort");
var textlistup = document.getElementById("button-up-text");
var textlistdown = document.getElementById("button-down-text");
artlistup.onclick = function(){
	var page = document.getElementById("article-list").style;
	var top = page.top.replace("%","")/1;
	page.top = top + 50 + '%';
	if(top == -50)
		artlistup.style.visibility = "hidden";
	califbutton("article-list","left-list",artlistdown);
}
artlistdown.onclick = function(){
	var page = document.getElementById("article-list");
	artlistup.style.visibility = "visible";
	var top = page.style.top.replace("%","")/1;
	page.style.top = top - 50 + '%';
	califbutton("article-list","left-list",artlistdown);
}
sortlistup.onclick = function(){
	var page = document.getElementById("date-list").style;
	var top = page.top.replace("%","")/1;
	page.top = top + 50 + '%';
	if(top == -50)
		sortlistup.style.visibility = "hidden";
	califbutton("date-list","right-list",sortlistdown);
}
sortlistdown.onclick = function(){
	var page = document.getElementById("date-list");
	sortlistup.style.visibility = "visible";
	var top = page.style.top.replace("%","")/1;
	page.style.top = top - 50 + '%';
	califbutton("date-list","right-list",sortlistdown);
}
textlistup.onclick = function(){
	var page = document.getElementById("text-content").style;
	var top = page.top.replace("%","")/1;
	page.top = top + 50 + '%';
	if(top == -50)
		textlistup.style.visibility = "hidden";
	califbutton("text-content","text-text",textlistdown);
}
textlistdown.onclick = function(){
	var page = document.getElementById("text-content");
	textlistup.style.visibility = "visible";
	var top = page.style.top.replace("%","")/1;
	page.style.top = top - 50 + '%';
	califbutton("text-content","text-text",textlistdown);
}
function califbutton(page,page2,btn){
	var page = document.getElementById(page);
	var page2 = document.getElementById(page2);
	var top = page.style.top.replace("%","")/1;
	var hei1 = page.offsetHeight;
	var hei2 = page2.offsetHeight;
	if(((-top)/100+1)*hei2 > hei1)
		btn.style.visibility = "hidden";
	else
		btn.style.visibility = "visible";
}

//---------------------关于打开一篇文章-------------------------
