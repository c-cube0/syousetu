import React, {useState} from 'react';

const Images = () => {
  const [imageItem] = useState("https://placehold.jp/200x200.png");

  return (
  <div className="image-photo">
    <img src={imageItem} alt={"風景画像"} />
    <img src={imageItem} alt={"風景画像"} />
    <img src={imageItem} alt={"風景画像"} />
    <img src={imageItem} alt={"風景画像"} />
    <div className="image-item"></div>
  </div>
  )
}

export default Images;