import React, { useState } from 'react';
import img1 from '../assets/vv1.gif';

function Home() {
    return (
        <div 
            className="home-container text-center" 
            style={{ marginTop: '20px' }} 
        >
            <img src={img1} className='img-fluid text-center rounded mx-auto d-block' width={700} height={700}></img>
            <br></br>
            <h1 className='fw-bolder text-secondary'>ARIGATOOO!!</h1>
            

    
                
        </div>
    );
}

export default Home;
