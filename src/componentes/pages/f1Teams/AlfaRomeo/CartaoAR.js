import React from 'react';
import '../../CartaoF1.css';
import CartaoPiloto from '../../CartaoPiloto';

function CartaoAR() {
  return (
    <div className='cards' >
      <h1>Alfa Romeo F1 Team Stake</h1>
      <table>
        <tr>
          <td className='bold'>
          Base
          </td>
          <td>
          Hinwil, Suíça
          </td>
        </tr>
        <tr>
          <td className='bold'>
          Chefe de Equipa
          </td>
          <td>
          Alessandro Alunni Bravi 
          </td>
        </tr>
        <tr>
          <td className='bold'>
          Chefe Técnico
          </td>
          <td>
          James Key
          </td>
        </tr>
        <tr>
          <td className='bold'>
          Chassis  
          </td>
          <td>
          C43  
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
          1993
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
          7  
          </td>
        </tr>
      </table>
      <h1>Pilotos</h1>
      <div className='cards__container__piloto'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CartaoPiloto
              src='../imagens/alfaromeo/bottas.avif'
              text='Valtteri Bottas'
              label='77'
              path='/formula1/AlfaRomeo/Bottas'
            />
            <CartaoPiloto
              src='../imagens/alfaromeo/zhou.avif'
              text='Zhou Guanyu'
              label='24'
              path='/formula1/AlfaRomeo/Zhou'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default CartaoAR;