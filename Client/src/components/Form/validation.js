const regexMail = /^[\w-.]+@([\w-]+.)+[\w-]{2,3}$/
const regexNum = /\d/;

const validation = (userData) =>{

const errors = {}

if(!userData.email) errors.email = "Ingrese su Email"
else if (!regexMail.test(userData.email)) errors.email = "Email invalido"

else if (!userData.password) errors.password = "Ingrese una contraseña"
else if (!regexNum.test (userData.password)) errors.password = "Contraseña invalida, debe tener al menos un número"

return errors

}

export default validation