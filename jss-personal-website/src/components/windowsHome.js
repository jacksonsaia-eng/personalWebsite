import React from "react";
import "98.css";
import { Link } from 'react-router-dom';

export default function WindowsHome() {

    return (
        <div style={{ width: 800, height: 200 }} className="window">
            <div className="title-bar">
                <div className="title-bar-text" style={{ fontSize: 15 }}>jackson saia</div>
                <div className="title-bar-controls">
                    <button aria-label="Minimize" />
                    <button aria-label="Maximize" />
                    <button aria-label="Close" />
                </div>
            </div>

            <div className="window-body">
                <p style={{ textAlign: "center", fontSize: 20 }}>✨ please choose one: ✨</p>
                <div className="field-row" style={{ justifyContent: "center", height: 60 }}>
                    <Link to="/music">
                        <button style={{ height: 50, fontSize: 15 }}>music</button>
                    </Link>
                    <Link to="/photo">
                        <button style={{ height: 50, fontSize: 15 }}>photo</button>
                    </Link>
                    <Link to="/video">
                        <button style={{ height: 50, fontSize: 15 }}>video</button>
                    </Link>
                    <Link to="/engineering">
                        <button style={{ height: 50, fontSize: 15 }}>engineering</button>
                    </Link>
                    <Link to="/about">
                        <button style={{ height: 50, fontSize: 15 }}>about</button>
                    </Link>
                </div>
            </div>
        </div>
    );
}