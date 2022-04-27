function AllData() {
    const ctx = React.useContext(UserContext);
  
    return ctx.users.map((user) => {
      return (
        <Card
          txtcolor="black"
          bgcolor="white"
          header="Account Info"
          title={`Account owner: ${user.name}`}
          key={user.name}
          body={
            <>
              <ul className="list-group list-group-flush">
                <li className="list-group-item email">Email: {user.email}</li>
                <li className="list-group-item password">
                  Password: {user.password}
                </li>
                <li className="list-group-item">
                  Account balance: ${user.balance}
                </li>
              </ul> 
            </>     
          }
        />
      );
    });
  }