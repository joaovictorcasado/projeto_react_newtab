import style from './list.module.css';
import { useState, useEffect } from 'react';

export default () => {
  const [user, setUser] = useState([]);
  
  useEffect(() => {
    fetch('https://www.mocky.io/v2/5d531c4f2e0000620081ddce')
    .then((response) => response.json())
    .then((data) => setUser(data))
    .catch((Error) => console.log(Error));
  }, []);
  
  
  
  return (
    //grid container
    <>
      {user.map((peoples) => (
        <div className={style.grid_container}>
          <div className={` ${style.image_item} ${style.grid_item}`}>
            <img
              id={style.peoples_image}
              key={peoples.img}
              src={peoples.img}
              alt="peoples"
            />
          </div>
          <div className={style.grid_item}>
            <p key={peoples.name}>
              {' '}
              {`Nome do Usuário: `}
              <span>{peoples.name}</span>
            </p>
            <div className={style.flex_container}>
              <p className={style.paragraph}>
                <span key={peoples.username}> {` ID: #${peoples.id} `} - </span>
                {` Username: `}
                <span className={style.user_fonts}>{peoples.username}</span>
              </p>
            </div>
          </div>

          <div className={` ${style.btn_item} ${style.grid_item}`}>
            <button id={style.btn}>Pagar</button>
          </div>
        </div>
      ))}
    </>
  );
};
