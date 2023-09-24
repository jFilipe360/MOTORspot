import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import './BarraNav.css';

function BarraNav() {

    const[click, setClick] = useState(false);

    const handleClick = () => setClick(!click);
    const closeMenu = () => setClick(false);

    return (
    <>
        <nav className='barranav'>
            <div className='barranav-container'>
                <Link to='/' className='barranav-logo' onClick={closeMenu}>
                    MOTORspot <i class="fa-solid fa-gauge-high"/>
                </Link>
                <div className='menu-icon' onClick={handleClick}>
                    <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
                </div>
                <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                    <li className='nav-item'>
                        <Link to='/formula1' className='nav-links' onClick={closeMenu}>
                            Formula 1
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link to='/formula2' className='nav-links' onClick={closeMenu}>
                            Formula 2
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link to='/formula3' className='nav-links' onClick={closeMenu}>
                            Formula 3
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>
    </>
  )
}

export default BarraNav