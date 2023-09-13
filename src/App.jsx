import React from "react";
import emojis from './emojis.json';
import Card from "./Card";
import './Card.css'
function App() {
  const data = emojis.emojis;

  return (
    <>
      <h1>😂 Find Meaning of emoji 😂</h1>
      {/* <input type="text" name="" id="" /> */}
      <div className="containerBox row">
        {
          data.map((item) => (
            <Card dataEmoji={item.dataEmoji} title={item.title} />
          ))
        }
      </div>
    </>
  );
}
export default App;
