import { useState } from 'react'
import { calcularPorcentagem } from '../utils/calculadoraPorcentagem'

export default function CalculadoraPorcentagem() {
  const [valor, setValor] = useState(0)
  const [percentual, setPercentual] = useState(0)
  const [resultado, setResultado] = useState(0)
  const [erro, setErro] = useState('')

  const handleCalcular = () => {
    setErro('')
    try {
      const res = calcularPorcentagem(valor, percentual)
      setResultado(res)
    } catch (e) {
      setErro(e.message)
      setResultado(0)
    }
  }

  return (
    <div className="p-6 flex flex-col items-center gap-4">
      <h1 className="text-2xl font-bold">Calculadora de Porcentagem</h1>

      <div className="flex gap-2">
        <input
          type="number"
          placeholder="Digite o valor"
          value={valor}
          onChange={(e) => setValor(Number(e.target.value))}
          className="border p-2 rounded"
        />
        <input
          type="number"
          placeholder="Digite o percentual (%)"
          value={percentual}
          onChange={(e) => setPercentual(Number(e.target.value))}
          className="border p-2 rounded"
        />
      </div>

      <button
        onClick={handleCalcular}
        className="bg-blue-600 text-white px-6 py-2 rounded font-medium"
      >
        Calcular
      </button>

      {erro ? (
        <p className="text-red-600 font-semibold">{erro}</p>
      ) : (
        <p className="text-xl">
          Resultado: <strong>{resultado}</strong>
        </p>
      )}
    </div>
  )
}