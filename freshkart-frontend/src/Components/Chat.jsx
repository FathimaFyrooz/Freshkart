// src/components/ChatBox.jsx
import { useState } from 'react';
import { Box, TextField, Button, List, ListItem, ListItemText, Paper } from '@mui/material';
import chatStyles from '../Styles/ChatBoxStyles';

export default function ChatBox() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");

  const handleSendMessage = async () => {
    if (input.trim() === "") return;

    // Add user message to the chat
    setMessages((prevMessages) => [
      ...prevMessages, 
      { sender: 'user', message: input },
    ]);

    // Send user message to backend (you can use the actual API call later)
    setInput("");
    
    // Simulate a response (replace with the API call to your Django backend later)
    setTimeout(() => {
      setMessages((prevMessages) => [
        ...prevMessages, 
        { sender: 'bot', message: 'This is a simulated reply.' },
      ]);
    }, 1000);
  };

  return (
    <Box sx={chatStyles.container}>
      <Paper elevation={3} sx={chatStyles.chatBox}>
        <List>
          {messages.map((msg, index) => (
            <ListItem key={index}>
              <ListItemText
                primary={msg.message}
                sx={{
                  ...chatStyles.message,
                  ...(msg.sender === 'user' ? chatStyles.userMessage : chatStyles.botMessage),
                }}
              />
            </ListItem>
          ))}
        </List>
      </Paper>
      <Box sx={chatStyles.inputSection}>
        <TextField
          fullWidth
          label="Type a message..."
          variant="outlined"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && handleSendMessage()}
        />
        <Button
          variant="contained"
          onClick={handleSendMessage}
          sx={chatStyles.sendButton}
        >
          Send
        </Button>
      </Box>
    </Box>
  );
}
