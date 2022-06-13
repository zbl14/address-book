# Address Book

#### By Zhibin Liang

#### A webpage for adding new contact and check phone number of a registered contact 

## Technologies Used

* HTML
* CSS
* JavaScript

## Setup/Installation Requirements

1. Clone the repo
    ```sh
    git clone (https://github.com/zbl14/address-book.git)
    ```
2. Open index.html file
3. Enter First Name, Last Name and Phone Number to add a new contact
4. Click the name of a contact to show detail info

## TDD

```sh
Describe Contact()
```
Test: "It should return a contact object with first name, last name and phone number"\
Code:\
let contact = new Contact("Ada", "Lovelace", "503-555-0100");\
contact;\
Expected Output: Contact {firstName: 'Ada', lastName: 'Lovelace', phoneNumber: '503-555-0100'}

Test: "It should return the full name"\
Code:\
let contact = new Contact("Ada", "Lovelace", "503-555-0100");\
contact.fullName();\
Expected Output: 'Ada Lovelace'

```sh
Describe AddressBook()
```
Test: "It should return an empty AddressBook object"\
Code:\
let addressBook = new AddresssBook();\
addressBook;\
Expected Output: AddressBook {contacts: {…}}

Test: "It should return an object contains the contact object with first name as its ID"\
Code:\
let addressBook = new AddressBook();\
let contact = new Contact("Ada", "Lovelace", "503-555-0100");\
addressBook.addContact(contact);\
addressBook.contacts;\
Expected Output: {Ada: Contact}

Test: "It should return an object contains the contact object with a unique number ID"\
Code:\
let addressBook = new AddressBook();\
let contact = new Contact("Ada", "Lovelace", "503-555-0100");\
addressBook.addContact(contact);\
addressBook.contacts;\
Expected Output: {1: Contact}

Test: "It should return a specific object according to the ID"\
Code:\
let addressBook = new AddressBook();\
let contact = new Contact("Ada", "Lovelace", "503-555-0100");\
let contact2 = new Contact("Grace", "Hopper", "503-555-0199");\
addressBook.addContact(contact);\
addressBook.contacts;\
addressBook.addContact(contact2);\
addressBook.findContact(1)\
Expected Output: Contact {firstName: 'Ada', lastName: 'Lovelace', phoneNumber: '503-555-0100', id: 1}

Test: "It should delect a specific object according to the ID"\
Code:\
let addressBook = new AddressBook();\
let contact = new Contact("Ada", "Lovelace", "503-555-0100");\
let contact2 = new Contact("Grace", "Hopper", "503-555-0199");\
addressBook.addContact(contact);\
addressBook.addContact(contact2);\
addressBook.deleteContact(1);\
addressBook.contacts;\
Expected Output: {2: Contact}

## Known Bugs

* None

## License

MIT

Copyright &copy; 2022 Zhibin Liang 




