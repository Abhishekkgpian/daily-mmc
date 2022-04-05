var firstPara=document.getElementById('chanting_1st_page');
var secondPara=document.getElementById('chanting_2nd_page');
var nextBtn=document.getElementById('nextBtn');
var prevBtn=document.getElementById('prevBtn');
var startchanting=document.getElementById('startchanting');
function nextpage() {
    firstPara.style.display = "none";
secondPara.style.display="block"
nextBtn.style.display="none"
prevBtn.style.display="block"
startchanting.style.display="block"
}
function prevpage() {
    firstPara.style.display = "block";
secondPara.style.display="none"
nextBtn.style.display="block"
prevBtn.style.display="none"
startchanting.style.display="none"
}
