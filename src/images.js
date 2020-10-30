import React, {useState, useEffect} from 'react';
import { firebaseDb } from "./libs/firebase";

const Images = ({onetime}) => {
  const [imageItems, setimageItems] = useState([]);

  useEffect(() => {
    const getImages = async () => {
      firebaseDb
      .ref(`imageStore/${onetime}`)
      .on('value', snapshot => {
          const value = snapshot.val();
          const arry = value.images.split(',');
          setimageItems(arry)
      });
    }
    getImages();
  });

  return (
  <div className="image-photo">
  { imageItems && 
    imageItems.map((imageItem, index) => imageItem && <img src={imageItem} alt={`アップロード画像 ${index + 1}枚目`} width="200" height="200" />)
  }
    <div className="image-item"></div>
  </div>
  )
}

export default Images;