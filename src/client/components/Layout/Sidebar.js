import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
    faHashtag,
    faUser,
    faCog,
    faPlus,
} from '@fortawesome/free-solid-svg-icons'

const Sidebar = () => {
    const [servers, setServers] = useState([
        { id: 1, name: 'Server 1' },
        { id: 2, name: 'Server 2' },
        { id: 3, name: 'Server 3' },
    ])
    const [channels, setChannels] = useState([
        { id: 1, serverId: 1, name: 'general' },
        { id: 2, serverId: 1, name: 'random' },
        { id: 3, serverId: 1, name: 'tech-talk' },
        { id: 4, serverId: 2, name: 'memes' },
    ])

    const createChannel = (serverId, channelName) => {
        const newChannel = {
            id: channels.length + 1,
            serverId,
            name: channelName,
        }
        setChannels([...channels, newChannel])
    }

    return (
        <aside className="sidebar">
            <h2>Servers</h2>
            <ul>
                {servers.map((server) => (
                    <li key={server.id}>{server.name}</li>
                ))}
            </ul>
            <h2>Channels</h2>
            <ul>
                {channels.map((channel) => (
                    <li key={channel.id}>
                        <FontAwesomeIcon icon={faHashtag} /> {channel.name}
                    </li>
                ))}
            </ul>
            <div className="user-profile">
                <div className="user-info">
                    <FontAwesomeIcon icon={faUser} /> Abstractmelon
                </div>
                <div className="settings">
                    <FontAwesomeIcon icon={faCog} />
                </div>
            </div>
            {/*
            <div className="create-channel">
                <input type="text" placeholder="Enter channel name" />
                <button onClick={() => createChannel(1, "new-channel")}>
                    <FontAwesomeIcon icon={faPlus} />
                </button>
            </div>
            */}
        </aside>
    )
}

export default Sidebar
