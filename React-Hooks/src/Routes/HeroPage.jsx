import React from 'react';
import Hero from '../Components/Hero';
import Navbar from '../Components/Navbar';
import Memo from '../Hooks/Memo';
import Ref from '../Hooks/Ref';

const HeroPage = () => {
    return (
        <div>
            <Navbar />
            <Hero />
            <Memo />
            <Ref />
        </div>
    )
}

export default HeroPage;