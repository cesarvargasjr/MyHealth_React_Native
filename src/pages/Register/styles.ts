import styled from 'styled-components/native';
import colors from '../../utils/colors';

export const ContainerPage = styled.View`
    background-color: ${colors.white};
    color: ${colors.red};
    padding: 7%;
    align-items: center;
`;

export const TitleInput = styled.Text`
    font-size: 18px;
    font-family: 'Nunito_700Bold';
    color: ${colors.black};
`;

export const ContainerLogin = styled.View`
    justify-content: flex-start;
    width: 100%;
    margin-top: 10%;
`;

export const TextButton = styled.Text`
    color: ${colors.white};
    font-family: 'Nunito_700Bold';
    text-align: center;
    background-color: ${colors.purple};
    border-radius: 50px;
    padding: 10px;
`;

export const ContainerButton = styled.View`
    width: 80%;
    margin-top: 5%;
`;

export const TextButtonNewUser = styled.Text`
    color: ${colors.purple};
    font-size: 14px;
    font-family: 'Nunito_800ExtraBold';
    text-align: center;
    line-height: 25px;
`;

export const ContainerInput = styled.View`
    width: 100%;
    height: 40px;
    margin-top: 7px;
    margin-bottom: 25px;
    padding-left: 10px;
    background-color: ${colors.purpleInput};
    justify-content: center;
    border-radius: 8px;
`;