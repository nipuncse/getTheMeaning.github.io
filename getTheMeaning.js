console.log("This is working fine");

document.getElementById("word").addEventListener("blur",getInput);

function getInput()
{
	var text=document.getElementById("word").value;
	console.log(text);
	var word=text.toLowerCase();
	console.log(word);
	getMeaning(word.trim());

}

function getMeaning(word)
{
   const xhr = new XMLHttpRequest;
   xhr.open('GET',`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`,true);


   xhr.onprogress = function(){
	console.log("On Progress");
    }

xhr.onload = function(){
	if(this.status===200)
	{let obj = JSON.parse(this.responseText);
	 console.log(obj[0].meanings[0].definitions[0].definition);
	 let mean =obj[0].meanings[0].definitions[0].definition;
	 var audio = new Audio('search.mp3');
     audio.play();

	
	document.getElementById("meaning").innerHTML=mean;
     }

	 else
	 {
		document.getElementById("meaning").innerHTML= "Sorry, this word doesn't exist. Try Another Word!";
	 }
	}

	xhr.send();
	
}