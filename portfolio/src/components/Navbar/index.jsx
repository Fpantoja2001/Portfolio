import './index.scss'
import React from 'react';

function Navbar(){
    return(
        <div className='navContainer'>
            <div className='title'>
                Felix Manuel Pantoja
            </div>
            <div className='menu'>
                <ul>
                    <li>
                        Projects
                    </li>
                    <li>
                        About
                    </li>
                    <li>
                        Contact
                    </li>

                </ul>
            </div>
        </div>
    )
}

export default Navbar;