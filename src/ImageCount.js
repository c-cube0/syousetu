import React, { Component } from "react";
import { firebaseDb } from "./libs/firebase";

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
            .ref(`imageStore/${this.props.onetime}`)
            .on('value', snapshot => {
                const value = snapshot.val();
                console.log(value)
                this.setState({ limitTime: value.limitTime, maxUpload: value.maxUpload })
            });
    }

    render() {
        return <p>有効期限；{this.state.limitTime}　最大アップロード数；{this.state.maxUpload}</p>;
    }
}

export default ImageCount;
