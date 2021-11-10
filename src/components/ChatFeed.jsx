import MyMessage from "./MyMessage";
import MessageForm from "./MessageForm";
import TheirMessage from "./TheirMessage";


const ChatFeed = (props) => {
    const { chats , activeChat , userName , messages } = props;

    const chat = chats && chats[activeChat];

    const renderReadReciepts = ( message , isMyMessage ) => {
      return chat.people.map( (person , index ) => 
            person.last_read === message.id && (
                <div
                    key = {`read_${index}`}
                    className = 'read-reciepts'
                    style = {{
                        float: isMyMessage ? "right" : "left" ,
                        backgroundImage: `url(${person?.person?.avatar})`
                    }}
                >

                </div>
            )
            ) 
        }

    const renderMessages = () => { 
        const keys = Object.keys(messages);

        return keys.map( (key , index) => {
            const message = messages[key];
            console.log(message);
            const LastMessageKey = index === 0 ? null : keys[index - 1] ;
            const isMyMessage = userName === message.sender.username;

            return (
                <div key = {`msg_${index}`} style={{ width: '100%'}}>
                    <div className="message-block">
                        {
                            isMyMessage
                            ? <MyMessage message={message} />
                            : <TheirMessage message={message} LastMessage ={messages[LastMessageKey]} />
                        }
                    </div>

                    <div className="read-receipts" style={{marginRight: isMyMessage ? '18px' : '0px' , marginLeft: isMyMessage ? '0px' : '68px'}}>
                        {renderReadReciepts( message , isMyMessage )}
                    </div>
                </div>
            )
        })
    }

    if(!chat) return "Loading ...";

    return (
        <div className="chat-feed">
            <div className="chat-title-container">
                <div className="chat-title">
                    { chat.title }
                </div>
                <div className="chat-subtitle">
                    { chat.people.map( (person) => ` ${person.person.username}`)}
                </div>
            </div>

            {renderMessages()}

            <div style={{ height: '100px'}} />
            <div className="message-form-container">
                <MessageForm {...props} chatID={activeChat} />
            </div>
        </div>
    )
}

export default ChatFeed;