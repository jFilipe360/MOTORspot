import React from 'react';
import './CartaoF1.css';
import CartaoItem from './CartaoItem';

function CartaoF1() {
  return (
    <div className='cards'>
      <h1>Construtores - Formula 1</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CartaoItem
              src='imagens/redbull/redBull.png'
              text='Oracle Red Bull Racing'
              label='Team'
              path='/formula1/RedBull'
            />
            <CartaoItem
              src='imagens/mercedes/mercedes.avif'
              text='Mercedes-AMG PETRONAS F1 Team'
              label='Team'
              path='/formula1/Mercedes'
            />
          </ul>
          <ul className='cards__items'>
            <CartaoItem
              src='imagens/ferrari/ferrari.avif'
              text='Scuderia Ferrari'
              label='Team'
              path='/formula1/Ferrari'
            />
            <CartaoItem
              src='imagens/astonmartin/astonmartin.avif'
              text='Aston Martin Aramco Cognizant F1 Team'
              label='Team'
              path='/formula1/AstonMartin'
            />
          </ul>
          <ul className='cards__items'>
            <CartaoItem
              src='imagens/mclaren/mclaren.avif'
              text='McLaren Formula 1 Team'
              label='Team'
              path='/formula1/McLaren'
            />
            <CartaoItem
              src='imagens/alpine/alpine.avif'
              text='BWT Alpine F1 Team'
              label='Team'
              path='/formula1/Alpine'
            />
          </ul>
          <ul className='cards__items'>
            <CartaoItem
              src='imagens/williams/williams.avif'
              text='Williams Racing'
              label='Team'
              path='/formula1/Williams'
            />
            <CartaoItem
              src='imagens/haas/haas.avif'
              text='MoneyGram Haas F1 Team'
              label='Team'
              path='/formula1/Haas'
            />
          </ul>
          <ul className='cards__items'>
            <CartaoItem
              src='imagens/alfaromeo/alfaromeo.avif'
              text='Alfa Romeo F1 Team Stake'
              label='Team'
              path='/formula1/AlfaRomeo'
            />
            <CartaoItem
              src='imagens/alphatauri/alphatauri.avif'
              text='Scuderia AlphaTauri'
              label='Team'
              path='/formula1/AlphaTauri'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default CartaoF1;