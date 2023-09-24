import React from 'react';
import '../../CartaoF1.css';
import CartaoPiloto from '../../CartaoPiloto';

function CartaoRB() {
  return (
    <div className='cards' >
      <h1>Oracle Red Bull Racing</h1>
      <table>
        <tr>
          <td className='bold'>
          Base
          </td>
          <td>
          Milton Keynes, Reino Unido
          </td>
        </tr>
        <tr>
          <td className='bold'>
          Chefe de Equipa
          </td>
          <td>
          Christian Horner  
          </td>
        </tr>
        <tr>
          <td className='bold'>
          Chefe Técnico
          </td>
          <td>
          Pierre Waché
          </td>
        </tr>
        <tr>
          <td className='bold'>
          Chassis  
          </td>
          <td>
          RB19  
          </td>
        </tr>
        <tr>
          <td className='bold'>
          Motor  
          </td>
          <td>
          Honda RBPT 
          </td>
        </tr>
        <tr>
          <td  className='bold'>
          Primeira Participação 
          </td>
          <td>
            1997
          </td>
        </tr>
        <tr>
          <td className='bold'>
            Campeonatos
          </td>
          <td>
            5
          </td>
        </tr>
        <tr>
          <td className='bold'>
            Posição Final Mais Alta
          </td>
          <td>
          1ª (x106)
          </td>
        </tr>
        <tr>
          <td className='bold'>
          Pole Positions  
          </td>
          <td>
           93   
          </td>
        </tr>
        <tr>
          <td className='bold'>
          Voltas Mais Rápidas  
          </td>
          <td>
          92   
          </td>
        </tr>
      </table>
      <h1>Pilotos</h1>
      <div className='cards__container__piloto'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CartaoPiloto
              src='../imagens/redbull/verstappen.avif'
              text='Max Verstappen'
              label='1'
              path='/formula1/RedBull/Verstappen'
            />
            <CartaoPiloto
              src='../imagens/redbull/perez.avif'
              text='Sergio Perez'
              label='11'
              path='/formula1/RedBull/Perez'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default CartaoRB;