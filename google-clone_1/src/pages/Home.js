import React from 'react'; 
import { Link } from 'react-router-dom';
import './Home.css';

function Home () {
console.log('Amay')
    return (
        <div className='home'>
            <h2> Home Page of the Anonymous google-clone </h2>

            <div className='home_header'>
                <div className='home_headerLeft'>
                    {/* Link */}
                    <Link to='/about'>About</Link>
                    {/* Link */}
                    <Link to='/store'>Store</Link>
                </div>
                <div className='home_headerRight'>
                    {/* Link */}
                    <Link to='/gmail'>Gmail</Link>
                    {/* Link*/}
                    <Link to='/images'>Images</Link>
                    {/* Icon */}
                    {/* Avatar */}
                </div>
            </div>
            <div className='home_body'>

            </div>
        </div>
    )

}

export default Home;