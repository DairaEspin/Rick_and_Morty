import {useState} from 'react'
import validation from './validation'
import style from './Form.module.css'

export default function Form ({ login }){
const [userData, setUserData] = useState({
    email: '',
    password: ''
})

const [errors, setErrors] = useState({})

const handleChange = (event) => {
    let property = event.target.name;
    let value = event.target.value;
    console.log('handleChange - Property:', property, 'Value:', value);
    setUserData({...userData, [property]: value});
    setErrors(validation({...userData, [property]: value}));
}

const handleSubmit = (event) =>{
    event.preventDefault();
    console.log('Form submitted! Data:', userData);
    login(userData);
}

return <div>
    <Form onSubmit={handleSubmit} className={style.container}>
        <label className={style.label}>Email: </label>
        <input type='text' 
        name='email' 
        onChange = {handleChange} 
        value={userData.email}
         />
        {errors.email && (<p className={style.danger}>{errors.email} </p>)}
        <label className={style.label}>Password: </label>
        <input type='password' 
        name='password' 
        onChange = {handleChange} 
        value={userData.password} />
        {errors.password && (<p className={style.danger}>{errors.password} </p>)}
        <button type="submit">Login</button>
    </Form>
</div>

}