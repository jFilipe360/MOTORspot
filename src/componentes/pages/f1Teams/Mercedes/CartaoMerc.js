import React from 'react';
import '../../CartaoF1.css';
import CartaoPiloto from '../../CartaoPiloto';

function CartaoMercedes() {
  return (
    <div className='cards' >
      <h1>Mercedes-AMG PETRONAS F1 Team</h1>
      <table>
        <tr>
          <td className='bold'>
          Base
          </td>
          <td>
          Brackley, Reino Unido
          </td>
        </tr>
        <tr>
          <td className='bold'>
          Chefe de Equipa
          </td>
          <td>
          Toto Wolff 
          </td>
        </tr>
        <tr>
          <td className='bold'>
          Chefe Técnico
          </td>
          <td>
          James Allison
          </td>
        </tr>
        <tr>
          <td className='bold'>
          Chassis  
          </td>
          <td>
          W14
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
          1970
          </td>
        </tr>
        <tr>
          <td className='bold'>
            Campeonatos
          </td>
          <td>
            8
          </td>
        </tr>
        <tr>
          <td className='bold'>
            Posição Final Mais Alta
          </td>
          <td>
          1ª (x116)
          </td>
        </tr>
        <tr>
          <td className='bold'>
          Pole Positions  
          </td>
          <td>
          129   
          </td>
        </tr>
        <tr>
          <td className='bold'>
          Voltas Mais Rápidas  
          </td>
          <td>
          94   
          </td>
        </tr>
      </table>
      <h1>Pilotos</h1>
      <div className='cards__container__piloto'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CartaoPiloto
              src='../imagens/mercedes/hamilton.avif'
              text='Lewis Hamilton'
              label='44'
              path='/formula1/Mercedes/Hamilton'
            />
            <CartaoPiloto
              src='../imagens/mercedes/russell.avif'
              text='George Russell'
              label='63'
              path='/formula1/Mercedes/Russell'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default CartaoMercedes;