import React from 'react';

const Sidebar = () => {
    const handleOverviewClick = () => {
        // Handle Overview click
    };

    const handleReportsClick = () => {
        // Handle Reports click
    };

    // Add other click handlers for your buttons

    return (
        <div className="col-md-3 col-lg-2 sidebar-offcanvas pl-0" id="sidebar" role="navigation" style={{ backgroundColor: "#e9ecef" }}>
            <ul className="nav flex-column sticky-top pl-0 pt-5 p-3 mt-3">
                <li className="nav-item mb-2 mt-3">
                    <button className="nav-link text-secondary" href="#">
                        <h5>Jacob Nejam</h5>
                    </button>
                </li>
                <li className="nav-item mb-2">
                    <button className="nav-link text-secondary" onClick={handleOverviewClick}>
                        <i className="fas fa-user font-weight-bold"></i> <span className="ml-3">Overview</span>
                    </button>
                </li>
                <li className="nav-item mb-2">
                    <button className="nav-link text-secondary" onClick={handleReportsClick}>
                        <i className="far fa-file-word font-weight-bold"></i> <span className="ml-3"> Reports▾</span>
                    </button>
                    {/* Submenu content */}
                </li>
                {/* Add other list items with buttons */}
            </ul>
        </div>
    );
};

export default Sidebar;
