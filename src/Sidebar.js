import React from 'react';
import './Sidebar.css';
import SidebarOption from './SidebarOption';
import HomeIcon from "@material-ui/icons/Home";
import SearchIcon from "@material-ui/icons/Search";
import LibraryMusicIcon from "@material-ui/icons/LibraryAdd";
import { useDataLayerValue } from './DataLayer';

function Sidebar() {
    const[{playlists},dispatch] = useDataLayerValue();
    return (
        <div className="sidebar">
            <img className="sidebar__logo" src="spotify2021logo.gif" alt="" />

            <SidebarOption Icon={HomeIcon} title="Home" />
            <SidebarOption Icon={SearchIcon} title="Search" />
            <SidebarOption Icon={LibraryMusicIcon} title="Your Library" />
            <br />
            <strong className="sidebar__title">PLAYLISTS</strong>
            <hr />

            {playlists?.items?.map(playlist =>(
                <SidebarOption title={playlist.name}/>
            ))}
            <SidebarOption title="Hip Hop" />
            <SidebarOption title="Rock" />
            <SidebarOption title="Romantic" />
            <SidebarOption title="Sad" />



        </div>
    );
}

export default Sidebar;