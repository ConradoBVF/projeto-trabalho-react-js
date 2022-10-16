const NotFound = () => {
    return (
        <div style={{
            display: 'flex', 
            flexDirection: 'column', 
            alignItems:'center',
            backgroundColor: 'lightgray',
            height: '100vh'}}>
            <h1>Página não encontrada! Clique na imagem para retornar ao site</h1>
            <a href="/">
                <img src="https://i.pinimg.com/736x/11/81/07/118107c3d36f9e5fd9481fce48dd56df.jpg" style={{ width: "60vw" }} alt="Erro" />
            </a>
        </div>
    )
}

export default NotFound;