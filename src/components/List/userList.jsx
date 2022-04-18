import Payment from '../Payment/Modal/modal';
import style from './list.module.css';
import { useState, useEffect } from 'react';

function List() {
  /* O fetch irá pegar os dados do usuário como: nome, username, id e foto.
  Já o useEffect fará com que a solititação não entre em loop */
  useEffect(() => {
    fetch('https://www.mocky.io/v2/5d531c4f2e0000620081ddce')
      .then((response) => response.json())
      .then((data) => setUser(data))
      .catch((Error) => console.log(Error));
  }, []);

  // Hooks Utilizados na lista:

  // Irá pegar o usuario quando clicar em pagar, atualiza-lo e exporta-lo como uma prop
  const [selectUser, setSelectUser] = useState(null);

  // Inicia o modal, e em seguida atualiza o modal
  const [modalVisible, setModalVisible] = useState(false);

  // É utilizado no método map, para retornar um array com os dados obtidos do fetch
  const [user, setUser] = useState([]);

  // Irá ocultar a lista quando a tela tiver um tamanho especifico
  const [showUser, setShowUser] = useState(true);

  /* Realiza a renderização do modal, listando o username 
  e alterando o state de setModalVisible para true */
  const renderModal = (username) => {
    setSelectUser(username);
    setModalVisible(true);

    const width = window.matchMedia('(max-width: 500px)');

    width.matches  ? setShowUser(false) : setShowUser(true);
  };

  const whenClose = () => {
    setShowUser(true);
    setModalVisible(false);
  };

  /* Lista Container Grid */
  return (
    <>
      {/* Ira retornar os usuarios listados do fetch em um novo array */}
      {showUser ? (
        <>
          {user.map((peoples) => (
            <div key={peoples.id} className={style.grid_container}>
              <div className={` ${style.image_item} ${style.grid_item}`}>
                <img id={style.peoples_image} src={peoples.img} alt="peoples" />
              </div>

              <div className={style.grid_item}>
                <p>
                  {' '}
                  {`Nome do Usuário: `}
                  <span> {peoples.name} </span>
                </p>
                <div className={style.flex_container}>
                  <p className={style.paragraph}>
                    <span> {` ID: #${peoples.id} `} - </span> {` Username: `}
                    <span className={style.user_fonts}>{peoples.username}</span>
                  </p>
                </div>
              </div>

              <div className={` ${style.btn_item} ${style.grid_item}`}>
                <button
                  type="button"
                  id={style.btn}
                  onClick={() => renderModal(peoples.username)}
                >
                  Pagar
                </button>
              </div>
            </div>
          ))}
        </>
      ) : null}

      {modalVisible ? (
        // Componente que será enviado como propriedade
        <Payment username={selectUser} closeBtn={() => whenClose()} />
      ) : null}
    </>
  );
}
export default List;
