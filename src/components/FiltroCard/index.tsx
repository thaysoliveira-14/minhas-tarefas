import { Card, Contador, Label } from './styles'

export type Props = {
    ativo?: boolean
    contador: number
    legenda: string
}

export const FiltroCard = ({ ativo, contador, legenda }: Props) => (
    <div>
        <Card ativo={ativo}>
            <Contador>{contador}</Contador>
            <Label>{legenda}</Label>
        </Card>
    </div>
)
