import Payment from '../Payment/home';
import style from './list.module.css';
import { useState, useEffect } from 'react';

function List() {
  // Referente ao primeiro evento, que irá carregar a lista de usuários..
  // Será carregado automaticamente, quando a página carregar..
  // Estado inicia vazio, depois recebe os dados (data)
  const [user, setUser] = useState([]);
  useEffect(() => {
    fetch('https://www.mocky.io/v2/5d531c4f2e0000620081ddce')
      .then((response) => response.json())
      .then((data) => setUser(data))
      .catch((Error) => console.log(Error));
  }, []);

  // State que fará o modal abrir..
  const [modalVisible, setModalVisible] = useState(false);

  // console.log(!!setModalVisible)
  function modalStatus(peoples) {
    // console.log(!!setModalVisible)

    // Abre o modal
   
    
    // const newState = [peoples];
    // setUser(newState);
    // setModalVisible(true);



    if (!modalVisible){
      const newState = [peoples];
      setUser(newState);
      console.log(newState)
      setModalVisible(true);

    } else {

      setUser(user)
      console.log(setUser(user))

    }
    
    
    // se o modalVisible for falso irá pegar um usuario
    

    // limpa a lista
  }

  // if (setModalVisible === true) {
  //     const newStatus = [peoples];
  //   setUser(newStatus);

  // } else {
  //   setModalVisible(true);

  // }
  // }
  //   // setUser((prevState) => [...prevState, newStatus]);
  // }

  // const fecharModal = () =>{
  //   setModalVisible(false)
  //   setUser(data)
  // }

  // setUser (newStatus)

  // const newStatus = user.filter((peoples) => peoples.id !== id );
  // console.log(newStatus)
  // console.log(newStatus)
  // setUser (newStatus)
  // setModalVisible(newStatus)

  //  function modalStatus() {

  //   // const newStatus = user.splice(user, user);
  //   const newStatus = user.pop(user)
  //   console.log(newStatus)

  //   setUser (newStatus)
  //   setModalVisible(true)

  // }

  // Função de remover item.
  // function modalStatus() {
  //   // setUser([])
  //   // console.log(setUser)

  //   const newStatus = user.filter((peoples) => peoples.id );
  //   const teste = [newStatus]
  //   setUser(teste)
  //   console.log(teste)
  //   // console.log(newStatus)
  //   // setUser (newStatus)
  //   // setModalVisible(true)

  // }

  //   if (modalVisible === true) {

  //     console.log('teste..')

  //     // setUser(newUser)

  //   }

  // }

  // function modalAtive(){

  //   const userEmpty = user.splice(0, user.length)
  //   console.log(userEmpty)

  //   setUser(user)
  //   console.log(user)

  // }

  /* Lista Container Grid */
  return (
    <>
      {user.map((peoples) => (
        <div key={peoples.id} className={style.grid_container}>
          <div className={` ${style.image_item} ${style.grid_item}`}>
            <img
              key={peoples.img}
              id={style.peoples_image}
              src={peoples.img}
              alt="peoples"
            />
          </div>
          <div className={style.grid_item}>
            <p>
              {' '}
              {`Nome do Usuário: `}
              <span> {peoples.name} </span>
            </p>
            <div className={style.flex_container}>
              <p className={style.paragraph}>
                <span> {` ID: #${peoples.id} `} - </span>
                {` Username: `}

                <span className={style.user_fonts}>{peoples.username}</span>
              </p>
            </div>
          </div>

          <div className={` ${style.btn_item} ${style.grid_item}`}>
            <button id={style.btn} onClick={() => modalStatus(peoples)}>
              {/* <button id={style.btn} onClick={()=> setModalVisible(true)} > */}
              {/* <button id={style.btn} onClick={() => modalStatus(peoples.id)}> */}
              {/* <button id={style.btn} onClick={() => setUser(data) }> */}
              {/* onClick={() => setModalVisible(true)} */}
              {/* onClick={()=> getName(peoples.name) */}
              Pagar
            </button>
            {modalVisible ? (
              <Payment
                name={peoples.name}

                close={()=> setModalVisible(false) ?   console.log('teste') : console.log()  }
                // close={()=> setModalVisible(false) `${setUser(user)}`}


                // close={()=> fecharModal(setModalVisible(false))}
                // fechar={() => setModalVisible(false)}
              />
            ) : null}
          {/* {modalVisible ? <> <Payment name={peoples.name}/> </>  : null} */}
          </div>
          {/* {modalVisible ? <> <Payment name={() => peopleDate(peoples.name)}/> </>  : null} */}

          {/* <Payment  name={peoples.name} /> */}
        </div>
      ))}
    </>
  );
}
export default List;
