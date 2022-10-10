import { useState } from "react"
import Email from '../../components/email'

import Axios from 'axios'
import Link from "next/link"



export default function register() {
    
    const url = "http://localhost:3000/posts"
    const [data, setData] = useState({
        email: "",
        password: "",
    })
    function handle(event){
        const newData={...data}
        newData[event.target.id] = event.target.value
        setData(newData)
        console.log(newData)
    }

    function submit(event) {

        event.preventDefault();
        Axios.post(url, {
            email: data.email,
            password: data.password
        })
        .then(res=> {
            console.log(submit)
            console.log("it WORKS 👺👺👺👺")
        })
    }

    return (
        <div>
            <Link href="/">
                <a>Home</a>
            </Link>
            <p>Launcher API på mockup server. Ligger i mappen ApiServer</p>
            <form onSubmit={(event)=> submit(event)}>
                <p>Email</p>
                <input 
                    onChange={(event)=>handle(event)} 
                    id='email'
                    value={data.email}
                    placeholder='jonsmith123' 
                    type='text'>
                </input>
            <p>Create Password</p>
                <input 
                    onChange={(event)=>handle(event)} 
                    id='password'
                    value={data.password}
                    placeholder='jonsmith123' 
                    type='text'>
                </input>
                <button>Register</button>
            </form>
            <Email />
        </div>
      )
    }