import React from "react";
import styles from "./style.css";


export default class HomePage extends React.Component {
  render() {
    return (
      <div className={styles.content}>
        <h1 className={styles.heading}>Logged Page</h1>
        <p className={styles.welcomeText}>Logged as User!</p>
      </div>
    );
  }
}
