import './reset.css'
import './global.css';
import './layoutBody.css';
import List from './components/List/userList';


export default () => {
  return (
    <>
      <header>
        {/* Aqui ficará o logo da Newtab a foto do usuário e o nome do usuário.. */}

        <nav></nav>
      </header>

      <main>
        {/* Aqui ficará a lista de usuários.. */}
        <section>
          <List />
         
        </section>
      </main>

      <footer>
        {/* Aqui ficará os links para o github e para o linkedin e um copyright.. */}
      </footer>
    </>
  );
};
