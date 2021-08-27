// Bild Kretschmer
// Get the modal
var modal = document.getElementById("id01");

// Get the button that opens the modal
var btn = document.getElementById("kretschBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
btn.onclick = function() {
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

// Bild Heyden
// Get the modal
var modalTwo = document.getElementById("id02");

// Get the button that opens the modal
var heydbtn = document.getElementById("heydBtn");

// Get the <span> element that closes the modal
var spanTwo = document.getElementsByClassName("closeTwo")[0];

// When the user clicks on the button, open the modal
heydbtn.onclick = function() {
  modalTwo.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
spanTwo.onclick = function() {
  modalTwo.style.display = "none";
}
// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modalTwo) {
    modalTwo.style.display = "none";
  }
} 


// Bild Krüger
// Get the modal
var modalFour = document.getElementById("id04");

// Get the button that opens the modal
var kruegbtn = document.getElementById("kruegBtn");

// Get the <span> element that closes the modal
var spanFour = document.getElementsByClassName("closeFour")[0];

// When the user clicks on the button, open the modal
kruegbtn.onclick = function() {
  modalFour.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
spanFour.onclick = function() {
  modalFour.style.display = "none";
}


// Bild Sandstede
// Get the modal
var modalThree = document.getElementById("id03");

// Get the button that opens the modal
var sandbtn = document.getElementById("sandBtn");

// Get the <span> element that closes the modal
var spanThree = document.getElementsByClassName("closeThree")[0];

// When the user clicks on the button, open the modal
sandbtn.onclick = function() {
  modalThree.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
spanThree.onclick = function() {
  modalThree.style.display = "none";
}
