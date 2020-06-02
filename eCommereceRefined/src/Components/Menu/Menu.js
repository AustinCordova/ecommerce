import React from 'react';

class Menu extends React.Component {
    render() {
        return (
            <>
            <nav className="navigation">
                <div className="menuToggle">
                    <input type="checkbox" />
                    <span></span>
                    <span></span>
                    <span></span>
                    <ul className="menu">
                        <a href="#">
                            <li>Home</li>
                        </a>
                        <a href="#">
                            <li>Products</li>
                        </a>
                        <a href="#">
                            <li>Contact</li>
                        </a>
                    </ul>
                </div>
            </nav>
</>
        );
        }}


    export default Menu;