import styled from 'styled-components/native';
import colors from '../../utils/colors';

export const ContainerPage = styled.View`
    background-color: ${colors.white};
    color: ${colors.red};
    padding: 7%;
    align-items: center;
    justify-content: center;
    height: 100%;
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
