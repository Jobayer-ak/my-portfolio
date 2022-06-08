import React, { useEffect, useRef } from 'react';
import Navbar from '../Shared/Navbar';
import Typed from 'typed.js';
import "./Home.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowDownLong } from '@fortawesome/free-solid-svg-icons';

const Home = () => {
    const el = useRef(null);

    useEffect(()=>{
        const typed = new Typed(el.current, {
            strings: ["Front End Developer"],
            startDelay: 300,
            typeSpeed: 150,
            backDelay: 150,
            backSpeed:150, 
            smartBackspace: true,
            showCursor: true, 
            loop:true,
        });

        // Destroy
        return ()=>{
            typed.destroy();
        }
    },[]);
    return (
        <div className="bg-wrap">
            <Navbar></Navbar>
            <div className='text-center flex flex-col justify-center items-center animate-box'>
                <p className='text-primary text-xl font-bold tracking-widest uppercase'>Hey! I am</p>
                <h1 className='font-bold text-6xl'>Md. Jobayer Akanda</h1>
                <h2 className='mt-3 text-3xl font-bold'>I'm a  
                    <span className='text-primary text-4xl ml-1' ref={el}> </span>
                </h2>
            </div>
            <div className='mouse'>
                <a href='#' className='mouse-icon'>
                    <div className='mouse-wheel'>
                        <FontAwesomeIcon icon={faArrowDownLong} />
                    </div>
                </a>
            </div>
        </div>
    );
};

export default Home;