import React from 'react';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import '../node_modules/bootstrap/dist/js/bootstrap.js';

let estatus = {
  quote: 'Daisaku Ikeda',
  author: "The person who lives life fully, glowing with life's energy, is the person who lives a successful life.", 
  link: 'https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text=%22The%20person%20who%20lives%20life%20fully%2C%20glowing%20with%20life%27s%20energy%2C%20is%20the%20person%20who%20lives%20a%20successful%20life.%22%20Daisaku%20Ikeda'
};




class QuoteMachine extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      quote: estatus.quote,
      author: estatus.author,
      link: estatus.link
    }
    this.updateQuote = this.updateQuote.bind(this);
  }
  updateQuote() {
    fetch("https://api.quotable.io/random").then(response => response.json()).then(response => {
      this.setState(
        {author: response.author , 
          quote: response.content,
        })
        document.getElementById("tweet-quote").setAttribute("href", 'https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text=' + encodeURIComponent('"' + response.content + '" ' + response.author))
      }); 
    }

  render(){
  return (
  <div className="container-fluid">
  <div className="row justify-content-sm-center vh-100 align-items-center">
  <div className="col-8">
  <div className="card" id="quote-box">
    <div className="card-header">FreeCodeCamp Random Quote Machine</div>
    <div className="card-body">
      <h5 className="card-title" id="author">{this.state.author}</h5>
      <p className="card-text" id="text">{this.state.quote}</p>
    </div>
    <div className="card-footer">
      <div className="d-flex justify-content-between">
      <button 
      className="btn btn-primary" 
      id="new-quote"
      onClick={this.updateQuote}>New Quote</button>
      <div>
      <a 
      className="btn btn-secondary" 
      id="tweet-quote"
      href="https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text=%22The%20person%20who%20lives%20life%20fully%2C%20glowing%20with%20life%27s%20energy%2C%20is%20the%20person%20who%20lives%20a%20successful%20life.%22%20Daisaku%20Ikeda"
      onClick={this.share}>Tweet</a>
      <a href="#" className="btn btn-secondary">Discord</a>
      <a href="#" className="btn btn-secondary">Tweet</a>
      </div>
      </div>
    </div>
  </div>
  </div>
  </div>
  </div>
)
}
}


export default QuoteMachine;
