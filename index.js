const btn = document.getElementById('btn')
const notesConEl = document.getElementById('notesCont')
let notes = document.querySelectorAll('.input-box')

function showNotes(){
    notesConEl.innerHTML = localStorage.getItem('notes')
}

showNotes()

function updateStorage(){
    localStorage.setItem("notes", notesConEl.innerHTML)
} 

btn.addEventListener('click' , () => {
    let inputBox = document.createElement('p')
    let img = document.createElement('img')
    inputBox.className = "input-box" 
    inputBox.setAttribute('contenteditable', 'true')
    img.src = "../download2.png"
    notesConEl.appendChild(inputBox).appendChild(img)
   updateStorage()
})

notesConEl.addEventListener('click', (e) => {
    if(e.target.tagName === "IMG"){
        e.target.parentElement.remove();
        updateStorage()
    }else if(e.target.tagName === "P"){
        notes = document.querySelectorAll('.input-box')
        notes.forEach((note) => {
            note.onkeyup  = () => {
                updateStorage()
            }
        } )
    }
    

})


document.addEventListener("keydown", (e) => {
   if(e.key === "Enter"){
    document.execCommand('insertLineBreak')
    e.preventDefault;
   }
})