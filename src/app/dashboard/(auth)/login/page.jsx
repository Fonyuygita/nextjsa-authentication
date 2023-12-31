
"use client"
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import styles from "./page.module.css"
import google from "../../../../../public/google.png"
import { useSession, signIn, signOut } from "next-auth/react"

const Login = () => {
    const session=useSession();
    console.log(session);
    return (
        <div className={styles.container}>

            <h1 className='title'>Welcome to our platform, you can now Login</h1>

            <form action="" className={styles.form}>

                <input type="email" required placeholder='password' />
                <input type="password" required placeholder='password' />

                <button className={styles.btn}>Login</button>
            </form>
            <p className={styles.error}>Something went wring, try again</p>
            <div className={styles.loginOptions}>
                <div className={styles.login}>

                    <span>N account yet?
                        <Link href="/dashboard/register" className={styles.inLogin}>Register</Link>
                    </span>

                </div>


                <div className={styles.parent}>
                    <button className={styles.google} onClick={()=>signIn("google")}>
                        <Image src={google} width={20} height={20} alt='logo' />
                        <span>Login with google</span>
                    </button>
                </div>
            </div>

        </div>
    )
}

export default Login;