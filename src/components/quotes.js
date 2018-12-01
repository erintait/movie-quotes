import React, {Component} from 'react';
import {connect} from 'react-redux';
import {getMovieQuote} from '../actions';

class Quotes extends Component {
    componentDidMount(){
        this.props.getMovieQuote();
    }

    render(){

        return (
            <div className="center">
                <h1>Movie Quotes</h1>
                <h5>{this.props.quote}</h5>
            </div>
        );
    }
}

function mapStateToProps(state){
    return {
        quote: state.quotes.movie
    }
}

export default connect(mapStateToProps, {
    getMovieQuote: getMovieQuote
})(Quotes);
