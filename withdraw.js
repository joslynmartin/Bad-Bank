function Withdraw() {
    const ctx = React.useContext(UserContext);
    const [status, setStatus] = React.useState('');
    const [balance, setBalance] = React.useState(ctx.users[0].balance);
    const [withdraw, setWithdraw] = React.useState('');

    function validate() {
        if(withdraw > balance) {
            setStatus('Error: Insufficient funds in account.');
            setTimeout(() => setStatus(''),4000);
            return false;
        } else if (isNaN(withdraw)) {
            setStatus('Error: Withdraw must be a number.');
            setTimeout(() => setStatus(''),4000);
            return false;
        }
        setStatus('You have successfully made a withdrawal!');
        setTimeout(() => setStatus(''),4000);
        return true;
    }

    function handleWithdraw() {
        if(!validate(Number(withdraw), balance)) return;
        setBalance(balance - Number(withdraw));
        ctx.users[0].balance = balance - Number(withdraw);
    }

    return (
        <Card
          bgcolor="black"
          header="Withdraw"
          status={status}
          body={
              <>
              <span>Account balance: ${balance}</span>
              <br/>
              <br/>
              <input type="input" className="form-control" id="deposit"
              placeholder="Withdrawal Amount" value={withdraw} onChange={e => setWithdraw(e.
              currentTarget.value)}/> <br/>
              <button type="submit" className="btn btn-light" disabled={!withdraw} onClick=
              {handleWithdraw}>Withdraw</button>
              </>
          }
        />
      )
  }
