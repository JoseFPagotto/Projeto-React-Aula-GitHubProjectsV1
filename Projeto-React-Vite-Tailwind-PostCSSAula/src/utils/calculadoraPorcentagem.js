export const calcularPorcentagem = (valor, percentual) => {
  if (
    typeof valor !== 'number' ||
    typeof percentual !== 'number' ||
    Number.isNaN(valor) ||
    Number.isNaN(percentual)
  ) {
    throw new Error('Informe valores numéricos válidos')
  }

  if (valor < 0 || percentual < 0) {
    throw new Error('Valor e percentual não podem ser negativos')
  }

  return (valor * percentual) / 100
}