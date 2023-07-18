
import React, { useState } from 'react'
import styles from "./page.module.css"
import Link from 'next/link'
import google from '../../../../../public/google.png'
import Image from 'next/image'
import { useRouter } from 'next/router'

const page = () => {

    const [error, setError]=useState(false);
    const router=useRouter();
    const handleSubmit=async()=>{
        // get input from user
        const name=e.target[0].value;
        const email=e.target[1].value;
        const password=e.target[2].value;

        // sending our data above to our end point using try catch
        try {
            
            const res=await fetch("api/auth/register", 
            {method:"POST", headers:{"Content-Type":"application/json"}, body:JSON.stringify({name, email, password})});   
            if(!res.ok) {
                setError(true)
        return;
            }
// if user is created, we want to redirect to dashboard
            res.status=201 && router.push("/dashboard/login?success=Account has been created"); 
        } catch (err) {
            console.log("error occurred");
        }
    }
    return (
        <div className={styles.container}>
            
                <h1 className='title'>Welcome to our platform, you can now register</h1>
            
            <form action="" className={styles.form} onSubmit={handleSubmit}>
                <input type="text" required placeholder='username' />
                <input type="email" required placeholder='password' />
                <input type="password" required placeholder='password' />

                <button className={styles.btn}>Register</button>
            </form>
            <p className={styles.error}>{error && "Something went wrong"}</p>
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
