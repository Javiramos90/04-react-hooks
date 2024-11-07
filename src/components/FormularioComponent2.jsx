import { useEffect, useRef, useState } from "react"
import { useForm } from "../hooks/useForm"


export const FormularioComponent2 = () => {
/**
 * useRef
 * utilizamos useRef para hacer referencia a un input
 */

    const focusRef = useRef()
// se ejecuta una vez al crear el elemento
    useEffect(() => { 
        //pone el foco en el elemento
        focusRef.current.focus()
        //hace scroll hasta el elemento
        // focusRef.current.scrollIntoView({
        //     behavior: 'smooth',  //para un scroll suave
        //     block: ''
        // })

     }, [])

    const initialForm ={
        nombre:'',
        correo:'',
        contra:''
    }

    const{formState, nombre, correo, contra, onInputChange} = useForm(initialForm)

 
    const onSubmit = (event) => {
        event.preventDefault()
        console.log(formState)
    }

    return (
        <form onSubmit={onSubmit}>
            <h2>formulario 2</h2>
            <div className="form-group">
                <label htmlFor="nombre">Nombre</label>
                <input ref={focusRef} type="text" className="form-control" name="nombre" placeholder="Escribe tu nombre" value={nombre} onChange={onInputChange} ></input>
            </div>
            <div className="form-group">
                <label htmlFor="correo">Correo electronico</label>
                <input type="email" className="form-control" name="correo" placeholder="Escribe tu correo" value={correo} onChange={onInputChange}></input>
            </div>
            <div className="form-group">
                <label htmlFor="contra">Contraseña</label>
                <input type="password" className="form-control" name="contra" placeholder="Contraseña" value={contra} onChange={onInputChange}></input>
            </div>
            <button type="submit" className="btn btn-primary">Enviar</button>
        </form>
    )
}