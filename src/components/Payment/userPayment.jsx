import style from './payment.module.css'




export function Paymentcomponent (props) {
return (


  <div className={style.card}>

  <strong>{props.name}</strong>
  <small>{props.time}</small>
  </div>

)

}

export default Paymentcomponent

// Colocar em um componente só, pois não há necessidade de estar dividida..

// Ou aproveitar essa parte para fazer a validação do pagamento..