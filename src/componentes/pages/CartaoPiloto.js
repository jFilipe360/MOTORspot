import React from 'react';
import { Link } from 'react-router-dom';

function CartaoPiloto(props) {
  return (
    <>
      <li className='cards__item__piloto'>
        <Link className='cards__item__link__piloto' to={props.path}>
          <figure className='cards__item__pic__piloto-wrap' data-category={props.label}>
            <img
              className='cards__item__img__piloto'
              alt='Formula Pic'
              src={props.src}
            />
          </figure>
          <div className='cards__item__info'>
            <h5 className='cards__item__text'>{props.text}</h5>
          </div>
        </Link>
      </li>
    </>
  );
}

export default CartaoPiloto;