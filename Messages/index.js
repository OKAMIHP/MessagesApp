let currentUser = null;

function login() {
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    
    // Here you would typically send a request to your server to authenticate
    // For this example, we'll just simulate a successful login
    currentUser = { email: email };
    
    document.getElementById('login-form').style.display = 'none';
    document.getElementById('chat-container').style.display = 'block';
    
    // Fetch users and messages from the server
    fetchUsers();
    fetchMessages();
}

function fetchUsers() {
    // Simulating fetching users from the server
    const users = ['user1@example.com', 'user2@example.com', 'user3@example.com'];
    const userList = document.getElementById('user-list');
    userList.innerHTML = users.map(user => `<div>${user}</div>`).join('');
}

function fetchMessages() {
    // Simulating fetching messages from the server
    const messages = [
        { sender: 'user1@example.com', content: 'Hello!' },
        { sender: 'user2@example.com', content: 'Hi there!' }
    ];
    displayMessages(messages);
}

function displayMessages(messages) {
    const messageArea = document.getElementById('message-area');
    messageArea.innerHTML = messages.map(msg => `<div><strong>${msg.sender}:</strong> ${msg.content}</div>`).join('');
}

function sendMessage() {
    const messageInput = document.getElementById('message-input');
    const content = messageInput.value.trim();
    
    if (content && currentUser) {
        // Here you would typically send the message to your server
        // For this example, we'll just add it to the display
        const newMessage = { sender: currentUser.email, content: content };
        displayMessages([...document.getElementById('message-area').children, newMessage]);
        messageInput.value = '';
    }
}
