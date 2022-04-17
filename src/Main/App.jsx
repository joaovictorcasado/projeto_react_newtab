import './css/reset.css';
import './css/global.css';

// Original
// import List from '../components/List/userList';

//Copia
import List from '../components/List/userList copy';

function App() {
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
        </section>
      </main>

      <footer>
        {/* Aqui ficará os links para o github e para o linkedin e um copyright.. */}
      </footer>
    </>
  );
}

export default App;
