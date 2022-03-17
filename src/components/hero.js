import React from "react";
import styles from './hero.module.css';

export default function Hero() {
  return <div className={styles.hero}>
    <div className={styles.herocontainer}></div>
    <h1 children="hero" style={{position: 'absolute', textAlign: 'center', top: 200, width: '100%', color: 'white'}}></h1>
  </div>
}