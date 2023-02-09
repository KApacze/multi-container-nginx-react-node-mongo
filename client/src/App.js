import React from 'react';
import './App.css';
import axios from 'axios';

function App() {
  const [toDoItems, updateToDoItems] = React.useState([]);

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


  React.useEffect(() => {
    axios.get(`/backend/v1/to-do`)
    .then(res => {
      console.log(`getting resposne ${res.data}`);
      const items = res.data;
    if (items && Array.isArray(items) && items.length) {
      updateToDoItems(items);
    }
    })
  }, []);


  async function start() {
    console.log(`async func start post`);
    const response = await axios.post('/backend/v1/to-do', {
      item_name: 'Sleep',
      complete: false
    });
    console.log(response.data);
 }

 start()

  return (
    <div>
      {toDoItems && toDoItems.length
        ? toDoItems.map((item, i) => {
            return (
              <div key={i}>
                {`${item.item_name}`}
                <br />
              </div>
            );
          })
        : 'No items to be done'}
    </div>
  );
}

export default App;
