import React, { Component } from 'react';
import './chatbot.css'; // Using dedicated chatbot styling

class ChatBot extends Component {
  constructor(props) {
    super(props);
    this.state = {
      messages: [
        {
          text: "Hi there! I'm Renato's AI assistant. Ask me anything about his experience, skills, or background.",
          isBot: true,
        },
      ],
      userInput: '',
      isTyping: false,
    };
    this.messagesEndRef = React.createRef();
    this.chatInputRef = React.createRef();
  }

  scrollToBottom = () => {
    if (this.messagesEndRef.current) {
      this.messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  componentDidMount() {
    // Optimize for mobile - prevent zoom on input focus
    if (this.chatInputRef.current && window.innerWidth <= 768) {
      this.chatInputRef.current.setAttribute('autocomplete', 'off');
      this.chatInputRef.current.setAttribute('autocorrect', 'off');
      this.chatInputRef.current.setAttribute('autocapitalize', 'off');
      this.chatInputRef.current.setAttribute('spellcheck', 'false');
    }
  }

  componentDidUpdate() {
    this.scrollToBottom();
  }

  handleInputChange = (event) => {
    this.setState({ userInput: event.target.value });
  };

  handleSubmit = (event) => {
    event.preventDefault();

    if (!this.state.userInput.trim()) return;

    // Add user message
    const updatedMessages = [
      ...this.state.messages,
      { text: this.state.userInput, isBot: false },
    ];

    this.setState({
      messages: updatedMessages,
      userInput: '',
      isTyping: true,
    });

    // Simulate response
    this.getResponse(this.state.userInput, updatedMessages);
  };

  getResponse = (userInput, currentMessages) => {
    // Enhanced response logic
    const inputLower = userInput.toLowerCase();
    let botResponse =
      "I don't have specific information about that yet. Try asking about Renato's experience, skills, projects, or contact information.";

    if (
      inputLower.includes('experience') ||
      inputLower.includes('work') ||
      inputLower.includes('job')
    ) {
      botResponse =
        'Renato is a Product Leader in AI with expertise in launching and scaling innovative products. He specializes in bringing products from 0 to 1 by collaborating with business and engineering teams to validate product-market fit. He has a track record of delivering significant business outcomes through AI and data solutions.';
    } else if (
      inputLower.includes('skill') ||
      inputLower.includes('expert') ||
      inputLower.includes('technology')
    ) {
      botResponse =
        "Renato's key skills include:\n• AI product strategy and development\n• LLM, agent, and RAG system implementation\n• Data platform architecture and analytics\n• Launching products from 0 to 1\n• Cross-functional team leadership\n• Market validation and product-market fit";
    } else if (
      inputLower.includes('contact') ||
      inputLower.includes('email') ||
      inputLower.includes('phone')
    ) {
      botResponse = 'You can reach Renato at renato@rezaca.net.';
    } else if (
      inputLower.includes('hello') ||
      inputLower.includes('hi') ||
      inputLower.includes('hey')
    ) {
      botResponse =
        "Hello! I'm Renato's AI assistant. How can I help you learn about his work, skills, or background today?";
    } else if (
      inputLower.includes('who') ||
      inputLower.includes('what') ||
      inputLower.includes('about')
    ) {
      botResponse =
        "Renato is a Product Leader specializing in AI and data solutions. He's passionate about creating disruptive products that redefine how technology is used in industries. His focus is on leveraging AI technologies to process data and deliver significant business outcomes.";
    } else if (
      inputLower.includes('project') ||
      inputLower.includes('achievement') ||
      inputLower.includes('accomplishment')
    ) {
      botResponse =
        "One of Renato's most significant professional achievements is successfully launching disruptive products that are ahead of the curve and redefine how technology and data are used in his industry. He excels at bringing products from 0 to 1 and scaling them to deliver business value.";
    } else if (
      inputLower.includes('ai') ||
      inputLower.includes('artificial intelligence') ||
      inputLower.includes('machine learning')
    ) {
      botResponse =
        'Renato specializes in AI product development, working with technologies such as Large Language Models (LLMs), AI agents, and Retrieval Augmented Generation (RAG) systems. He focuses on building practical AI solutions that process massive amounts of data and deliver real business value.';
    }

    // Add typing indicator then bot response with a delay to simulate thinking
    setTimeout(() => {
      this.setState({
        messages: [...currentMessages, { text: botResponse, isBot: true }],
        isTyping: false,
      });
    }, 1000);
  };

  render() {
    return (
      <div className="chatbot-container">
        <div className="chatbot-header">
          <div className="chatbot-title">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="12" cy="12" r="10"></circle>
              <path d="M12 16v-4"></path>
              <path d="M12 8h.01"></path>
            </svg>
            <span>Ask me about Renato</span>
          </div>
        </div>

        <div className="chatbot-messages">
          {this.state.messages.map((message, index) => (
            <div
              key={index}
              className={`message ${message.isBot ? 'bot' : 'user'}`}
            >
              {message.isBot && (
                <div className="avatar">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M12 2c1.5 0 3 .5 3 2-2 0-6 0-6 0 0-1.5 1.5-2 3-2zm3 4H9c-.55 0-1 .45-1 1v14c0 .55.45 1 1 1h6c.55 0 1-.45 1-1V7c0-.55-.45-1-1-1zm-3 13c-.83 0-1.5-.67-1.5-1.5S11.17 16 12 16s1.5.67 1.5 1.5S12.83 19 12 19z"></path>
                  </svg>
                </div>
              )}
              <div className="message-bubble">
                {message.text.split('\n').map((text, i) => (
                  <React.Fragment key={i}>
                    {text}
                    {i !== message.text.split('\n').length - 1 && <br />}
                  </React.Fragment>
                ))}
              </div>
            </div>
          ))}

          {this.state.isTyping && (
            <div className="message bot">
              <div className="avatar">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M12 2c1.5 0 3 .5 3 2-2 0-6 0-6 0 0-1.5 1.5-2 3-2zm3 4H9c-.55 0-1 .45-1 1v14c0 .55.45 1 1 1h6c.55 0 1-.45 1-1V7c0-.55-.45-1-1-1zm-3 13c-.83 0-1.5-.67-1.5-1.5S11.17 16 12 16s1.5.67 1.5 1.5S12.83 19 12 19z"></path>
                </svg>
              </div>
              <div className="typing-indicator">
                <span></span>
                <span></span>
                <span></span>
              </div>
            </div>
          )}
          <div ref={this.messagesEndRef} />
        </div>

        <form onSubmit={this.handleSubmit} className="chatbot-input">
          <label htmlFor="chat-input" className="visually-hidden">
            Ask a question about Renato
          </label>
          <input
            type="text"
            id="chat-input"
            ref={this.chatInputRef}
            value={this.state.userInput}
            onChange={this.handleInputChange}
            placeholder="Ask anything about Renato..."
            className="chat-input"
          />
          <button
            type="submit"
            className="chat-send-button"
            disabled={!this.state.userInput.trim() || this.state.isTyping}
            aria-label="Send message"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="22" y1="2" x2="11" y2="13"></line>
              <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
            </svg>
          </button>
        </form>

        <div className="chatbot-footer">
          <p>Powered by AI • Not connected to a live model</p>
        </div>
      </div>
    );
  }
}

export default ChatBot;
