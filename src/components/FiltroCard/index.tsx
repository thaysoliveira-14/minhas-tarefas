import { Card, Contador, Label } from './styles'

export type Props = {
    ativo?: boolean
}

export const FiltroCard = (props: Props) => (
    <div>
        <Card ativo={props.ativo}>
            <Contador>3</Contador>
            <Label>pendentes</Label>
        </Card>
    </div>
)
