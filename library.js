//for terminal 
function Options(){
console.log("Enter from below options");
console.log("Read \nReturn \nCheck \nAdd");
}
Options();
var message = "Return";
//English Language books section
var EngBooks = [];

//Marathi Language books
var MarBooks =[];

//Hindi Language books
var HindiBooks = [];

// books taken names
var booksTaken= ["akanksha","Siya","Garvi"];

//check user requirements
switch(message){
case "Read":
    ReadBook();
    break;
case "Return":
    ReturnBook();
break;
case "Check":
    CheckBooks();
    break;
case "Add":
    AddBooks();
    break;
default:
    console.log("Enter Valid deatils")
    Options();
}

function ReadBook(){
console.log("read book function");
console.log("You can go to to below section to read books \n section 1 - English\n section 2- Marathi\n section 3- Hindi");
}

function ReturnBook(){
let lang= "English";
let bookName= "mathematics"
//name of person who take book and wants to return it
let name = "akanksha";
Add(lang,bookName);
booksTaken=booksTaken.filter(Element=>Element !== name);
console.log(name + " book returned successfully");
console.log("list of names who have taken books\n");
console.log(booksTaken);
}

function CheckBooks(){
    console.log("check books function");
let bookName = "Javascript";
if (EngBooks.includes(bookName)) {
    console.log("Book available in section 1");
} else if (MarBooks.includes(bookName)) {
    console.log("Book available in section 2");
} else if (HindiBooks.includes(bookName)) {
    console.log("Book available in section 3");
} else {
    console.log(bookName + " is not available");
}
}

function AddBooks(){
   let lang = "English";
   //var section= "Computer Science";
   let bookName = "Physics";
Add("English","Physics");
console.log("Book added successfully");
}

function Add(lang,bookName){
    if(lang=="english"||lang=="English"){
        EngBooks.push(bookName);
        console.log(EngBooks);
    }
    else if(lang=="Marathi" || lang=="marathi"){
        MarBooks.push(bookName)
        console.log(MarBooks);
    }
    else{
        HindiBooks.push(bookName);
        console.log(HindiBooks);
    }
}
