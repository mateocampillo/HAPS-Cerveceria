import React from 'react';
import DashboardSidebar from './DashboardSidebar';
import DashboardMainContainer from './DashboardMainContainer';
import DashboardHeader from './DashboardHeader';

function DashboardAdmin() {

    return (
        <div className='container-fluid mx-auto my-3 h-100 rounded'>
            <div className='row'>
                <DashboardHeader />
            </div>
            <div className='row'>
                <DashboardSidebar />
                <DashboardMainContainer />
            </div>
        </div>
    )

}

export default DashboardAdmin;