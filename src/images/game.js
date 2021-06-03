var user = "";
var computer = "";
var nb;
var won = 0, lost = 0;

function compute()
{
	nb = Math.floor(Math.random()*3) + 1;
	if (nb == 1)
		computer = "Pierre";
	else if (nb == 2)
		computer = "Feuille";
	else if (nb == 3)
		computer = "Ciseau";
}
//=================================== Get user input. ======================================
function res(form,val)
{
	if (user != "")
		return;
	form.texte.value = val;
	user = val;
}
//================================= Test for validity. =====================================
function testing(form)
{
	if (user == "" || computer == "")
		return;
	if (user == computer)
	{
		alert("Gagné !");
		won += 1;
		calcScore(form);
	}
	else
	{
		alert("Perdu !\nL'ordinateur avait choisi " + computer + ".");
		lost += 1;
		calcScore(form);
	}
}
//=================================== Sum up score. ========================================
function calcScore(form)
{
	document.getElementById("score").innerHTML = "Gagné: " + won + " fois. Perdu: " + lost + " fois."
}
//====================================== Reset. ============================================
function raz(form)
{
	form.texte.value = "";
	user = "";
	computer = "";
}