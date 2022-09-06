import React, { useState } from 'react';
import * as S from './styles';
import Icon from 'react-native-vector-icons/FontAwesome';
import { ModalDelete } from '../../modal/modalDelete';
import { useToast } from 'react-native-toast-notifications';
import handleDeleteDrug from '../../../services/drugs/deleteDrug';

interface CardProps {
    onPress?: () => void;
    nameDrug: string;
    daysExpired: number;
    timerNotification: number;
    totalDrugs: number;
    daysNotifications: number;
}

export const CardRemedies = ({ nameDrug, daysExpired, timerNotification, totalDrugs, daysNotifications }: CardProps) => {

    const [isOpen, setIsOpen] = useState(false);
    const toast = useToast();
    var daysExpired = 5;

    const deleteDrug = () => {
        handleDeleteDrug()
        toast.show('Medicamento excluído com sucesso', { type: 'success' })
    }

    return (
        <S.ContainerCard>
            <S.ContainerHeader>
                <S.Title>{nameDrug}</S.Title>
                <S.TextHour>
                    <Icon name="bell" size={16} color="#16C153" /> {timerNotification}h
                </S.TextHour>
            </S.ContainerHeader>
            <S.TextBold>Comprimidos na cartela: <S.Text>{totalDrugs}</S.Text></S.TextBold>
            <S.TextBold>Lembrete por:
                {daysNotifications > 1 ? (
                    <S.Text> {daysNotifications} dias</S.Text>
                ) : (
                    <S.Text> {daysNotifications} dia</S.Text>
                )}
            </S.TextBold>
            <S.ContainerRow>
                {daysExpired > 1 ? (
                    <S.TextExpired>Restam {daysExpired} dias...</S.TextExpired>
                ) : (
                    <S.TextExpired>Resta {daysExpired} dia...</S.TextExpired>
                )}
                <S.ContainerDelete onPress={() => setIsOpen(true)} >
                    <Icon name="trash" size={25} color='#FF2222' />
                </S.ContainerDelete>
            </S.ContainerRow>
            {isOpen && (
                <ModalDelete
                    onPress={() => (deleteDrug(), setIsOpen(false))}
                    description='Deseja excluir este medicamento?'
                    closeModal={() => setIsOpen(false)}
                />
            )}
        </S.ContainerCard>
    )
}