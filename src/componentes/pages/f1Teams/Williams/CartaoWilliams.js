import React from 'react';
import '../../CartaoF1.css';
import CartaoPiloto from '../../CartaoPiloto';

function CartaoWilliams() {
  return (
    <div className='cards' >
      <h1>Williams Racing</h1>
      <table>
        <tr>
          <td className='bold'>
          Base
          </td>
          <td>
          Grove, Reino Unido
          </td>
        </tr>
        <tr>
          <td className='bold'>
          Chefe de Equipa
          </td>
          <td>
          James Vowles  
          </td>
        </tr>
        <tr>
          <td className='bold'>
          Chefe Técnico
          </td>
          <td>
          -----------
          </td>
        </tr>
        <tr>
          <td className='bold'>
          Chassis  
          </td>
          <td>
          FW45  
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
          1978
          </td>
        </tr>
        <tr>
          <td className='bold'>
            Campeonatos
          </td>
          <td>
          9
          </td>
        </tr>
        <tr>
          <td className='bold'>
            Posição Final Mais Alta
          </td>
          <td>
          1ª (x114)
          </td>
        </tr>
        <tr>
          <td className='bold'>
          Pole Positions  
          </td>
          <td>
          128   
          </td>
        </tr>
        <tr>
          <td className='bold'>
          Voltas Mais Rápidas  
          </td>
          <td>
          133   
          </td>
        </tr>
      </table>
      <h1>Pilotos</h1>
      <div className='cards__container__piloto'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CartaoPiloto
              src='../imagens/williams/albon.avif'
              text='Alexander Albon'
              label='23'
              path='/formula1/Williams/Albon'
            />
            <CartaoPiloto
              src='../imagens/williams/sargeant.avif'
              text='Logan Sargeant'
              label='2'
              path='/formula1/Williams/Sargeant'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default CartaoWilliams;