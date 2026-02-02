const infoUsuario = async (id) => {
    const response = await fetch(`http://localhost:3000/users/${id}`);
    const data = await response.json();
    console.log("Información del usuario:", data);
}
infoUsuario(0);