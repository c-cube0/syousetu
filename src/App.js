import './App.css';
import React, { useState } from 'react';
import ImageCount from "./ImageCount";
import Images from "./Images";

function App() {
  const [storeId] = useState("123456");

  return (
    <div className="App">
      <header className="App-header">
        <div className="cp_iptxt">
          <input type="text" placeholder="タイトル" />
        </div>
        <textarea></textarea>
      </header>
      <Images />
      <ImageCount storeId={storeId} />
    </div>

  );
}

export default App;
