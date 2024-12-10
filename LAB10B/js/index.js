const contactForm = document.getElementById('contactForm');
const contactsContainer = document.getElementById('contactList');
const contacts = []; 

function displayContacts() {
    contactsContainer.innerHTML = ''; 
    
    for (let index = 0; index < contacts.length; index++) {
        const contact = contacts[index];
        const li = document.createElement('li');

        li.className = 'list-group-item d-flex justify-content-between align-items-center';

        let textAsArray = [
            contact.firstName,
            contact.lastName,
            contact.phone,
            contact.email,
           
            '<button class="btn btn-danger btn-sm" onclick="deleteContact(' + index + ')">Delete</button>'
        ];

        
        for (let innerIndex = 0; innerIndex < textAsArray.length; innerIndex++) {
            let span = document.createElement('span');
            span.innerHTML = textAsArray[innerIndex];
            
            li.appendChild(span);
        }

        contactsContainer.appendChild(li);
    }
}


function deleteContact(index) {
    
    contacts.splice(index, 1);
    displayContacts();
}


contactForm.addEventListener('submit', function (e) {
    e.preventDefault();

    const firstName = document.getElementById('firstName').value;
    const lastName = document.getElementById('lastName').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;

   contacts.push({ firstName, lastName, email, phone });
    displayContacts();
    contactForm.reset();
});