import React from 'react';
import { browserHistory } from 'react-router';
import styles from './style.css';


export default class LoginPage extends React.Component {
  
  signUp() {
    browserHistory.push('/home');
  }
  
  signIn() {
    browserHistory.push('/signin');
  }

  render() {
    return (
      <div className={styles.content}>
        <h1 className={styles.heading}>Login Page</h1>
        <p className={styles.lead}>Create an account to get started!</p>
        <button className={styles.button} onClick={this.signUp}>Sign up</button>
        <button className={styles.button} onClick={this.signIn}>Sign in</button>
      </div>
    );
  }
}
