import React from 'react';
import { ChatEngine } from 'react-chat-engine';
import './App.css';
import { ChatFeed, LoginForm } from './components';

const App = () => {
  if (!localStorage.getItem('username')) return <LoginForm />;

  return (
    <ChatEngine
      height="100vh"
      projectID="c3321ea8-62e1-4406-be0d-c725d63ad8ac"
      userName={localStorage.getItem('username')}
      userSecret={localStorage.getItem('password')}
      renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}
    />
  );
};

export default App;
