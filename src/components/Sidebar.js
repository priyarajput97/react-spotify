import React from "react";

function Sidebar() {
  return (
    <div className="sidebar">
      <div>
        <div className="sidebar-text active">Discover</div>
      </div>
      <div>
        <div className="sidebar-text">Search</div>
      </div>
      <div>
        <div className="sidebar-text">Favourites</div>
      </div>
      <div>
        <div className="sidebar-text">Playlist</div>
      </div>
      <div>
        <div className="sidebar-text">Charts</div>
      </div>
    </div>
  );
}

export default Sidebar;
