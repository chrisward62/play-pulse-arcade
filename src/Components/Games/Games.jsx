import React from 'react';
import { Link } from 'react-router-dom';
import TopNavigation from '../TopNavigation/TopNavigation'; // Updated path
import './Games.css';

const Games = () => {
    console.log("games is mounting");
    return (
        <div className="games-container">
            <TopNavigation /> {/* Updated component name */}
            <h1>Games Page</h1>
            {/* The rest of your dashboard content will go here */}
            <Link to="/snake-game">
            <img src="/snakeHTML/snake.png" width="500px" height="500px" alt="Play Snake Game" />
            </Link>
        </div>
    );
}

export default Games;