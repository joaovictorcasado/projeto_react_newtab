function Aproved({ username }) {
  
  // Melhorias (opcionais)
  // username poderá ser utilizado para imprimir o nome do usuario ao mostrar a conclusão do pagamento..

  //  Também poderei adicionar botão para o usuario realizar um novo pagamento, 
  // e mostrar o valor do pagamento feito pelo usuario..

  return (
    <>
      <p style={{ color: '#000', fontWeight: '500', fontSize:'1.2em', margin:'40px 0 40px 0', whiteSpace:'nowrap' }}>
       Pagamento concluido para  {' '}
        <span
          style={{ color: '#222fff', fontWeight: '600', fontStyle: 'italic' }}
        >
         {username}
        </span>
      </p>
      <br />
    </>
  );
}

export default Aproved;
