import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHashtag, faUser, faCog } from "@fortawesome/free-solid-svg-icons";

const Sidebar = () => {
    return (
        <aside className="sidebar">
            <h2>Channels</h2>
            <ul>
                <li><FontAwesomeIcon icon={faHashtag} /> general</li>
                <li><FontAwesomeIcon icon={faHashtag} /> random</li>
                <li><FontAwesomeIcon icon={faHashtag} /> tech-talk</li>
                <li><FontAwesomeIcon icon={faHashtag} /> memes</li>
            </ul>
            <div className="user-profile">
                <div className="user-info">
                    <FontAwesomeIcon icon={faUser} /> Abstractmelon
                </div>
                <div className="settings">
                    <FontAwesomeIcon icon={faCog} />
                </div>
            </div>
        </aside>
    );
};

export default Sidebar;
