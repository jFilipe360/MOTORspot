import React from 'react';
import './Footer.css';
import { Button } from './Button';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <div className='footer-container'>
        <section className='footer-subscription'>
            <p className='footer-subscription-heading'>
                Subscreve à MOTORspot Newsletter para receberes as últimas notícias dos teus pilotos preferidos
            </p>
            <p className='footer-subscription-text'>
                Podes tirar a subscrição quando quiseres
            </p>
            <div className='input-areas'>
                <form>
                    <input type='email' name='email' placeholder='O teu email...' className='footer-input'/>
                    <Button buttonStyle='btn--outline'>Subscrever</Button>
                </form>
            </div>
        </section>
        <div className='footer-links'>
                <section class='social-media'>
                    <div class='social-media-wrap'>
                        <div class='footer-logo'>
                            <Link to='/' className='social-logo'>
                            MOTORspot
                            <i class='fa-solid fa-gauge-high' />
                            </Link>
                        </div>
                        <small class='website-rights'>MOTORspot © 2023 - João Correia, 21302</small>
                        <div class='social-icons'>
                            <Link
                            class='social-icon-link facebook'
                            to='/'
                            target='_blank'
                            aria-label='Facebook'
                            >
                            <i class='fab fa-facebook-f' />
                            </Link>
                            <Link
                            class='social-icon-link instagram'
                            to='/'
                            target='_blank'
                            aria-label='Instagram'
                            >
                            <i class='fab fa-instagram' />
                            </Link>
                            <Link
                            class='social-icon-link youtube'
                            to='/'
                            target='_blank'
                            aria-label='Youtube'
                            >
                            <i class='fab fa-youtube' />
                            </Link>
                            <Link
                            class='social-icon-link twitter'
                            to='/'
                            target='_blank'
                            aria-label='Twitter'
                            >
                            <i class='fab fa-twitter' />
                            </Link>
                            <Link
                            class='social-icon-link twitter'
                            to='/'
                            target='_blank'
                            aria-label='LinkedIn'
                            >
                            <i class='fab fa-linkedin' />
                            </Link>
                        </div>
                    </div>
                </section>
        </div>
    </div>
  )
}

export default Footer