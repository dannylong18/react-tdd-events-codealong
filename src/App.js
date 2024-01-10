import { useState } from "react";

function App() {
  const [pepIsChecked, setPepIsChecked] = useState(false);

  function togglePep (e) {
    setPepIsChecked(e.target.checked)
  }
  return (
    <div>
      <h1>Select Pizza Toppings</h1>
      <input 
      type='checkbox'
      id='pepperoni'
      checked={pepIsChecked}
      aria-checked={pepIsChecked}
      onChange={togglePep}
      />
      <label htmlFor="pepperoni">Add Pepperoni</label>

      <h2>Your Toppings:</h2>
      <ul>
        <li>Cheese</li>
        {pepIsChecked ? <li>Pepperoni</li> : null}
      </ul>
    </div>
  )
}

export default App;
