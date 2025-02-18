document.addEventListener("DOMContentLoaded", () => {
  let addNote = document.querySelector(".addNote");
  let container = document.querySelector(".container");
  loadNote();

  addNote.addEventListener("click", () => {
    createNote();
    saveNote();
  });
  function createNote() {
    let newNote = document.createElement("div");
    newNote.classList.add("note");

    let notepad = document.createElement("div");
    notepad.classList.add("notePad");

    let noteheader = document.createElement("div");
    noteheader.classList.add("noteHeader");

    let textarea = document.createElement("textarea");

    let buttonEdit = document.createElement("button");
    let buttonDelete = document.createElement("button");
    let buttonClean = document.createElement("button");

    buttonEdit.innerHTML = '<i class="fa-solid fa-pen-to-square"></i>';
    buttonDelete.innerHTML = '<i class="fa-solid fa-trash-can"></i>';
    buttonClean.innerHTML = '<i class="fa-solid fa-broom"></i>';

    let notecard = document.createElement("div");
    notecard.classList.add("noteCard");

    container.appendChild(newNote);
    newNote.appendChild(notepad);
    notepad.appendChild(noteheader);
    notepad.appendChild(textarea);
    noteheader.appendChild(buttonEdit);
    noteheader.appendChild(buttonClean);
    noteheader.appendChild(buttonDelete);

    buttonEdit.addEventListener("click", () => {
      if (textarea.hasAttribute("readonly")) {
        textarea.removeAttribute("readonly");
        textarea.focus();
      } else {
        textarea.setAttribute("readonly", true);
        saveNote();
      }
    });

    buttonDelete.addEventListener("click", () => {
      newNote.remove();
      saveNote();
    });

    buttonClean.addEventListener("click", () => {
      textarea.value = "";
      saveNote();
    });
  }
  function saveNote() {
    let notes = [];
    console.log(document.querySelectorAll(".note textarea"))
    document.querySelectorAll(".note textarea").forEach((note) => {
      notes.push(note.value);
    });
    localStorage.setItem("notes", JSON.stringify(notes));
  }
});

function loadNote() {
  let savedNote = JSON.parse(localStorage.getItem("notes"));
  console.log("savedNote", savedNote);
  savedNote.forEach((textContent) => {
    textContent = textContent.value
    console.log(textContent);
  });

}
