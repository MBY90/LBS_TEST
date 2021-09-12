import React, {useState,useEffect}from 'react'
import { connect } from 'react-redux';
import './Header.css';

export default function Header() {
    const connect=localStorage.getItem("connect")
    const[isConnect,setIsConnect]=useState(connect);
    const ToggleConnect=()=>{
        setIsConnect(!isConnect)
        localStorage.setItem("connect",isConnect)

    }
    return (
        <div className="Header">
            <label > Smala </label>
            <button  onClick={ToggleConnect}> {isConnect? "Se connecter": "Se déconnecter"} </button>
           
        </div>
    )
}
