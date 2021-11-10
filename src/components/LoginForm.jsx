import { useState } from 'react';
import axios from 'axios';

const LoginForm = () => {
    const [ username , setUsername ]   = useState('');
    const [ password , setPassword ] = useState('');
    const [  error , setError ] = useState('');

    const handleUsername = (e) => setUsername(e.target.value);

    const handleSubmit = async (e) => {
        e.preventDefault();

        const authObject = { 'Project-ID': "3beeb6d8-7206-4143-a461-36c7cc9b1faa" , "User-Name": username , "User-Secret": password }
        
        try {
           await axios.get("https://api.chatengine.io/chats" , { headers: authObject });
            
           localStorage.setItem('username' , username );
           localStorage.setItem('password' , password );

           window.location.reload();
        }
        catch( error ) {
            setError("Incorret credentials!");
        }
    }
    return (
        <div className="wrapper">
            <div className="form">
                <h1 className="title">Chat Appliction</h1>

                <form onSubmit={handleSubmit}>
                    <input type="text" value={username} onChange={ handleUsername } 
                           className="input" placeholder="Username"/>
                    <input type="password" value={password} onChange={ (e) => setPassword(e.target.value) } 
                           className="input" placeholder="password"/>
                    
                    <div align="center">
                        <button type="submit" className="button">
                            <span>Start Chatting</span>
                        </button>
                    </div>
                    <h2 className="error">{error}</h2>
                </form>
            </div>

        </div>
    )
}

export default LoginForm;