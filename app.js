var cPoint =document.querySelector('.cPoint');
var pPoint =document.querySelector('.pPoint');
var computer =document.querySelector('.computer');
var player =document.querySelector('.player');
var winner =document.querySelector('.winner');
var pCount=0, cCount=0;
var pCount=0, cCount=0;
function play(Choice){
	if(Choice=="rock"){
		player.innerText = "Player:rock"
	}else if(Choice=="paper"){
		player.innerText = "Player:paper"
	}else if(Choice=="scissors"){
		player.innerText = "Player:scissors"
	}
	var random = Math.floor(Math.random()*3);
	console.log(random);
	var computerChoice
	if(random==0){
		computerChoice="rock";
		computer.innerText = "Computer: rock";
	}else if(random==1){
		computerChoice="paper";
		computer.innerText = "Computer: paper";
	}else if(random==2){
		computerChoice="scissors";
		computer.innerText = "Computer: scissors";
	} 
	if((Choice=="paper" && computerChoice=="rock")
	 ||(Choice=="scissors" && computerChoice=="paper")
	 ||(Choice=="rock" && computerChoice=="scissors")){
		winner.innerText = "Winner:Player"
		pCount++;
		pPoint.innerText="Player:"+pCount;
	 }else if(Choice==computerChoice){
		 winner.innerText="Winner: Tie!"
	 }
	 else{
		 winner.innerText="Winner: computer"
		 cCount++;
		 cPoint.innerText="Computer:"+cCount;
	}

}
function reset1(){
	pCount=0;
	cCount=0;
	pPoint.innerText="Player:0";
	cPoint.innerText="Computer:0";
}