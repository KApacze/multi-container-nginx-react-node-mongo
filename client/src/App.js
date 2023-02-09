import React from 'react';
import './App.css';
import axios from 'axios';
import TodoItem from './components/TodoItem'
import styled from 'styled-components'


const StyledButton = styled.button`
    color: white;
    background-color: #5b73a7;
    border: 1px solid white;
    border-radius: 10px;
    margin-left: 10px;
    padding: 10px;
`

class App extends React.Component{
  constructor(props){
    super(props);
    this.state ={tasks: [],
    inputValue: ''
  }
  this.handler = this.handler.bind(this)
  }
  

  componentDidMount() {
    axios.get(`/backend/v1/to-do`)
    .then(res => {
      console.log(`getting resposne ${res.data}`);
      const items = res.data;
    if (items && Array.isArray(items) && items.length) {
      this.setState((prevState) => {
        return { 
          tasks: prevState.tasks.concat(items) 
        };
      });
    }
    })
  };

  handler(item_name) {
    console.log(`fire ${item_name}`)
    this.setState({tasks: this.state.tasks.filter(function(task) { 
      return task.item_name !== item_name 
  })});
  }


updateInputValue(evt) {
  const val = evt.target.value;
  // ...       
  this.setState({
    inputValue: val
  });
}


render(){
  return (

    <div className="App">
      <h2>TODO App</h2>
      <div className="input-form">
      <span>
          <input type='text'  value={this.state.inputValue} onChange={evt => this.updateInputValue(evt)} />
          <StyledButton onClick={() => {
              const data = {
                item_name: this.state.inputValue,
                isComplete: false
              }
            
              this.setState((prevState) => {
                return { 
                  tasks: prevState.tasks.concat(data) 
                };
              });
            
              this.setState({
                inputValue: ''
              });
          }}>Add Todo</StyledButton>
        </span>
      </div>
    <div className="content-container">
      {this.state.tasks && this.state.tasks.length
        ? this.state.tasks.map((item, i) => {
            return (
              <TodoItem className="TODO-element" key={i} text={`${item.item_name}`} id={`${item._id}`} handler = {this.handler} >
                {`${item.item_name}`}
                <br />
              </TodoItem>
            );
          })
        : 'No items to be done'}
    </div>

    </div>
  );
      }
}

export default App;
