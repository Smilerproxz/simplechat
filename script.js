// script.js

const messageForm = document.querySelector('.message-form');
const messageInput = document.querySelector('.message-form input');
const messagesContainer = document.querySelector('.messages');

messageForm.addEventListener('submit', (event) => {
    event.preventDefault();

    const messageContent = messageInput.value;
    if (messageContent.trim()) {
        const messageElement = createMessageElement(messageContent);
        messagesContainer.appendChild(messageElement);
        messageInput.value = '';
        messagesContainer.scrollTop = messagesContainer.scrollHeight;
    }
});

function
 
createMessageElement(messageContent) {
    const messageElement = document.createElement('div');
    messageElement.classList.add('message');

    const messageSenderElement = document.createElement('span');
    messageSenderElement.classList.add('message-sender');
    messageSenderElement.textContent = 'User 1:';

    const messageContentElement = document.createElement('span');
    messageContentElement.classList.add('message-content');
    messageContentElement.textContent = messageContent;

    messageElement.appendChild(messageSenderElement);
    messageElement.appendChild(messageContentElement);

    return messageElement;
