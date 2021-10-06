const notes = [
    {
        id: 1,
        subject: "html",
        date: "9/29/2021",
        feeling: "hmmmm, I slightly understand this.",
        timeSpent: 840
    },
    {
        id: 2,
        subject: "css",
        date: "9/29/2021",
        feeling: "where does all of this go??",
        timeSpent: 840
    },
    {
        id: 3,
        subject: "github",
        date: "9/30/2021",
        feeling: "I get this....right?",
        timeSpent: 480
    }
]
const noteAboutToday = {
        id: 4,
        subject: "JavaScript Arrays and Objects",
        date: "10/4/2021",
        feeling: "I remember this from Pre-Work.",
        timeSpent: 300
}
notes.push(noteAboutToday)

//for (const note of notes) {
//console.log(`Note ${note.id}
//I learned ${note.subject}
//I spent ${note.timeSpent} working on it
//I felt like ${note.feeling}
//-------
//`)
//}

//const searchTerm = "github"
//for (const note of notes) {
  //  if ("github" === searchTerm) {
    //    console.log(note.subject)
    //}
//}

const createNote = (note) => {
    const lastIndex = notes.length - 1
    const currentLastNote = notes[lastIndex]
    const maxID = currentLastNote.id
    const idForNewNote = maxID + 1
    note.id = idForNewNote
    notes.push(note)
}

const moreNewerNote = {

        subject: "Injecting ID's",
        date: "10/5/2021",
        feeling: "I have no idea what I'm doing.",
        timeSpent: 120
}
createNote(moreNewerNote)
console.log(notes)