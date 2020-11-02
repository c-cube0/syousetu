import './App.css';
import React, { useState } from 'react';
import ImageCount from "./ImageCount";
import Images from "./Images";

function App() {
  const [onetime] = useState("123456");

  return (
    <div className="App">
      <header className="App-header">
        <div className="cp_iptxt">
          <input type="text" placeholder="タイトル" />
        </div>
        <Images onetime={onetime} />
      </header>
      <div>
        <ImageCount onetime={onetime} />
      </div>
    </div>

  );
}

export default App;
