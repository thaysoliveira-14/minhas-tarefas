import { EstiloGlobal, Container } from '../src/styles/index'
import { BarraLateral } from './containers/BarraLateral'
import { ListaDeTarefas } from './containers/ListaDeTarefas'

function App() {
    return (
        <>
            <EstiloGlobal />
            <Container>
                <BarraLateral />
                <ListaDeTarefas />
            </Container>
        </>
    )
}

export default App
