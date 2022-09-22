import React from 'react';
import { Line } from '../../components/Line';
import { TabBar } from '../../components/TabBar';
import { usePatient } from '../../contexts/Patient';
import { SvgCss } from 'react-native-svg';
import listEmpity from '../../assets/listEmpity.svg';
import Icon from 'react-native-vector-icons/FontAwesome';
import * as S from './styles';

export const AllSchedules = () => {

    const { listPatients } = usePatient();

    const RenderSchedules = () => {
        if (listPatients?.length > 0) {
            return (
                listPatients?.map(({ namePatient }) => (
                    <S.ContainerContent>
                        <S.ContainerSchedule>
                            <S.ContainerInfo>
                                <S.Title>Nome do paciente</S.Title>
                                <S.Text>{namePatient}</S.Text>
                            </S.ContainerInfo>
                            <S.ContainerTime>
                                <Icon name="clock-o" size={22} color="#51d17e" />
                                <S.TextTime>09:15</S.TextTime>
                            </S.ContainerTime>
                        </S.ContainerSchedule>
                        <Line />
                    </S.ContainerContent>
                ))
            )
        } else {
            return (
                <S.ListPatientsEmpty>
                    <SvgCss xml={listEmpity} height={250} width={250} />
                    <S.TextListEmpity>
                        Você não possui atendimentos para fazer no momento
                    </S.TextListEmpity>
                </S.ListPatientsEmpty>
            )
        }
    }

    return (
        <S.ContainerPage>
            {RenderSchedules()}
            <S.ContainerTabBar>
                <TabBar />
            </S.ContainerTabBar>
        </S.ContainerPage>
    )
}