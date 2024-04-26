/* Piano key note audio file array */
pianoNotes = {};
pianoNotesClicked = {}

function showHideLabels() {

  /* get all key labels */
  var labels = document.getElementsByClassName("key-label");

  /* Get checkbox */
  var checkbox = document.getElementById("show-keys");

  /* check if key labels are hidden */
  if (checkbox.checked) {
    /* code if key labels are hidden */
    for (let i = 0; i < labels.length; i++) { // Loops through all labels and changes display
      labels[i].style.display = "none";
    }

  } else {

    /* code if key labels are NOT hidden */
    for (let i = 0; i < labels.length; i++) {
      labels[i].style.display = "block";
    }

  }
}

function playNote(note) {
  var audio = pianoNotes[note];
  audio.play();
}

function playNoteClick(note) {
  var audio = pianoNotesClicked[note];
  audio.play();
}

function showImage(src) {
  document.getElementById("sheet-music-pic").src = URL.createObjectURL(src);
}

window.onload = function() {

  /* load audio files */
  pianoNotes["a"] = new Audio("notes/C.wav");
  pianoNotes["s"] = new Audio("notes/D.mp3");
  pianoNotes["d"] = new Audio("notes/E.wav");
  pianoNotes["f"] = new Audio("notes/F.wav");
  pianoNotes["g"] = new Audio("notes/g.wav");
  pianoNotes["h"] = new Audio("notes/A.wav");
  pianoNotes["j"] = new Audio("notes/B.wav");
  pianoNotes["k"] = new Audio("notes/C.wav");
  pianoNotes["l"] = new Audio("notes/D.mp3");

  pianoNotes["q"] = new Audio("notes/csharp.wav");
  pianoNotes["w"] = new Audio("notes/eb.wav");
  pianoNotes["e"] = new Audio("notes/fsharp.wav");
  pianoNotes["r"] = new Audio("notes/ab.mp3");
  pianoNotes["t"] = new Audio("notes/bb.wav");
  pianoNotes["y"] = new Audio("notes/csharp.wav");
  pianoNotes["u"] = new Audio("notes/eb.wav");
  pianoNotes["i"] = new Audio("notes/esharp.mov");

  pianoNotesClicked["C"] = new Audio("notes/C.wav");
  pianoNotesClicked["D"] = new Audio("notes/D.mp3");
  pianoNotesClicked["E"] = new Audio("notes/E.wav");
  pianoNotesClicked["F"] = new Audio("notes/F.wav");
  pianoNotesClicked["G"] = new Audio("notes/g.wav");
  pianoNotesClicked["A"] = new Audio("notes/A.wav");
  pianoNotesClicked["B"] = new Audio("notes/B.wav");

  pianoNotesClicked["csharp"] = new Audio("notes/csharp.wav");
  pianoNotesClicked["fsharp"] = new Audio("notes/fsharp.wav");
  pianoNotesClicked["ab"] = new Audio("notes/ab.mp3");
  pianoNotesClicked["bb"] = new Audio("notes/bb.wav");
  pianoNotesClicked["eb"] = new Audio("notes/eb.wav");
  pianoNotesClicked["esharp"] = new Audio("notes/esharp.mov");


  /* Listening for keyboard key press */
  document.addEventListener("keydown", function(event) {
    playNote(event.key);
  });


  /* Get all keys from document */
  var keys = document.getElementsByClassName("piano");

  /* Add action listeners to each keys */
  for (let i = 0; i < keys.length; i++) {
    keys[i].addEventListener("click", function(event) {
      /* call playNote function */
      console.log(event.target.closest('.piano'));
      if (!event.target.classList.contains("piano")) {
        playNoteClick(event.target.closest(".piano").id);
      } else {
        playNoteClick(event.target.id);
      }

    });
  }

  

  document.getElementById("upload-sheet-music").addEventListener("change", function(event) {
    showImage(event.target.files[0]);
  });

}

