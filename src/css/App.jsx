import './reset.css';
import './global.css'
import './layoutBody.css';
// Original
// import List from '../components/List/userList';

//Copia
import List from '../components/List/userList copy';



// import Payment from './components/Payment/home';


function App ()  {
  return (
    <>
      <header>
        {/* Aqui ficará o logo da Newtab a foto do usuário e o nome do usuário.. */}

        <nav></nav>
      </header>

      <main>
        {/* Aqui ficará a lista de usuários.. e a parte do modal */}
        <section>
          <List />
          {/* <Payment /> */}
        </section>
      </main>

      <footer>
        {/* Aqui ficará os links para o github e para o linkedin e um copyright.. */}
      </footer>
    </>
  );
};

export default App