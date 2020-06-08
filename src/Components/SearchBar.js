import React from 'react'
import {Search } from 'react-feather'
import { connect } from 'react-redux';
import { MOVIE_DATA_FETCHED, NOT_FOUND } from '../Store/Type';

class SearchBar extends React.Component {

    state = {
        t:""
    };
    render() {
        return(
        <div className="search-container w3-col l5 m10 s11 w3-display-topmiddle">
        <input className="search-input border-none" 
        type="search"
        value={this.state.t}
        onChange={event => this.setState({ t: event.target.value })}
        placeholder="Search about your favorite movies...." />
        <button className="btn-style border-none" onClick={() => this.props.fetchData(this.state.t)}>
            <Search color="#fff" size={20}  />
        </button>
    </div>
    )
    }
}

const fetchData = (t) => async dispatch => {
    await fetch(`http://www.omdbapi.com/?t=${t}&plot=full&apikey=b8bc058d`)
                    .then(res => res.json())
                    .then(res => {
                        console.log(res)
                        if(res.Error) {
                            return dispatch({
                                type: NOT_FOUND
                            });
                        }
                        dispatch({
                            type:MOVIE_DATA_FETCHED,
                            payload:res
                        })
                    });
}

export default connect(null, { fetchData })(SearchBar);