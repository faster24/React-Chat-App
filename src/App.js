import { ChatEngine } from 'react-chat-engine';
import  ChatFeed  from './components/ChatFeed';
import LoginForm from './components/LoginForm';
import './App.css';


const App = () => {
  
    if(!localStorage.getItem('username')) return <LoginForm />; 

    return (   
        <ChatEngine 
            height = "100vh" 
            projectID = "3beeb6d8-7206-4143-a461-36c7cc9b1faa"
            userName = {localStorage.getItem('username')}
            userSecret = {localStorage.getItem('password')}
            renderChatFeed = {(chatAppProps) => <ChatFeed { ...chatAppProps } /> }
        />
    );
}

export default App;