const fs=require("fs")
const get_note=()=>{
    return "Your Notes.."

}
const addNote=(title,body)=>{
     const notes=loadNotes()
     const duplicateNotes=notes.filter(function(notes){
         return notes.title===title
     })

     if(duplicateNotes.length===0){
        notes.push({
            title:title,
            body:body
        })
        saveNote(notes)
     }
     else{
         console.log("Sorry Note Title already Taken")
     }

}

const loadNotes=()=>{
    try{
        const dataBuffer=fs.readFileSync("notes.json")
        const dataJSON=dataBuffer.toString()
        return JSON.parse(dataJSON)
    }catch(err){
        return []
    }
}

const saveNote=(notes)=>{
       const dataJSON=JSON.stringify(notes)
       fs.writeFileSync("notes.json",dataJSON)
}

module.exports={
    getNote:get_note,
    addNote:addNote
}