//listen for return press

document.getElementById("sendtext").addEventListener("keyup", function (event) {
	if (event.keyCode == 13) {
		SentText();
	}
});


//DATA FOR DEV

var d = new Date();

document.getElementById("thedate").innerHTML = d.toDateString();

var knownCommands = ["hello", "cd", "chmod", "chown", "clear", "sudo", "nano"];

var answers = [
"Hello, Darling.",

"Change to directory.<br/>Usage: cd my/directory/path <br/> ../ is up a directory <br/> ~ is my home ",
"Change a file’s permissions.",
"Change the owner of a file.",
"Clear a command line screen/window for a fresh start.",
"sudo allows a permitted user to execute a command as the superuser or another user, as specified in the sudoers file.",

"nano is a Terminal application used to edit text files in a simple and familiar manner. As nano is a terminal program, it does not support the mouse, and all cursor movements must be done by the keyboard. Some of nano's commands are not standard to the Mac OS X experience. Here are some common commands:<br/><br/>Save File ctrl-O (Output)<br/>Cut ctrl-K (Kut, and acts on the entire current line)<br/>Paste ctrl-U (Uncut)<br/>Find ctrl-W (Where is...)<br/>Quit ctrl-X (eXit)<br/>Page Down ctrl-V (looks like a down arrow)<br/>Page Up<br/>ctrl-Y (looks nothing like an up arrow)<br/>Help ctrl-G (Get help)<br/>nano was written in 1999 as a clone to pico, which is licensed software, originally bundled with the terminal mail program, pine. In Mac OS X, and may other linux distributions, pico is symbolically linked to nano.<br/><hr/>Usage:<i>To edit a text file: <br/><br/><b>nano SomeNewFile.txt</i>"];

//---------------------------START ACTION---------------------

//-------//
//----1-----------//
//-------//
//Gets input from for field

function SendText() {

	//gets from text input 
	var inputText = String(document.getElementById("sendtext").value);

	//call next function 2
	StepOne(knownCommands, inputText);

}

//--------//
//-----2 CONTROL-------//
//--------//

function StepOne(commands, str) {

	//console.log (str);
	//Check for known commands 2a
	CheckKnownCom(str);

	var text = ConvertString(str);
	console.log('meta_0' + text);
}

//--------//
//------2a----//
//--------//

function CheckKnownCom(str) {

	var result = knownCommands.indexOf(str);

	if (result > -1) {

		var a = knownCommands.indexOf(str);

		console.log(a);

		document.getElementById("textreceiver").innerHTML = "<p>" + answers[a] + "</p>";

		return;
	}


	/*
	if (result < 0) {

	doument.getElementById("textreceiver").innerHTML = "<p> I'm sorry, No comprende </p>";

	return;
	}*/

}


//------//
//------3------//
//-----//
//Char Code the string

function ConvertString(str) {
	//define vars
	var text = ""; //or Nan
	var i;
	var n;

	for (i = 0; i < str.length; i++) {
		n = str.charCodeAt(i);
		text += n;
	}

	//3a
	ShortTermMem(text, str);

	//payitforward
	return text;

	//console.log ('meta_0 + text);

}

//-----//
//----3a----//
//----//
//Save to short term memory

function ShortTermMem(text, str) {

	var countExists;

	if (localStorage.getItem("countExists")) {


		var vcount = localStorage.getItem("countExists");

		console.log(vcount);

		RememberIt(vcount);
	}

	if (localStorage.getItem("countExists")) {
		localstorage.setItem("countExists", "0");
	}
}


function RememberIt(vcount, text) {
	var vcount = localStorage.getItem("countExists");
	n = "meta_" + vcount;

	localStorage.setItem(n, text);

	vcount++;

	localStorage.setItem("countExists", vcount++);

}
