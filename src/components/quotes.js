import React, {Component} from 'react';
import auth from '../hoc/auth';

class Quotes extends Component {

    render(){

        return (
            <div>
                <h1 className="center">Movie Quotes</h1>
                <h5>A wizard is never late, nor is he early. He arrives precisely when he means to.</h5>
            </div>
        );
    }
}

export default auth(Quotes);
