import React from 'react';
import './CartaoF1.css';
import CartaoItem from './CartaoItem';

function CartaoF3() {
  return (
    <div className='cards'>
      <h1>Construtores - Formula 3</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CartaoItem
              src='imagens/f3/prema.png'
              text='PREMA Racing'
              label='Team'
              path='/formula3/PREMA'
            />
            <CartaoItem
              src='imagens/f3/trident.png'
              text='Trident'
              label='Team'
              path='/formula3/Trident'
            />
          </ul>
          <ul className='cards__items'>
            <CartaoItem
              src='imagens/f3/art.webp'
              text='ART Grand Prix'
              label='Team'
              path='/formula3/ART'
            />
            <CartaoItem
              src='imagens/f3/mp.png'
              text='MP Motorsport'
              label='Team'
              path='/formula3/MP'
            />
          </ul>
          <ul className='cards__items'>
            <CartaoItem
              src='imagens/f3/hitech.png'
              text='Hitech Pulse-Eight'
              label='Team'
              path='/formula3/Hitech'
            />
            <CartaoItem
              src='imagens/f3/var.png'
              text='Van Amersfoort Racing'
              label='Team'
              path='/formula3/VanAmersfoort'
            />
          </ul>
          <ul className='cards__items'>
            <CartaoItem
              src='imagens/f3/carlin.png'
              text='Rodin Carlin'
              label='Team'
              path='/formula3/Carlin'
            />
            <CartaoItem
              src='imagens/f3/campos.png'
              text='Campos Racing'
              label='Team'
              path='/formula3/Campos'
            />
          </ul>
          <ul className='cards__items'>
            <CartaoItem
              src='imagens/f3/jenzer.png'
              text='Jenzer Motorsport'
              label='Team'
              path='/formula3/Jenzer'
            />
            <CartaoItem
              src='imagens/f3/phm.png'
              text='PHM Racing by Charouz'
              label='Team'
              path='/formula3/PHM'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default CartaoF3;