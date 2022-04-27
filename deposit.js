function Deposit() {
    const ctx = React.useContext(UserContext);
    const [status, setStatus] = React.useState('');
    const [balance, setBalance] = React.useState(ctx.users[0].balance);
    const [deposit, setDeposit] = React.useState('');

    function validate() {
        if(deposit < 0) {
            setStatus('Error: Deposit must be a positive value.');
            setTimeout(() => setStatus(''),4000);
            return false;
        } else if (isNaN(deposit)) {
            setStatus('Error: Deposit must be a number.');
            setTimeout(() => setStatus(''),4000);
            return false;
        }
        setStatus('You have successfully made a deposit!');
        setTimeout(() => setStatus(''),4000);
        return true;
    }

    function handleDeposit() {
        if(!validate(Number(deposit), balance)) return;
        setBalance(balance + Number(deposit));
        ctx.users[0].balance = balance + Number(deposit);
    }

    return (
        <Card
          bgcolor="light"
          txtcolor="black"
          header="Deposit"
          status={status}
          body={
              <>
              <span>Account balance: ${balance}</span>
              <br/>
              <br/>
              <input type="input" className="form-control" id="deposit"
              placeholder="Deposit Amount" value={deposit} onChange={e => setDeposit(e.
              currentTarget.value)}/> <br/>
              <button type="submit" className="btn btn-light" disabled={!deposit} onClick=
              {handleDeposit}>Deposit</button>
              </>
          }
        />
      )
  }

