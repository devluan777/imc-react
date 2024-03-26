import './App.css';
import React, { useState } from 'react';
import InputMask from 'react-input-mask';

function App() {
  const [form, setForm] = React.useState({});
  const [resultado, setResultado] = React.useState(null);

  function handleChange(event) {
    setForm(form => ({ ...form, [event.target.name]: event.target.value }));
  }
  

  function handleSubmit(event) {
    event.preventDefault();
    if (!form.altura || !form.peso) {
      alert("Os valores precisam ser definidos!");
    } else {
      const alturaMetros = parseFloat(form.altura);
      const pesoKg = parseFloat(form.peso);
      const imc = pesoKg / (alturaMetros * alturaMetros);
      setResultado(imc);
    }
  }

  function getClassificacao(imc) {
    if (imc < 16) {
      return "Magreza grave";
    } else if (imc < 16.9) {
      return "Magreza moderada";
    } else if (imc < 18.4) {
      return "Magreza leve";
    } else if (imc < 24.9) {
      return "Normal";
    } else if (imc < 29.9) {
      return "Sobrepeso";
    } else if (imc < 34.9) {
      return "Obesidade grau I";
    } else if (imc < 39.9) {
      return "Obesidade grau II (severa)";
    } else {
      return "Obesidade grau III (mórbida)";
    }
  }
  

  return (
    <form onSubmit={handleSubmit}>
      <div className="container">
        <div className="form">
          <div className="container-input-label">
            <div className="children-container-input-label">
              <label>Quanto você mede?</label>
              <InputMask
                placeholder="Digite sua altura"
                mask="9.99"
                name="altura"
                onChange={handleChange}
              />
            </div>
            <div className="children-container-input-label">
              <label>Quanto você pesa?</label>
              <input
                placeholder="Digite seu peso"
                name="peso"
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="container-button">
            <button type="submit">Calcular</button>
          </div>
          
          {resultado && (
            <div className="resultado">
              <p>Seu IMC é: {resultado.toFixed(2)}</p>
              <p>Classificação: {getClassificacao(resultado)}</p>
            </div>
          )}
        </div>
      </div>
    </form>
  );
}

export default App;

