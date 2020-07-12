import React from 'react';
import GlobalStyle from './styles/GlobalStyles';
import Carousel from './components/Carousel';
import gsap from 'gsap';

function App() {
    const imgs = [
        'https://i.imgur.com/4MuY3MR.png',
        'https://i.imgur.com/4MuY3MR.png',
        'https://i.imgur.com/4MuY3MR.png',
        'https://diy-magazine.s3.amazonaws.com/d/diy/Artists/T/The-1975/DIY-91/The1975_WorldTour2019_Film_0142_JH.jpg',
    ];
    
    return (
        <>
            <GlobalStyle />
            <Carousel source={imgs} />
        </>
    );
}

export default App;
