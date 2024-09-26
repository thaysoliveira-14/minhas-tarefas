import { Tarefa } from '../../components/Tarefa'
import { Container } from './styles'

import * as enums from '../..//utils/enums/Tarefa'

const tarefa = [
    {
        titulo: 'Fazer devocional',
        descricao: 'Ler Isaías 55',
        prioridade: enums.Prioridade.IMPORTANTE,
        status: enums.Status.PENDENTE
    },
    {
        titulo: 'Ir à academia',
        descricao: 'Fazer treino A',
        prioridade: enums.Prioridade.NORMAL,
        status: enums.Status.CONCLUIDO
    },
    {
        titulo: 'Passear com pet',
        descricao: 'Levar dog e cat para passear',
        prioridade: enums.Prioridade.NORMAL,
        status: enums.Status.PENDENTE
    },
    {
        titulo: 'Fazer almoço',
        descricao: 'Cardápio: Arroz, Feijão, Strogonoff, Batata Palha.',
        prioridade: enums.Prioridade.NORMAL,
        status: enums.Status.PENDENTE
    }
]


export const ListaDeTarefas = () => (
    <Container>
        <p>
            2 tarefas marcadas como: &quot;categoria&ldquo; e &quot;termo&ldquo;
            </p>
        <ul>
            {tarefa.map((t) => ( 
            <li key={t.titulo}>
                <Tarefa 
                titulo={t.titulo}
                descricao={t.descricao}
                prioridade={t.prioridade}
                status={t.status} />
            </li>
            ))}
        </ul>
    </Container>
)
