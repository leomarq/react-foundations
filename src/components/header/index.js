import React from 'react';
import {AreaHeader} from './styled';
import {Link} from 'react-router-dom';

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
                        <li><Link to='/sobre'>Sobre v2</Link></li>
                        <li><Link to='/'>Index v2</Link></li>
                    </ul>
                </nav>

            </div>
        </AreaHeader>
    </div>
    )
};

export default Header;