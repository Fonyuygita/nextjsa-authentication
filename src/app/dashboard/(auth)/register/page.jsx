import React from 'react'
import styles from "./page.module.css"
import Link from 'next/link'
import google from '../../../../../public/google.png'
import Image from 'next/image'

const page = () => {
    return (
        <div className={styles.container}>
            
                <h1 className='title'>Welcome to our platform, you can now register</h1>
            
            <form action="" className={styles.form}>
                <input type="text" required placeholder='username' />
                <input type="email" required placeholder='password' />
                <input type="password" required placeholder='password' />

                <button className={styles.btn}>Register</button>
            </form>
            <div className={styles.loginOptions}>
                <div className={styles.login}>

                    <span>Already have an account?
                        <Link href="/dashboard/login" className={styles.inLogin}> Login</Link>
                    </span>

                </div>


              
            </div>

        </div>
    )
}

export default page
