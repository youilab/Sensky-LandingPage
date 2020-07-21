// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementsByClassName("myBtn")[0];
var btn2 = document.getElementsByClassName("myBtn")[1];

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks the button, open the modal 
btn2.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

function validation()
{
	var form = document.getElementById("email-div")
	var email = document.getElementById("email-input").value;
	var text = document.getElementById("email-text");

	var pattern = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

	if(email.match(pattern))
	{
		form.classList.add("valid");
		form.classList.remove("invalid");
		text.innerHTML = "Correo válido"
		text.style.color = "#6bb323";
		text.style.fontSize = "0.9em";
	}
	else
	{
		form.classList.remove("valid");
		form.classList.add("invalid");
		text.innerHTML = "Ingresa un correo válido"
		text.style.color = "#ff0000";
	}
	if(email == "")
	{
		form.classList.remove("valid");
		form.classList.remove("invalid");
		text.innerHTML = ""
		text.style.color = "#00ff00";
	}
}