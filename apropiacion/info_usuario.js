const infoUsuario = async () => {
    const response = await fetch(`http://localhost:3000/users/1`);
    const data = await response.json();
    console.log("Información del usuario:", data);
}
infoUsuario();