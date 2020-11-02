import React, { Component } from 'react';
import { firebaseDb } from "./libs/firebase";
import './App.css';

class Images extends Component {
    constructor(props) {
        super(props);
        this.state = {
            imageItems: []
        }

    }

    componentDidMount() {
        firebaseDb
            .ref(`imageStore/${this.props.onetime}`)
            .on('value', snapshot => {
                const value = snapshot.val();
                const arry = value.images.split(',');
                this.setState({ imageItems: arry });
            });
    }

    render() {
        return (
            <div className="image-photo">
                { this.state.imageItems &&
                    this.state.imageItems.map((imageItem, index) => imageItem && <div className="tweet"><img key={index} src={imageItem} alt={`アップロード画像 ${index + 1}枚目`} /><textarea className="Sentence"></textarea></div>)
                }
                <div className="image-item"></div>
            </div >
        )
    }
}

export default Images;