import React from 'react';
import { Slide } from 'react-slideshow-image';

const slideImages = [
    'img/jeshoots-com-eCktzGjC-iU-unsplash.jpg',
    'img/',
    'img/',
    'img'
];

const properties = {
    duration: 5000,
    transitionDuration: 500,
    infinite: true,
    indicators: true,
    arrow: true,
    pauseOnHover: true,
    onChange: (oldIndex, newIndex) => {
        console.log(`slide transition from ${oldIndex} to ${newIndex}`);
    }
}
class SlideShow extends React.Component {
    render(){
        return (
            <div className="slide-container">
            <Slide {...properties}>
                <div className="each-slide">
                    <div style={{ 'backgroundImage': `url(${slideImages[0]})` }}>
                        <span>Slide 1</span>
                    </div>
                </div>
                <div className="each-slide">
                    <div style={{ 'backgroundImage': `url(${slideImages[1]})` }}>
                        <span>Slide 2</span>
                    </div>
                </div>
                <div className="each-slide">
                    <div style={{ 'backgroundImage': `url(${slideImages[2]})` }}>
                        <span>Slide 3</span>
                    </div>
                </div>
                <div className="each-slide">
                    <div style={{ 'backgroundImage': `url(${slideImages[3]})` }}>
                        <span>Slide 4</span>
                    </div>
                </div>
            </Slide>
        </div>
        )
    }
}

export default SlideShow;