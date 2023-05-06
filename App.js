// node  

// Modules
// 1- core Modules

const fs = require ('fs')

const x = require("./allData")

//    console.log(x.function1(5,6))


////////////////////////////////////////////////////////////////////

   const validator = require ('validator')
const yargs = require('yargs')

   
   const data5 = require ("./Student1")

 yargs.command ({
    command : "add" ,
    describe : "to add an item",
    builder : {
       fname : {
          describe : "this is the first name in add command ",
          demandOption: true,
          type : "string",
       },
       lname : {
         describe : "this is the last name in add command ",
         // demandOption: true,
         type : "string",
       }
    },
    handler :(x) => {
       
       Student1.addStudent(x.fname , x.lname , x.age , x.city , x.id)
    }
 })
  
//  console.log(yargs.argv)

yargs.parse()

/////////////////////////////////////////////////////////////////////////////////////////

yargs.command ({
 command : "delete" ,
 describe : "to deleted an item",
 handler :(x) => {
  //   console.log("You  have already deleted an item ")
    data5.deletedData (x.id)
 }
})

console.log(yargs.argv)



////////////////////////////////////////////////////////////////////////////////////////////

 yargs.command ({
   command : "read",
   describe : "Read data" ,
   builder : {
        id : {
            describe : "this is id desc in read command ",
            demandOption : true ,
            type : "string"
        }
   },
   handler : (x) => {
     data5.readData(x.id)
   }
 })


 console.log(yargs.argv)
///////////////////////////////////////////////////////////////////////////////////////////
 yargs.command ({
  command : "list",
   describe : "list data",
    handler : ()=> {
      data5.listData()
    }
 })

 console.log(yargs.argv)


   const person1 = {
     fname : "Ahmed",
     lname : "Osman"
   }

   // // console.log(person1)


   const person1Json = JSON.stringify(Student1)
   // // console.log(person1Json)

    const studentObj = JSON.parse (person1Json)
   // console.log(person1Obj)

   fs.writeFileSync ("student.json" , sudentJson)


   /////////////////////////////////////////////////////////////////////////////////////////////


