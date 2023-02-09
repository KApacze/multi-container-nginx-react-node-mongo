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
    this.state ={tasks: [ {item_name: "wake up", _id: 0, completed: false},  {item_name: "brush_teeth", _id: 1, completed: false}],
    inputValue: ''
  }
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
      // addTask(items);
    }
    })
  };



  removeTask(id){
    const tasks = this.state.tasks.filter(element => (element.id !== id));
    this.setState({ tasks: tasks });
  };
  // React.useEffect(() => {
  //   const getToDoItems = async () => {
  //     // const response = await fetch(
  //     //   `/backend/v1/to-do`
  //     // );
  
  //     // const items = await response.json();
  //     // if (items && Array.isArray(items) && items.length) {
    //     //   updateToDoItems(items);
    //     // }
    //   };
    //   getToDoItems();
    // }, []);


//   async start = () => {
//     console.log(`async func start post`);
//     const response = await axios.post('/backend/v1/to-do', {
//       item_name: 'Sleep',
//       complete: false
//     });
//     console.log(response.data);
//  };
//  start();

//  constructor(props){
//   super(props);
//   this.state ={tasks: []}

//   this.addTask = this.addTask.bind(this);
//   this.removeTask = this.removeTask.bind(this);
// }

// }

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
      <div class="input-form">
      <span>
          <input type='text'  value={this.state.inputValue} onChange={evt => this.updateInputValue(evt)} />
          <StyledButton /*onClick={handleAddTodo}*/>Add Todo</StyledButton>
        </span>
      </div>
    <div className="content-container">
      {this.state.tasks && this.state.tasks.length
        ? this.state.tasks.map((item, i) => {
            return (
              <TodoItem className="TODO-element" key={i} text={`${item.item_name}`} id={`${item._id}`}>
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
