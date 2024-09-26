import * as S from './styles'
import { useState } from 'react'

import * as enums from '../..//utils/enums/Tarefa'

type Props = {
    titulo: string
    prioridade: enums.Prioridade
    status: enums.Status
    descricao: string
}

export const Tarefa = ({ titulo, prioridade, status, descricao }: Props) => {
    const [estaEditando, setEstaEditando] = useState(false)

    return (
        <S.Card>
            <S.Titulo>{titulo}</S.Titulo>
            <S.Tag parametro='prioridade' prioridade={prioridade}>{prioridade}</S.Tag>
            <S.Tag parametro='status' status={status}>{status}</S.Tag>
            <S.Descricao value={descricao} />
            <S.BarraAcoes>
                {estaEditando ? (
                    <>
                        <S.ButtonSalvar>Salvar</S.ButtonSalvar>
                        <S.ButtonCancelarRemover onClick={() => setEstaEditando(false)}>Cancelar</S.ButtonCancelarRemover>
                    </>
                ) : (
                    <>
                        <S.Button onClick={() => setEstaEditando(true)}>Editar</S.Button>
                        <S.ButtonCancelarRemover>Remover</S.ButtonCancelarRemover>
                    </>
                )}
            </S.BarraAcoes>
        </S.Card>
    )
}
