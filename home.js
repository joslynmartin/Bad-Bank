function Home() {
    return (
        <Card 
            bgcolor="white"
            txtcolor="black"
            header="BadBank Landing Page"
            title="Welcome to the bank!"
            text="Use the navigation bar above to complete your banking actions."
            body={(<img src="bank.png" className="img-fluid"
            alt="Responsive image"/>)}
        />
    );
}