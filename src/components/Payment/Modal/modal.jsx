// import './style.css';
import style from './modal.module.css';
import Mask from '../Mask/mask';
// import Cards from '../ValidatePayment/cards'
import Validate from '../ValidatePayment/userPayment';
import React, { useState } from 'react';

function Payment({ username, closeBtn }) {
  // Hooks

  /* Irá pegar o valor que for digitado no primeiro campo de valor */
  const [value, setValue] = useState('');

  /* Estado que percorrerá o valor adicionará o valor em um novo array, que será manipulado em uma outra prop.. */
  const [sendValue, setSendValue] = useState([]);

  function addPayment() {

    const newValue = {
      valor: value,
      time: new Date().toLocaleTimeString('pt-BR', {
        hour: '2-digit',
        minute: '2-digit',
      }),
    };

    setSendValue((prevState) => [...prevState, newValue]);
  }
  return (
    <form onSubmit={addPayment}>
    <div className={style.container}>
      <div className={style.modal_container}>
        <div className={style.nav_container}>
          <h1>
            Pagamento para{' '}
            <span className={style.user_fonts}> {username} </span>{' '}
          </h1>

          <button type='button' id={style.close_tab} onClick={closeBtn}>
            x
          </button>
        </div>

        <input
          type="text"
          placeholder="R$: 0,00"
          onChange={(e) => setValue(e.target.value)}
          onKeyUp={Mask}
          maxLength={30}
          required
        />

        <select name="card" id="card" defaultValue={'info_card'}>
          <option value="info_card" disabled>Informe o seu cartão:</option>
          <option value="card1">Cartão com final 0123</option>
          <option value="card2">Cartão com final 0124</option>
        </select>

        <input
          className={style.payment_btn}
          type="submit"
          onClick={addPayment}
          value={'Pagamento'}
        />
      

        {sendValue.map((item) => (
          <Validate valor={item.valor} time={item.time} />
        ))}
      </div>
    </div>
    </form>
  );
}

export default Payment;
