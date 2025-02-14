document.addEventListener("DOMContentLoaded",()=>{
    let addNote=document.querySelector('.addNote')
    let container=document.querySelector('.container')
    addNote.addEventListener('click',()=>{
        let newNote=document.createElement('div')
        newNote.classList.add('note')

        let notepad=document.createElement('div')
        notepad.classList.add('notePad')

        let noteheader=document.createElement('div')
        noteheader.classList.add('noteHeader')

        let buttonEdit=document.createElement('button')
        let buttonDelete=document.createElement('button')

        buttonEdit.innerHTML='<i class="fa-solid fa-pen-to-square"></i>'
        buttonDelete.innerHTML='<i class="fa-solid fa-trash-can"></i>'

        
        container.appendChild(newNote)
        newNote.appendChild(notepad)
        notepad.appendChild(noteheader)
        noteheader.appendChild(buttonEdit)
        noteheader.appendChild(buttonDelete)

        buttonDelete.addEventListener('click',()=>{
            newNote.remove()
        })
    })
})