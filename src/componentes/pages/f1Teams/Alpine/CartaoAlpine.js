import React from 'react';
import '../../CartaoF1.css';
import CartaoPiloto from '../../CartaoPiloto';

function CartaoAlpine() {
  return (
    <div className='cards' >
      <h1>BWT Alpine F1 Team</h1>
      <table>
        <tr>
          <td className='bold'>
          Base
          </td>
          <td>
          Enstone, Reino Unido
          </td>
        </tr>
        <tr>
          <td className='bold'>
          Chefe de Equipa
          </td>
          <td>
          Bruno Famin 
          </td>
        </tr>
        <tr>
          <td className='bold'>
          Chefe Técnico
          </td>
          <td>
          Matt Harman
          </td>
        </tr>
        <tr>
          <td className='bold'>
          Chassis  
          </td>
          <td>
          A5239  
          </td>
        </tr>
        <tr>
          <td className='bold'>
          Motor  
          </td>
          <td>
          Renault
          </td>
        </tr>
        <tr>
          <td  className='bold'>
          Primeira Participação 
          </td>
          <td>
          1986
          </td>
        </tr>
        <tr>
          <td className='bold'>
            Campeonatos
          </td>
          <td>
          2
          </td>
        </tr>
        <tr>
          <td className='bold'>
            Posição Final Mais Alta
          </td>
          <td>
          1ª (x21)
          </td>
        </tr>
        <tr>
          <td className='bold'>
          Pole Positions  
          </td>
          <td>
          20   
          </td>
        </tr>
        <tr>
          <td className='bold'>
          Voltas Mais Rápidas  
          </td>
          <td>
          15   
          </td>
        </tr>
      </table>
      <h1>Pilotos</h1>
      <div className='cards__container__piloto'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CartaoPiloto
              src='../imagens/alpine/gasly.avif'
              text='Pierre Gasly'
              label='10'
              path='/formula1/Alpine/Gasly'
            />
            <CartaoPiloto
              src='../imagens/alpine/ocon.avif'
              text='Esteban Ocon'
              label='31'
              path='/formula1/Alpine/Ocon'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default CartaoAlpine;