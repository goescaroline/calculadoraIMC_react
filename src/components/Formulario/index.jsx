import { useState } from "react"
import { useEffect } from "react";

import Tabela from '../Tabela'

import styles from './Formulario.module.css'

const Formulario = () => {

    const [peso, setPeso] = useState(0);
    const [altura, setAltura] = useState(0);

      const calculaImc = () => {
        const imc = peso / (altura * altura)
        const imcFixed = imc.toFixed(2)

        
        return (
            <p>Seu IMC é de: {imcFixed} </p>
            
    )}

    const [resultadoEVisivel, setResultadoEVisivel] = useState(false)

return (
        <form className={styles.form}>
        <input className={styles.formInput} type="number" placeholder="Peso em quilos" onChange={evento => setPeso(parseFloat(evento.target.value))}/><br/>
        <input className={styles.formInput} type="number" placeholder="Altura em metros" onChange={evento => setAltura(parseFloat(evento.target.value))}/>
        <br/>
        <div className={styles.resultado__resposta}>
        
        </div>
        <>
        <button className={styles.button} onClick={() => setResultadoEVisivel(!resultadoEVisivel)} type='button'>Calcular IMC</button>
        {resultadoEVisivel && (
        <p className={styles.resultado}>{calculaImc()}</p>
        )}
        <Tabela/>
        </>
    
    </form>
)
}

export default Formulario;

