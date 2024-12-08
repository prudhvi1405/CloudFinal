import React from 'react';

const Chatbot: React.FC = () => {
  return (
    <div style={styles.body}>
      <div style={styles.chatbotContainer}>
        <h2 style={styles.heading}>Chat with our Assistant about Retail Information</h2>
        <iframe
          style={styles.iframe}
          allow="microphone;"
          src="https://console.dialogflow.com/api-client/demo/embedded/1c12e60f-dfa2-4f2e-95c5-cb518d999b09"
        />
      </div>
    </div>
  );
};

const styles: { [key: string]: React.CSSProperties } = {
  body: {
    fontFamily: "'Poppins', sans-serif",
    margin: 0,
    padding: 0,
    backgroundColor: '#5482F1', // This is the light blue background
  },
  chatbotContainer: {
    width: '100%',
    maxWidth: '500px',
    margin: '30px auto',
    backgroundColor: '#ffffff', // White background for the container
    padding: '20px',
    borderRadius: '8px',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
    textAlign: 'center', // Ensuring that textAlign is a valid CSS property
  },
  iframe: {
    width: '100%',
    height: '430px',
    border: 'none',
    borderRadius: '8px',
  },
  heading: {
    fontSize: '24px',
    marginBottom: '20px',
  },
};

export default Chatbot;