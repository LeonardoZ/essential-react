import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { doLogin } from '../../common/actions/login';
import { browserHistory } from 'react-router';
import styles from "./style.css";

class SignIn extends React.Component {

    constructor(props) {
        super(props);

        this.state = { email: '', password: ''};
    }

    logged() {
        browserHistory.push("/logged");
    }

    onFormSubmit(event) {
        event.preventDefault();
        this.props.doLogin(
                 this.state.email = "email@email.com",
                 this.state.password = "123456");
    }

 
    render() {
        if (this.props.user.logged) {
           this.logged();
        }
        return (
           <div className={styles.content}>
            <h1 className={styles.heading}>Sign In</h1>
        
            <form onSubmit={(evt) => this.onFormSubmit(evt)}>
                <button type="submit" className={styles.button}>Login</button>
            </form>
        </div>  
        )
    }
}

function mapDispatchToProps(dispatch) {
    return {
        doLogin: (email, password) => dispatch(doLogin(email, password))
    }
}

function mapStateToProps(state) {
    return {
        user: state.user
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignIn);