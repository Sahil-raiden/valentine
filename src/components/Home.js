import React, { useState } from 'react';
import img1 from '../assets/vv.gif';
import { useNavigate } from 'react-router-dom';

function Home() {
    const navigate = useNavigate();
    const [buttonStyle, setButtonStyle] = useState({});
    const [isMouseOverButton, setIsMouseOverButton] = useState(false);

    const handleMouseMove = (event) => {
        if (isMouseOverButton) {
            const viewportWidth = window.innerWidth;
            const viewportHeight = window.innerHeight;

            // Generate random coordinates within the viewport
            const newX = Math.random() * viewportWidth;
            const newY = Math.random() * viewportHeight;

            setButtonStyle({
                position: 'absolute',
                left: `${newX}px`,
                top: `${newY}px`,
            });
        }
    };

    const handleMouseEnter = () => {
        setIsMouseOverButton(true);
    };

    const handleMouseLeave = () => {
        setIsMouseOverButton(false);
    };

    const handleYesClick = () => {
        // Navigate to the Yes component
        navigate('/valentine/yes');
    };

    return (
        <div className="home-container" style={{ marginTop: '20px' }} onMouseMove={handleMouseMove}>
            <div className='home-banner-container'>
                <div className='home-text-container'>
                    <img
                        src={img1}
                        className="img-fluid text-center rounded mx-auto d-block"
                        width={150}
                        height={150}
                        alt="Banner"
                    />
                    <h1 className='text-center text-danger'>
                        Will you be my valentine?
                    </h1>
                    <br />
                    <div className='text-center'>
                        <div onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                            <button className='btn btn-light btn-lg' style={buttonStyle}>
                                NO
                            </button>
                        </div>
                        <button className='btn btn-dark btn-lg' onClick={handleYesClick}>
                            YES
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;
