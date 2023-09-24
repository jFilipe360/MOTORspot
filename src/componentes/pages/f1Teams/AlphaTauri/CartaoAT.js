import React from 'react';
import '../../CartaoF1.css';
import CartaoPiloto from '../../CartaoPiloto';

function CartaoAT() {
  return (
    <div className='cards' >
      <h1>Scuderia AlphaTauri</h1>
      <table>
        <tr>
          <td className='bold'>
          Base
          </td>
          <td>
          Faenza, Itália
          </td>
        </tr>
        <tr>
          <td className='bold'>
          Chefe de Equipa
          </td>
          <td>
          Franz Tost  
          </td>
        </tr>
        <tr>
          <td className='bold'>
          Chefe Técnico
          </td>
          <td>
          Jody Egginton
          </td>
        </tr>
        <tr>
          <td className='bold'>
          Chassis  
          </td>
          <td>
          AT04 
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
          1985
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
          1ª (x2)
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
              src='../imagens/alphatauri/tsunoda.avif'
              text='Yuki Tsunoda'
              label='22'
              path='/formula1/AlphaTauri/Tsunoda'
            />
            <CartaoPiloto
              src='../imagens/alphatauri/ricciardo.avif'
              text='Daniel Ricciardo'
              label='3'
              path='/formula1/AlphaTauri/Ricciardo'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default CartaoAT;