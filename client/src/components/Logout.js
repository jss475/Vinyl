import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";

function Logout({handleLogout}){

    return (
        <button type="button" class="btn btn-dark" onClick = {handleLogout}>Logout</button>
    )
}

export default Logout