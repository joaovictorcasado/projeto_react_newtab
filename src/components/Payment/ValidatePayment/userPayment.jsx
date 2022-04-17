import style from './payment.module.css';

function Validate({valor,time}) {
  return (
    <div className={style.card}>
      <strong>{valor}</strong>
      <small>{time}</small>
    </div>
  );
}

export default Validate;

// Ou aproveitar essa parte para fazer a validação do pagamento..
