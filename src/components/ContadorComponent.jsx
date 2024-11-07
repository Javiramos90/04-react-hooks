import { useCounter } from "../hooks/userCounter"


export const ContadorComponent = () => {
  
  const {contador, incrementar, decrementar, resetear} = useCounter(0)
  
    return (
    <>
        <h2>Contador: {contador}</h2>
        <button className="btn btn-success" onClick={() => incrementar()}>Mas</button>
        <button className="btn btn-warning" onClick={() =>decrementar(1, true)}>Menos</button>
        <button className="btn btn-danger" onClick={resetear}>reset</button>
    </>
  )
}
