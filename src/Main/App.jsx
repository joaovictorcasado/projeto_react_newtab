import './css/reset.css';
import './css/global.css';


import List from '../components/List/userList';

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
