import React from 'react';

function DashboardSidebar() {

    return (
        <div className="col-sm-12 col-md-3 text-dark bg-white">
            <a href="/" className="align-items-center text-decoration-none">
                <span className="text-dark text-center fs-3">Menu</span>
            </a>
            <hr></hr>
            <ul className="nav nav-pills flex-column mb-3 list-group">
                <li className="nav-item">
                    <a href="/admin/" className="nav-link list-group-item active" aria-current="page">Home</a>
                </li>
                <li>
                    <a href="/admin/" className="nav-link list-group-item text-dark">Dashboard</a>
                </li>
                <li>
                    <a href="/admin/" className="nav-link list-group-item text-dark">Orders</a>
                </li>
                <li>
                    <a href="/admin/" className="nav-link list-group-item text-dark">Products</a>
                </li>
                <li>
                    <a href="/admin/" className="nav-link list-group-item text-dark">Customers</a>
                </li>
            </ul>
        </div>
    )
}

export default DashboardSidebar;