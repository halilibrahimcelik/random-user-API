import React from 'react';
import Card from '../Card/Card';
import styles from "./wrapper.module.scss"

const Wrapper = (props ) => {

  return (
    <>
    <section className="container">
        <main className={`${styles.wrapper}`}>
            <Card {...props}  />
        </main>
    </section>

    </>
    
  )
}

export default Wrapper