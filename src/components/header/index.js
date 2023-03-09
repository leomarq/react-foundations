import React from 'react';
import {AreaHeader} from './styled';

function Header() {
    return(
    <div>
        <AreaHeader>
            <div className='container'>

                <div className='logo'>
                    <p>LOGO</p>
                </div>

                <nav>
                    <ul>
                        <li><a href='/'>Index</a></li>
                        <li><a href='/sobre'>Sobre</a></li>
                        <li><a href='/cep'>Cep</a></li>
                    </ul>
                </nav>

            </div>
        </AreaHeader>
    </div>
    )
};

export default Header;