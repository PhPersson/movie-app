"use strict";
// Philip Persson al4570

//Uppgift 1
var btnError = document.getElementById("error");
var btnSuccess = document.getElementById("success");
var btnInfo = document.getElementById("info");

btnError.addEventListener("click", function (event) {
  document.getElementById("message-box").className = "";
  document.getElementById("message-box").classname = "error";
  document.getElementById("message-box").classList.add(event.currentTarget.id)
});

btnInfo.addEventListener("click", function (event) {
  document.getElementById("message-box").className = "";
  document.getElementById("message-box").classname = "info";
  document.getElementById("message-box").classList.add(event.currentTarget.id)
});


btnSuccess.addEventListener("click", function (event) {
  document.getElementById("message-box").className = "";
  document.getElementById("message-box").classname = "success";
  document.getElementById("message-box").classList.add(event.currentTarget.id)
});



//Uppgift 2
var addBtn = document.getElementById("add-item");

addBtn.addEventListener("click", function(event) {
  var ItemToAdd = document.createElement("li")
  var li = document.createElement('li');
  li.appendChild(document.createTextNode(prompt("Enter item to add to list")));
  document.getElementById("items").appendChild(li);
});



// Uppgift 3
var list = document.getElementById("items");
var btnDelete = document.getElementById("delete-item");
btnDelete.addEventListener("click", function(event){
    list.removeChild(list.lastElementChild);
});



// Uppgift 4
var removeBtns = document.getElementsByClassName("remove-list-item");
for (var i = 0; i < removeBtns.length; i++) {
  removeBtns[i].addEventListener("click", function() {
    
    var confirm = window.confirm("Are u sure?");
    if (confirm) {
      this.parentNode.remove();
      this.remove();
    }
  });
}

// Uppgift 5
// Del 1
var petForm = document.getElementById("apply-for-pet");

petForm.addEventListener("submit", function(event) {
  event.preventDefault();

  var firstName = this.firstname.value;
  var lastName = this.lastname.value;
  var age = this.age.value;
  var email = this.email.value;
  var pet = this.pet.value;

  console.log("Namn: " + firstName +' '+ lastName + " Ålder: " + age + " Epost: " + email + " Djur: " + pet);
//Del 2
  if (!firstName || !lastName || !email || !age || !pet) {
      alert("All fields must be filled in ");
  } else if (firstName.length > 50) {
      alert("Firstname can maximum be 50 letters");
  } else if (lastName.length > 50) {
      alert("Lastname can maximum be 50 letters");
  } else if(age < 0 || age == undefined) {
      alert("Invalid age");
  } else if(pet == undefined) {
      alert("No pet choosen");
  } else {
    event.target.submit();
  }
});