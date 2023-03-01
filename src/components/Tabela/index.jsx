import { useState } from "react"
import styles from './Tabela.module.css'

const Tabela = () => {
    return (
      <table className={styles.tabela}>
        <tbody>
        <tr className={styles.tabelaItem}>
          <th className={styles.tabelaTitulo}>IMC (kg/m<sup>2</sup>)</th>
          <th className={styles.tabelaTitulo}>Classificação</th>
        </tr>
          <tr className="tabela-item">
            <td className={styles.tabelaImc}>Menor que 18,5</td>
            <td className={styles.tabelaClassificacao}>Magreza</td>
          </tr>
          <tr className="tabela-item">
            <td className={styles.tabelaImc}>18,5 a 24,9</td>
            <td className={styles.tabelaClassificacao}>Normal</td>
          </tr>
          <tr className="tabela-item">
            <td className={styles.tabelaImc}>25 a 29,9</td>
            <td className={styles.tabelaClassificacao}>Sobrepeso</td>
          </tr>
          <tr className="tabela-item">
            <td className={styles.tabelaImc}>30 a 34,9</td>
            <td className={styles.tabelaClassificacao}>Obesidade grau I</td>
        </tr>
        <tr className="tabela-item">
          <td className={styles.tabelaImc}>35 a 39,9</td>
          <td className={styles.tabelaClassificacao}>Obesidade grau II</td>
        </tr>
        <tr className="tabela-item">
          <td className={styles.tabelaImc}>Maior que 40</td>
          <td className={styles.tabelaClassificacao}>Obesidade grau III</td>
        </tr>
        </tbody>
      </table>
    )
}

export default Tabela