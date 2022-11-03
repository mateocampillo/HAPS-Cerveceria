import React from 'react';
import DashboardSidebar from './DashboardSidebar';
import DashboardMainContainer from './DashboardMainContainer';
import DashboardHeader from './DashboardHeader';
import DashboardLogin from './DashboardLogin';
import useToken from '../../Custom/useToken';

function DashboardAdmin() {

    const {token , setToken} = useToken();

    if(!token){
        {return <DashboardLogin setAuthToken={setToken} />}
    }

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