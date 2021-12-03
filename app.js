const add=require("./util.js")
const notes=require("./notes.js")
const yargs=require("yargs")
const { listenerCount } = require("events")

//create the add command
yargs.command({
    command: 'add',
    description:"Adding a new Note",
    builder:{
       title:{
           describe:"New Note",
           demandOption:true,
           type:'string'
       },
       body:{
           describe:"The content of the Note",
           demandOption:true,
           type:'String'
       }
    },
    handler:function(argv){
       notes.addNote(argv.title,argv.body)
    }
})

//crate the Remove command
yargs.command({
    command: 'remove',
    description:'Removing the note',
    handler:function(){
        console.log("Removing the note")
    }
})

//create the list command
yargs.command({
    command:"list",
    description:"List your notes",
    handler:function(){
        console.log("Listing all your notes")
    }
})

//create the list command
yargs.command({
    command:"read",
    description:"Read your notes",
    handler:function(){
        console.log("Reading your notes")
    }
})

console.log(yargs.argv)