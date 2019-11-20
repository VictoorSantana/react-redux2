import React, { Component } from 'react';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { updateUser } from '../actions/userActions';

class Initial extends Component {
    state = {  }

    constructor(props) {
        super(props);

        this.onUpdateUser = this.onUpdateUser.bind(this);
    }

    onUpdateUser(event) {
        this.props.onUpdateUser(event.target.value);
    }

    render() { 
        return ( 
            <div>
                <h2>hw</h2>
                <input onChange={this.onUpdateUser}></input>
                { this.props.user }
            </div>
         );
    }
}
 
const mapStateToProps = (state) => {
    return {
        products: state.products,
        user: state.user    
    }
};

const mapActionToProps = (dispatch) => {
    return bindActionCreators ({
        onUpdateUser: updateUser
    }, dispatch);
};

export default connect(mapStateToProps, mapActionToProps)(Initial);