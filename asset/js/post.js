(function(){
	h = window.innerHeight;
	w = window.innerWidth;
	listChange();

	var h1 = document.getElementById("text-content").offsetHeight;
	var h2 = document.getElementById("text-text").offsetHeight;
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
	califbutton("text-content","text-text",textlistdown);
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

//------------------------关于翻页按钮--------------------
var textlistup = document.getElementById("button-up-text");
var textlistdown = document.getElementById("button-down-text");
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