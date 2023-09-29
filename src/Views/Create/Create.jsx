import React, { useState } from 'react'
import {useDispatch} from "react-redux"
import { getUsers, postUser } from '../../Redux/Actions';

const Create = () => {
  const [input, setInput] = useState({
    name: "",
    email: "",
    phone: "",
    pokemons: ""
  });
  const [errors, setErrors] = useState({
    name: "Nombre es requerido",
    email: "Email es requerido",
    phone: "",
    pokemons: ""
  });

  const dispatch = useDispatch();

  const disable = () => {
    let disabled = true;

    for(let error in errors){
      if(errors[error]==="") disabled = false;
      else{
        disabled = true
        break;
      }
    }

    return disabled
  }

  const validate = (input, name) => {

    if (name === "name") {
      if (input.name !== "") setErrors({ ...errors, name: "" })
      else setErrors({ ...errors, name: "Nombre es requerido" })
    } else if (name === "email") {
      const regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
      if (input.email !== "") setErrors({ ...errors, email: "" })
      else {
        setErrors({ ...errors, email: "Email es requerido" })
        return
      }
      if(regexEmail.test(input.email)) setErrors({ ...errors, email: "" })
      else {
        setErrors({ ...errors, email: "El formato de email no es valido." })
        return
      }
    } else if (name === "phone") {
    }
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    dispatch(postUser(input)).then(()=>{
      dispatch(getUsers())
    })
    //alert("La informacion se posteo exitosamente.") <--------- 🤬MALLLLLL🤬🤬🤬🤬🤬🤬
  }


  const handleChange = (event) => {
    setInput({
      ...input,
      [event.target.name]: event.target.value
    })
    validate({
      ...input,
      [event.target.name]: event.target.value
    }, event.target.name)
  }




  return (
    <div>
      {console.log(errors)}
      <form onSubmit={handleSubmit}>
        <div>
          <label>Nombre:</label>
          <input name='name' type="text" onChange={handleChange} />
          {errors.name}
        </div>
        <div>
          <label>Email:</label>
          <input name='email' type="text" onChange={handleChange} />
          {errors.email}
        </div>
        <div>
          <label>Telefono:</label>
          <input name='phone' type="text" onChange={handleChange} />
          {errors.phone}
        </div>
        <select onChange={handleChange} name="pokemons" id="">
          <option value="pikachu">pikachu</option>
          <option value="bulbasur">bulbasur</option>
          <option value="Raichu">Raichu</option>
          <option value="Charizard">Charizard</option>
        </select>

        <input disabled={disable()} type="submit" name="submit" />

      </form>
    </div>
  )
}

export default Create