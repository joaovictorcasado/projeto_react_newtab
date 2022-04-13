import './style.css';

// import { Payment } from './userPayment';
import Paymentcomponent from './userPayment'
import React, { useState } from 'react';
// import UserDate from '../List/userDate';
// Sobre o use state é o que fará com que o nosso evento atualize em tempo real no navegador..
// Para utilizarmos, basta importarmos ele no início do documento da seguinte forma:
// {useState}
// após isso, devemos utiliza-lo dentro do nosso componente..

// iremos utilizar uma desestruturação para utiliza-lo..

// o useState recebe por padrão dois parâmetros..

// o primeiro parâmetro refere-se ao estado e o local onde estará armazenado
// em seguida virá a função que irá atualizar esse estado..

// após declarado o useState iremos chamar o set no evento que queremos que se atualize
// em tempo real..
// uma observação em relação aos eventos, eles devem ser passados obrigadotiramente com arrow function..
// Voltando, iremos chamar utilizar o set no nosso evento..
// Ai estará funcionando normalmente o nosso state..
// Podemos também passarmos um valor inicial no state..

// ao lidarmos com state também devemos levar em consideração o principio da imutabilidade, pois os states react adotam esse principio..

// Esse principio refere-se que o conteudo ele não deve ser alterado, mas sim substituido, nisso iremos substituir um valor inteiro por um novo valor..

const Payment = ({name,close}) => { 
  const [studentName, setStudentName] = useState('');
  const [students, setStudents] = useState([]);
  
  function handleAddStudent() {
    const newStudent = {
      name: studentName,
      time: new Date().toLocaleTimeString('pt-BR', {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
      }),
    };
    
    
    
    setStudents((prevState) => [...prevState, newStudent]);
    
    
    
  }
  return (
    
    <div className="container">
      <div className="nav_container">
        <h1>Pagamento para <span className='user_fonts'> {name} </span> </h1>
        <button id="close_tab" onClick={close} >x</button>
      </div>
      <input
        type="text"
        placeholder="R$: 0,00"
        onChange={(e) => setStudentName(e.target.value)}
      />

      <select name="card" id="card"><option style={{backgroundColor: '#fff', color: 'black'}} value="cartao">Cartão com final 0123</option></select>
      <button className="payment_btn" type="button" onClick={handleAddStudent}>
        Pagamento
      </button>


      {students.map((student) => (
        <Paymentcomponent name={student.name} time={student.time} />
      ))}
    </div>
  );
};

export default Payment;
