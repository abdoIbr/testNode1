
const fs  = require ('fs')
const addStudent = (fname , lname , age , city , id) => {
    const allStudents = loadInfo()

    const duplicatedData = allStudents.filter ((obj) => {
       return obj.id === id
    } )
    if (duplicatedData.length == 0 ) {
   
    allStudents.push ({
       id : id,
       fname : fname ,
       lname : lname , 
       age : age ,
       city : city 
    })

    saveallData (allStudents)

   } else {
       console.log("ERROR DUPLICATED DATA")
   }
    
}
/////////////////////////////////////////////////////

const loadInfo = () => {

   try {
       const dataJson = fs.readFileSync("student.json").toString()
       return JSON.parse (dataJson)
       
   } catch {
       return []
   }

}
/////////////////////////////////////////////////////

const saveallData = (allStudents) => {
     const saveallDataJson  = JSON.stringify(allStudents)
     fs.writeFileSync ("student.json" , saveallDataJson)
}

///////////////////////////////////////////////////////////////////////////////////

// Delete data :

const deletedData = (id) => {
       const allStudents = loadInfo()

       const dataToKeep = allStudents.filter ((obj) => {
           return  obj.id !== id 
       })
     

       saveallData (dataToKeep)
       console.log(" You have successfully deleted the item ")

}
/////////////////////////////////////////////////////////////////////////////////////

// read data :

const readData = (id) => {
       
  const allStudents = loadInfo()

  const itemNeeded =  allStudents.find ((obj) => {
      return  obj.id == id 
  })
   console.log(itemNeeded)

   if (itemNeeded) {
      console.log(itemNeeded.id)
   } else {
      console.log("id needed not found ")
   }
}
//////////////////////////////////////////////////////////////////////////

   // list data :

    const listData = () => {
          const allStudents = loadInfo()

          allData.forEach ((obj) => {
              console.log(obj.fname ,  obj.id)
          })
    }


module.exports = {
  addStudent ,
  deletedData ,
  readData ,
  listData
}