import React from 'react';
import './CartaoF1.css';
import CartaoItem from './CartaoItem';

function CartaoF2() {
  return (
    <div className='cards'>
      <h1>Construtores - Formula 3</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CartaoItem
              src='imagens/f3/mp.png'
              text='MP Motorsport'
              label='Team'
              path='/formula2/MP'
            />
            <CartaoItem
              src='imagens/f3/carlin.png'
              text='Rodin Carlin'
              label='Team'
              path='/formula2/Carlin'
            />
          </ul>
          <ul className='cards__items'>
            <CartaoItem
              src='imagens/f3/art.webp'
              text='ART Grand Prix'
              label='Team'
              path='/formula2/ART'
            />
            <CartaoItem
              src='imagens/f3/prema.png'
              text='PREMA Racing'
              label='Team'
              path='/formula2/PREMA'
            />
          </ul>
          <ul className='cards__items'>
            <CartaoItem
              src='imagens/f3/hitech.png'
              text='Hitech Pulse-Eight'
              label='Team'
              path='/formula2/Hitech'
            />
            <CartaoItem
              src='imagens/f2/dams.png'
              text='DAMS'
              label='Team'
              path='/formula2/DAMS'
            />
          </ul>
          <ul className='cards__items'>
            <CartaoItem
              src='imagens/f2/virtuosi.png'
              text='Invicta Virtuosi Racing'
              label='Team'
              path='/formula2/Virtuosi'
            />
            <CartaoItem
              src='imagens/f3/phm.png'
              text='PHM Racing by Charouz'
              label='Team'
              path='/formula2/PHM'
            />
          </ul>
          <ul className='cards__items'>
            <CartaoItem
              src='imagens/f3/trident.png'
              text='Trident'
              label='Team'
              path='/formula2/Trident'
            />
            <CartaoItem
              src='imagens/f3/var.png'
              text='Van Amersfoort Racing'
              label='Team'
              path='/formula2/VanAmersfoort'
            />
            <CartaoItem
              src='imagens/f3/campos.png'
              text='Campos Racing'
              label='Team'
              path='/formula2/Campos'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default CartaoF2;