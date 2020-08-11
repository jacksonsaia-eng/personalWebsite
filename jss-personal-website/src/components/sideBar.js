import React from "react";
import "98.css";
import { Link } from 'react-router-dom';

export default function SideBar() {

    return (
        <div style={{
            width: 200,
            position: "fixed",
            top: 0,
            bottom: 0,
            padding: 8,
            display: "flex",
            alignItems: "stretch",
        }} className="window">
            <div className="window-body">
                <p style={{ textAlign: "center", fontSize: 20 }}>💫 navigation</p>
                <ul class="tree-view" style={{ fontSize: 15 }}>
                    <Link to="/">
                        <li>
                            root
                        <ul>
                                <Link to="/music">
                                    <li>
                                        music
                                    </li>
                                </Link>
                                <Link to="/photo">
                                    <li>
                                        photo
                                    </li>
                                </Link>
                                <Link to="/video">
                                    <li>
                                        video
                                    </li>
                                </Link>
                                <Link to="/engineering">
                                    <li>
                                        engn
                                    </li>
                                </Link>
                                <Link to="/about">
                                    <li>
                                        about
                                    </li>
                                </Link>
                            </ul>
                        </li>
                    </Link>
                </ul>
            </div>
        </div>
    );
}