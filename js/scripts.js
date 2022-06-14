function AddressBook() {
  this.contacts = {};
  this.currentId = 0;
}

AddressBook.prototype.addContact = function(contact) {
  contact.id = this.assignId();
  this.contacts[contact.id] = contact;
};

AddressBook.prototype.assignId = function() {
  this.currentId += 1;
  return this.currentId;
};

AddressBook.prototype.findContact = function(id) {
  if (this.contacts[id] != undefined) {
    return this.contacts[id];
  }
  return false;
};

AddressBook.prototype.deleteContact = function(id) {
  if (this.contacts[id] === undefined) {
    return false;
  }
  delete this.contacts[id];
  return true;
};

function Contact(firstName, lastName, phoneNumber) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.phoneNumber = phoneNumber;
  this.addrs = {};
  this.currentId = 0; //
}

Contact.prototype.fullName = function() {
  return this.firstName + " " + this.lastName;
};

Contact.prototype.addAddress = function(addr) {
  this.addrs = addr;
}

// Contact.prototype.addAddress = function(addr) {
//   addr.id = this.assignId();
//   this.addrs[addr.id] = addr;
// };

// Contact.prototype.assignId = function() {
//   this.currentId += 1;
//   return this.currentId;
// };

function Address(personalEmail, workEmail, personalAddr, workAddr) {
  this.personalEmail = personalEmail;
  this.workEmail = workEmail;
  this.personalAddr = personalAddr;
  this.workAddr = workAddr;
}

// function Address(addr) {
//   this.addr = addr;
// }


// User Interface Logic
let addressBook = new AddressBook();

function displayContactDetails(addressBookToDisplay) {
  let contactsList = $("ul#contacts");
  let htmlForContactInfo = "";
  Object.keys(addressBookToDisplay.contacts).forEach(function(key) {
    const contact = addressBookToDisplay.findContact(key);
    htmlForContactInfo += "<li id=" + contact.id + ">" + contact.firstName + " " + contact.lastName + "</li>";
  });
  contactsList.html(htmlForContactInfo);
}

function attachContactListeners() {
  $("ul#contacts").on("click", "li", function() {
    showContact(this.id);;
  });
  $("#buttons").on("click", ".deleteButton", function() {
    addressBook.deleteContact(this.id);
    $("#show-contact").hide();
    displayContactDetails(addressBook);
  });
}

function showContact(id) {
  const contact = addressBook.findContact(id);
  $("#show-contact").show();
  $(".first-name").html(contact.firstName);
  $(".last-name").html(contact.lastName);
  $(".phone-number").html(contact.phoneNumber);
  $(".personal-Email").html(contact.addrs.personalEmail); //
  $(".work-Email").html(contact.addrs.workEmail); //
  $(".personal-addr").html(contact.addrs.personalAddr); //
  $(".work-addr").html(contact.addrs.workAddr); //
  let buttons = $("#buttons");
  buttons.empty();
  buttons.append("<button class='deleteButton' id=" +  + contact.id + ">Delete</button>");
}

$(document).ready(function() {
  attachContactListeners(); 
  $("form#new-contact").submit(function(event) {
    event.preventDefault();
    const inputtedFirstName = $("input#new-first-name").val();
    const inputtedLastName = $("input#new-last-name").val();
    const inputtedPhoneNumber = $("input#new-phone-number").val();
    const inputtedPersonalEmail = $("input#new-personal-Email").val(); // 
    const inputtedWorkEmail = $("input#new-work-Email").val(); // 
    const inputtedPersonalAddr = $("input#new-personal-addr").val();//
    const inputtedWorkAddr = $("input#new-work-addr").val();//
    if (inputtedWorkAddr === "") {
    $("p").remove(":contains('Work Address:')");
    console.log("hi");
    }
    $("input#new-first-name").val("");
    $("input#new-last-name").val("");
    $("input#new-phone-number").val("");
    $("input#new-personal-Email").val(""); //
    $("input#new-work-Email").val("");//
    $("input#new-personal-addr").val("");//
    $("input#new-work-addr").val("");//
    let newContact = new Contact(inputtedFirstName, inputtedLastName, inputtedPhoneNumber);
    let newAddr = new Address (inputtedPersonalEmail, inputtedWorkEmail, inputtedPersonalAddr, inputtedWorkAddr)
    addressBook.addContact(newContact);
    newContact.addAddress(newAddr);
    displayContactDetails(addressBook);
  });
});