import React from 'react';
import '../../CartaoF1.css';
import CartaoPiloto from '../../CartaoPiloto';

function CartaoAM() {
  return (
    <div className='cards' >
      <h1>Aston Martin Aramco Cognizant F1 Team</h1>
      <table>
        <tr>
          <td className='bold'>
          Base
          </td>
          <td>
          Silverstone, Reino Unido
          </td>
        </tr>
        <tr>
          <td className='bold'>
          Chefe de Equipa
          </td>
          <td>
          Mike Krack 
          </td>
        </tr>
        <tr>
          <td className='bold'>
          Chefe Técnico
          </td>
          <td>
          Dan Fallows
          </td>
        </tr>
        <tr>
          <td className='bold'>
          Chassis  
          </td>
          <td>
          AMR23  
          </td>
        </tr>
        <tr>
          <td className='bold'>
          Motor  
          </td>
          <td>
          Mercedes
          </td>
        </tr>
        <tr>
          <td  className='bold'>
          Primeira Participação 
          </td>
          <td>
          2018
          </td>
        </tr>
        <tr>
          <td className='bold'>
            Campeonatos
          </td>
          <td>
            0
          </td>
        </tr>
        <tr>
          <td className='bold'>
            Posição Final Mais Alta
          </td>
          <td>
          1ª (x1)
          </td>
        </tr>
        <tr>
          <td className='bold'>
          Pole Positions  
          </td>
          <td>
          1   
          </td>
        </tr>
        <tr>
          <td className='bold'>
          Voltas Mais Rápidas  
          </td>
          <td>
          1   
          </td>
        </tr>
      </table>
      <h1>Pilotos</h1>
      <div className='cards__container__piloto'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CartaoPiloto
              src='../imagens/astonmartin/alonso.avif'
              text='Fernando Alonso'
              label='14'
              path='/formula1/AstonMartin/Alonso'
            />
            <CartaoPiloto
              src='../imagens/astonmartin/stroll.avif'
              text='Lance Stroll'
              label='18'
              path='/formula1/AstonMartin/Stroll'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default CartaoAM;