"use strict";
let clients = [];
function addContact() {
    const idInput = document.getElementById('id');
    const nameInput = document.getElementById('name');
    const contactInput = document.getElementById('contact');
    const id = parseInt(idInput.value);
    const name = nameInput.value;
    const contact = parseInt(contactInput.value);
    const user = { id, name, contact };
    clients.push(user);
    saveToLocalStorage();
    loadFromLocalStorage();
    console.log("User created:", user);
}
// function getUserById (id: number): User | undefined {
//     return clients.find(user => user.id === id);
//   }
//function to update user
function updateUser(updatedFields) {
    const idInput = document.getElementById('id');
    const nameInput = document.getElementById('name');
    const contactInput = document.getElementById('contact');
    const id = parseInt(idInput.value);
    const name = nameInput.value;
    const contact = parseInt(contactInput.value);
    //const user: User = { id, name, contact };
    const user = clients.find(user => user.id === id);
    if (user) {
        user.name = name;
        user.contact = contact;
        saveToLocalStorage();
        loadFromLocalStorage();
        console.log("User updated:", user);
    }
    else {
        console.log("User not found");
    }
}
function deleteUser() {
    const idInput = document.getElementById('id');
    const nameInput = document.getElementById('name');
    const contactInput = document.getElementById('contact');
    const id = parseInt(idInput.value);
    const name = nameInput.value;
    const contact = parseInt(contactInput.value);
    const user = { id, name, contact };
    clients = clients.filter(user => user.id !== id);
    saveToLocalStorage();
    console.log("User deleted:", id);
}
function saveToLocalStorage() {
    localStorage.setItem("clients", JSON.stringify(clients));
}
function loadFromLocalStorage() {
    const data = localStorage.getItem("clients");
    if (data) {
        try {
            const parsed = JSON.parse(data);
            if (Array.isArray(parsed)) {
                clients = parsed;
            }
        }
        catch (error) {
            console.error("Error parsing local storage data:", error);
        }
    }
}
loadFromLocalStorage();
