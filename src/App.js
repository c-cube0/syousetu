import './App.css';
import React, { useState } from 'react';
import ImageCount from "./ImageCount";

function App() {
  const [storeId] = useState("123456");
  const [imageItem] = useState("https://placehold.jp/200x200.png");

  return (
    <div className="App">
      <header className="App-header">
        <div className="cp_iptxt">
          <input type="text" placeholder="タイトル" />
        </div>
        <textarea></textarea>
      </header>
      <div className="image-photo">
        <img src={imageItem} alt={"風景画像"} />
        <img src={imageItem} alt={"風景画像"} />
        <img src={imageItem} alt={"風景画像"} />
        <img src={imageItem} alt={"風景画像"} />
        <div className="image-item"></div>
      </div>
      <ImageCount storeId={storeId} />

    </div>

  );
}

export default App;
