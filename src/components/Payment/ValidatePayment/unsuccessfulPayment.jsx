function Rejectd() {

  // Melhorias (opcionais)
  // Botão para o usuario alterar os dados, quando o pagamento for mal-sucedido, caso o mesmo queira realizar o pagamento "Alterar os dados, o mesmo poderá retornar o local do erro, para o usuario poder corrigir.."

  // Botão de cancelar para fechar o menu caso o usuario nao queira continuar a transacao quando a mesma der errada..

  return (
    <>
      <p style={{ color: '#000', fontWeight: '500', fontSize:'1.2em', margin:'40px 0 40px 0', whiteSpace:'nowrap'  }}>
        Não foi possivel continuar {' '}
        <span  style={{ color: '#f00', fontWeight: '600' }}> pagamento mal-sucedido</span>
      </p>
      <br />
    </>
  );
}

export default Rejectd;
