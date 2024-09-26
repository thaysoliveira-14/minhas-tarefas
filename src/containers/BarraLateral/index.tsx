import { FiltroCard } from '../../components/FiltroCard'
import { Aside, Filtro, Campo } from './styles'

export const BarraLateral = () => {
    return (
        <Aside>
            <div>
                <Campo type="text" placeholder="Buscar" />
                <Filtro>
                    <FiltroCard legenda="pendentes" contador={3} />
                    <FiltroCard legenda="concluídas" contador={2} />
                    <FiltroCard legenda="urgentes" contador={1} />
                    <FiltroCard legenda="importantes" contador={2} />
                    <FiltroCard legenda="normal" contador={4} />
                    <FiltroCard legenda="todas" contador={5} ativo />
                </Filtro>
            </div>
        </Aside>
    )
}
