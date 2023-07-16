const fs=require("fs");
const { json } = require("node:stream/consumers");

                                      // Quesion 1
const person={

    fname : "ahmed" , 
    lname :" hossam ",
    age :20 , 
    city :"alex "
  

}
//convert object  person to json
const person_json=JSON.stringify(person)

//storing in file as json
const storing=fs.writeFileSync("data.json",person_json)


//to read file as json
const reading=fs.readFileSync("data.json")
const reading_json=(JSON.stringify(JSON.parse(reading)));
console.log(reading_json)


//convert json to object 
const new_prson=JSON.parse(person_json)


//update new object
new_prson.fname = "adel ";
new_prson.lname="ahmed"
new_prson.age = 40;
new_prson.city = "cairo";

//final storing of  new person 
const new_prson_json=JSON.stringify(new_prson)
const last_store=fs.writeFileSync("data.json",new_prson_json)



// ***************************************************************************************


                                     //question2
    var persons = [
  { id: 1, fname: "Amira", lname: "ali", age: 21, city: "Mansoura" },
  { id: 2, fname: "Ahmad", lname: "yasser", age: 22, city: "Alex" },
  { id: 3, fname: "Omar", lname: "Mohamad", age: 23, city: "Aswan" },
{ id: 4, fname: "Ali", lname: "Ahmad", age: 24, city: "cairo" },
{ id: 5, fname: "Mohamad", lname: "Ali", age: 25, city: "Mattrouh" },
{ id: 6, fname: "Mona", lname: "Elayed", age: 26, city: "Damanhour" },
{ id: 7, fname: "Maii", lname: "Alaa", age: 27, city: "qena" } ];

// to delete  ids from 3 to 6
var new_persons= persons.filter(function(person) {
    return (person.id !== 4 && person.id !== 5 && person.id !== 6);
  })
//   console.log(new_persons)

//list fname lname city for all
                                      
for(var i=0;i<persons.length;i++){
    console.log(persons[i].fname,persons[i].lname,persons[i].city)
}
   

//list data for only five persons
for(var i=0;i<(persons.length)-2;i++){
    console.log(persons[i]);
}
                                      


