// Get DOM elements
const messageInput = document.getElementById('msg-input');
const sendButton = document.getElementById('send');
const chatMessages = document.getElementById('chat-messages');
const contacts = document.getElementsByClassName('contact-name');
const activeContactName = document.getElementById('active-contact-name');
const searchInput = document.getElementById('search-input');

// searchInput.addEventListener('input', function() {
//     const searchQuery = searchInput.value.toLowerCase();
//     const names = namesList.getElementsByTagName('li');
  
//     for (let i = 0; i < names.length; i++) {
//       const name = names[i].textContent.toLowerCase();
//       if (name.includes(searchQuery)) {
//         names[i].style.display = 'block';
//       } else {
//         names[i].style.display = 'none';
//       }
//     }
// });

// Active contact
let activeContact = null;

// Event listener for contact button click
for (let i = 0; i < contacts.length; i++) {
  contacts[i].addEventListener('click', function() {
    setActiveContact(this);
  });
}

// Function to set active contact
function setActiveContact(contact) {
  if (activeContact) {
    activeContact.classList.remove('active');
  }
  activeContact = contact;
  activeContact.classList.add('active');
  activeContactName.textContent = activeContact.textContent;
  displayChatHistory(activeContact.textContent);
}

// Event listener for send button click
sendButton.addEventListener('click', () => {
  if (activeContact) {
    const message = messageInput.value.trim();
    if (message) {
      displayMessage(activeContact.textContent, message);
      messageInput.value = '';
    }
  }
});

// Function to display a new chat message
function displayMessage(contact, message) {
  // messageElement.className = 'chat-message-class';

  const spanElement = document.createElement('span');
  spanElement.className = 'chat-message';
  spanElement.textContent = message;
  const chatWindow = document.getElementById('chat-messages');
  chatWindow.appendChild(spanElement);
  chatWindow.scrollTop = chatWindow.scrollHeight;

  // Save message to local storage
  saveMessage(contact, message);
}

// Function to display chat history for a specific contact
function displayChatHistory(contact) {
  chatMessages.innerHTML = '';

  // Get chat history for the contact from local storage
  const chatHistory = getChatHistory(contact);

  // Display chat history
  chatHistory.forEach(message => {
    const messageElement = document.createElement('span');
    messageElement.className = 'chat-message';
    messageElement.textContent = message;
    chatMessages.appendChild(messageElement);
  });

  chatMessages.scrollTop = chatMessages.scrollHeight;
}

// Function to save a message to local storage
function saveMessage(contact, message) {
  const chatHistory = getChatHistory(contact);
  chatHistory.push(message);
  localStorage.setItem(`chatHistory_${contact}`, JSON.stringify(chatHistory));
}

// Function to retrieve chat history from local storage for a specific contact
function getChatHistory(contact) {
  const chatHistory = localStorage.getItem(`chatHistory_${contact}`);
  return chatHistory ? JSON.parse(chatHistory) : [];
}

// Display chat history for the initial active contact
if (contacts.length > 0) {
  setActiveContact(contacts[0]);
}





