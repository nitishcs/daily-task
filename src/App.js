import './App.css';
import { useState } from 'react';
const list = [
  "Banana",
  "Grapes",
  "Mango",
  "Apple",
  "Watermelon"
]


function App() {
  const [filter, setFilter] = useState(list)
  const handlefilter = (event) => {
    if (event.target.value === "") {
      setFilter(list)
      return;
    }
    const filterdvalue = list.filter((item) => item.toLocaleLowerCase().indexOf(event.target.value.toLocaleLowerCase()) !== -1)
    setFilter(filterdvalue)
    console.log("filterdvalue", filterdvalue)
  }
  console.log("filter", filter)
  return (
    <div className="App">
      Search:<input type="search" name="search" onChange={handlefilter} />
      {filter && filter.map((val) => {
        return <div>{val}</div>
      })
      }
    </div >

  );
}

export default App;
