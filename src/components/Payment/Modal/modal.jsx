import style from './modal.module.css';
import Mask from '../Mask/mask';
import { cards } from '../Cards/card';
import React, { useState } from 'react';
import Aproved from '../ValidatePayment/successfulPayment';
import Rejectd from '../ValidatePayment/unsuccessfulPayment';

function Payment({ username, closeBtn }) {
  // Hooks

  // Irá ocultar os inputs de select valor e pagamento quando o usuario clicar em pagar
  const [hiddenModal, setHiddeModal] = useState(true);
  // Irá  fazer com que retorne e atualize o modal caso seja aprovado ou recusado..
  const [successful, setSuccessful] = useState(false);
  const [unsuccessful, setUnsucessful] = useState(false);

  const addPayment = async (e) => {
    e.preventDefault();
    setHiddeModal(false);
    const formData = new FormData(e.target);
    const value = formData.get('amountPaid');
    const card = formData.get('selectCard');
    const selectionCard = cards.find(
      (objectCard) => objectCard.card_number === card,
    );

    (
      await fetch(
        'https://run.mocky.io/v3/533cd5d7-63d3-4488-bf8d-4bb8c751c989',
        {
          method: 'POST',
          body: {
            card_number: card,
            cvv: selectionCard,
            expiry_date: selectionCard.expiry_date,
            destination_user_id: username.id,
            value: value,
          },
        },
      )
    ).json();

    card === '1111111111111111' ? setSuccessful(true) : setUnsucessful(true);
  };

  return (
    <>
      <form onSubmit={addPayment}>
        <div className={style.container}>
          <div className={style.modal_container}>
            <div className={style.nav_container}>
              <h1>
                Pagamento para:
                <span className={style.user_fonts}> {username} </span>{' '}
              </h1>

              <button type="button" id={style.close_tab} onClick={closeBtn}>
                x
              </button>
            </div>

            {hiddenModal ? (
              <>
                <input
                  type="text"
                  placeholder="R$: 0,00"
                  onKeyUp={Mask}
                  maxLength={30}
                  required
                />
                <select name="selectCard" defaultValue={'info_card'}>
                  <option disabled>Informe o seu cartão:</option>,
                  {/* Ira retornar os cartoes listados do fetch em um novo array */}
                  {cards.map((card) => {
                    return (
                      <option key={card.card_number} value={card.card_number}>
                        Cartão com final {card.card_number.substring(12)}
                      </option>
                    );
                  })}
                </select>

                <input
                  className={style.payment_btn}
                  type="submit"
                  value={'Pagamento'}
                />
              </>
            ) : null}

            {successful && <Aproved username={username} />}
            {unsuccessful && <Rejectd />}
          </div>
        </div>
      </form>
    </>
  );
}

export default Payment;
