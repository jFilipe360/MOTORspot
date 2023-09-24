import React from 'react';
import '../../CartaoF1.css';
import CartaoPiloto from '../../CartaoPiloto';

function CartaoFerrari() {
  return (
    <div className='cards' >
      <h1>Scuderia Ferrari</h1>
      <table>
        <tr>
          <td className='bold'>
          Base
          </td>
          <td>
          Maranello, Itália
          </td>
        </tr>
        <tr>
          <td className='bold'>
          Chefe de Equipa
          </td>
          <td>
          Frédéric Vasseur  
          </td>
        </tr>
        <tr>
          <td className='bold'>
          Chefe Técnico
          </td>
          <td>
          Enrico Cardile / Enrico Gualtieri
          </td>
        </tr>
        <tr>
          <td className='bold'>
          Chassis  
          </td>
          <td>
          SF-23 
          </td>
        </tr>
        <tr>
          <td className='bold'>
          Motor  
          </td>
          <td>
          Ferrari 
          </td>
        </tr>
        <tr>
          <td  className='bold'>
          Primeira Participação 
          </td>
          <td>
          1950
          </td>
        </tr>
        <tr>
          <td className='bold'>
            Campeonatos
          </td>
          <td>
          16
          </td>
        </tr>
        <tr>
          <td className='bold'>
            Posição Final Mais Alta
          </td>
          <td>
          1ª (x243)
          </td>
        </tr>
        <tr>
          <td className='bold'>
          Pole Positions  
          </td>
          <td>
          246   
          </td>
        </tr>
        <tr>
          <td className='bold'>
          Voltas Mais Rápidas  
          </td>
          <td>
          259   
          </td>
        </tr>
      </table>
      <h1>Pilotos</h1>
      <div className='cards__container__piloto'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CartaoPiloto
              src='../imagens/ferrari/leclerc.avif'
              text='Charles Leclerc'
              label='16'
              path='/formula1/Ferrari/Leclerc'
            />
            <CartaoPiloto
              src='../imagens/ferrari/sainz.avif'
              text='Carlos Sainz'
              label='55'
              path='/formula1/Ferrari/Sainz'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default CartaoFerrari;