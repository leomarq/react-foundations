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
                        <li><Link to='/'>Index</Link></li>
                        <li><Link to='/sobre'>Sobre</Link></li>
                        <li><Link to='/cep'>Cep</Link></li>
                        <li><Link to='/email'>E-mail</Link></li>
                    </ul>
                </nav>

            </div>
        </AreaHeader>
    </div>
    )
};

export default Header;