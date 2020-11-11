import './Top.css';
import React from 'react';
function Top() {
    return (
        <div className="Top">
            <header className="Top-header">
                <div className="heading">
                    <h1 className="titlle">
                        !Good record!
                    </h1>
                </div>
                <div className="lead">
                    <p className="lead-text">
                        ＊記憶、記録、とっておきたいことをここに残しましょう＊
                    </p>
                    <a href="#" className="home">ホーム</a>
                </div>

            </header>
        </div>
    );
}
export default Top;