import React, { Component } from "react";
import { firebaseDb } from "./libs/firebase";
import "firebase/storage";

class ImageCount extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: []
        };
    }

    // Firebaseからのデータ取得
    componentDidMount() {
        firebaseDb
            .ref(`imageStore/${this.props.storeId}`)
            .on('value', snapshot => {
                this.setState({ imageLength: snapshot.val() || [] })
            });
    }

    render() {
        return <p>{this.state.imageLength}枚あります</p>;
    }
}

export default ImageCount;
