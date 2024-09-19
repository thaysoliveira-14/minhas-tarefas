import { FiltroCard } from '../../components/FiltroCard'
import { Aside, Filtro, Campo } from './styles'

export const BarraLateral = () => {
    return (
        <Aside>
            <div>
                <Campo type="text" placeholder="Buscar" />
                <Filtro>
                    <FiltroCard />
                    <FiltroCard />
                    <FiltroCard ativo />
                    <FiltroCard />
                    <FiltroCard />
                    <FiltroCard />
                </Filtro>
            </div>
        </Aside>
    )
}
