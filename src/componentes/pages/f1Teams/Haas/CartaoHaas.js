import React from 'react';
import '../../CartaoF1.css';
import CartaoPiloto from '../../CartaoPiloto';

function CartaoHaas() {
  return (
    <div className='cards' >
      <h1>MoneyGram Haas F1 Team</h1>
      <table>
        <tr>
          <td className='bold'>
          Base
          </td>
          <td>
          Kannapolis, Estados Unidos
          </td>
        </tr>
        <tr>
          <td className='bold'>
          Chefe de Equipa
          </td>
          <td>
          Guenther Steiner  
          </td>
        </tr>
        <tr>
          <td className='bold'>
          Chefe Técnico
          </td>
          <td>
          Simone Resta
          </td>
        </tr>
        <tr>
          <td className='bold'>
          Chassis  
          </td>
          <td>
          VF-23  
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
          2016
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
          4ª (x1)
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
          2   
          </td>
        </tr>
      </table>
      <h1>Pilotos</h1>
      <div className='cards__container__piloto'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CartaoPiloto
              src='../imagens/haas/magnussen.avif'
              text='Kevin Magnussen'
              label='20'
              path='/formula1/Haas/Magnussen'
            />
            <CartaoPiloto
              src='../imagens/Haas/Hulkenberg.avif'
              text='Nico Hulkenberg'
              label='27'
              path='/formula1/Haas/Hulkenberg'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default CartaoHaas;