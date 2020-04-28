const dataURL = "https://api.jsonbin.io/b/5e905926172eb643896166e7";

function handleButton() {	
  	$.getJSON(dataURL, handleData);
}

function getInputs() {
	let arrOfinput = ["var1", "var2", "var3", "var4", "var5", "var6" ,"speach"];
	let objOfVar = {};
	arrOfinput.forEach(input => objOfVar[input] = $('input[name='+ input +']').val());
	return objOfVar;
}

function handleData(data) {
	let originalText = '';
	let obj = getInputs();
	data["text"].forEach(function (element) {
		for (key in obj){
			element = element.replace('{'+ key +'}', obj[key]);
		}
		originalText = originalText + element + '<br>';
  	});

	$('#result').html(originalText);
}



function init() {
	$('#button-fetch').click(handleButton);
}

$(document).ready(init);
