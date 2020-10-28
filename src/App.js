import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';

function App({ Imajeitem }) {
  const [imajeitem, setImajeitem] = useState("https://placehold.jp/200x200.png");
  return (
    <div className="App">
      <header className="App-header">
        <div class="cp_iptxt">
          <input type="text" placeholder="タイトル" />
        </div>
        <textarea></textarea>
      </header>
      <div class="imaje-foto">
        <img src={imajeitem} alt={"風景画像"} />
        <img src={imajeitem} alt={"風景画像"} />
        <img src={imajeitem} alt={"風景画像"} />
        <img src={imajeitem} alt={"風景画像"} />
        <div class="imaje-item"></div>
        <div class="imaje-item"></div>
        <div class="imaje-item"></div>
        <div class="imaje-item"></div>
      </div>

    </div>

  );
}

export default App;
