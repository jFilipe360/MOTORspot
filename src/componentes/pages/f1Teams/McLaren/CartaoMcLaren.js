import React from 'react';
import '../../CartaoF1.css';
import CartaoPiloto from '../../CartaoPiloto';

function CartaoMCL() {
  return (
    <div className='cards' >
      <h1>McLaren Formula 1 Team</h1>
      <table>
        <tr>
          <td className='bold'>
          Base
          </td>
          <td>
          Woking, Reino Unido
          </td>
        </tr>
        <tr>
          <td className='bold'>
          Chefe de Equipa
          </td>
          <td>
          Andrea Stella 
          </td>
        </tr>
        <tr>
          <td className='bold'>
          Chefe Técnico
          </td>
          <td>
          Peter Prodromou / Neil Houldey
          </td>
        </tr>
        <tr>
          <td className='bold'>
          Chassis  
          </td>
          <td>
          MCL60  
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
          1966
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
          1ª (x183)
          </td>
        </tr>
        <tr>
          <td className='bold'>
          Pole Positions  
          </td>
          <td>
          156   
          </td>
        </tr>
        <tr>
          <td className='bold'>
          Voltas Mais Rápidas  
          </td>
          <td>
          163  
          </td>
        </tr>
      </table>
      <h1>Pilotos</h1>
      <div className='cards__container__piloto'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CartaoPiloto
              src='../imagens/mclaren/norris.avif'
              text='Lando Norris'
              label='4'
              path='/formula1/McLaren/Norris'
            />
            <CartaoPiloto
              src='../imagens/mclaren/piastri.avif'
              text='Oscar Piastri'
              label='81'
              path='/formula1/McLaren/Piastri'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default CartaoMCL;