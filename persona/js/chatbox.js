const nicknameInput = document.querySelector('.nicknameInput');
const chatboxForm = document.querySelector('.chatboxControlls');
const chatboxInput = document.querySelector('.chatboxInput');
const messageContainer = document.querySelector('.messageContainer');

chatboxForm.addEventListener('submit', (e) => {
  e.preventDefault();

  const message = chatboxInput.value.trim();
  const nickname = nicknameInput.value.trim();

  if (message && nickname) {
    addMessage(nickname, message);
    chatboxInput.value = '';
    saveMessages();
  }
});

function addMessage(username, message) {
  const newMessage = document.createElement('div');
  newMessage.className = 'chatMessage';
  newMessage.innerHTML = `
      <div class="character"></div>
      <span class="username">${username}: </span>
      <span>${message}</span>`;
  messageContainer.appendChild(newMessage);
  messageContainer.scrollTop = messageContainer.scrollHeight;
}

function saveMessages() {
  const messagesHTML = messageContainer.innerHTML;
  localStorage.setItem('messages', messagesHTML);
}

function loadMessages() {
  const savedMessages = localStorage.getItem('messages');
  if (savedMessages) {
    messageContainer.innerHTML = savedMessages;
    messageContainer.scrollTop = messageContainer.scrollHeight;
  }
}

loadMessages();