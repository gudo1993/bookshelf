import React from 'react';
import Axios from 'axios';

const Logout = (props) =>  {

    let request = Axios.get('/api/logout')
                    .then(request => {
                        setTimeout(()=>{
                            props.history.push('/')
                        },2000)
                    })

    return (
        <div className="logout_container">
            <h1>Sorry to see you go :(</h1>
        </div>
    );
};

export default Logout;