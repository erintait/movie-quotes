import React from 'react';
import auth from '../hoc/auth';

const SecretList = props => {


    return (
        <div>
            <h1 className="center">Secret Operatives List</h1>
            <ol>
                <li>Jim</li>
                <li>Ana</li>
                <li>Kath</li>
                <li>Cait</li>
                <li>Kenders</li>
                <li>Day</li>
                <li>Ria</li>
            </ol>
        </div>
    );
};

export default auth(SecretList);
