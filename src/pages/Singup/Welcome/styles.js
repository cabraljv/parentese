import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
    background: #fff;
    width: 100%;
    height: 100%;
`;
export const Header = styled.View`
    display: flex;
    width: 100%;

`;
export const Logo = styled.Image`
    margin: 20px auto;
`;
export const TextMsg = styled.Text`
    font-size: 20px;
    color: #333;
    margin: auto;
`;

export const TextLogo = styled.Text`
    font-size: 36px;
    color: #AC03FF;
`;

export const MidSection = styled.View`
    margin: auto;
`;

export const ButtonWrite = styled.TouchableOpacity`
    margin-top: 40px;
    background: #AC03FF;
    width: 250px;
    height: 55px;
    border-radius: 30px;
    elevation: 4;
`;

export const ButtonText = styled.Text`
    margin: auto;
    color: #fff;
    letter-spacing: 1px;
    font-size: 24px;
`;

export const Footer = styled.View`
    display: flex;
    margin-bottom: 70px;
    width: 100%;
`;
export const ButtonNext = styled.TouchableOpacity`
    margin: auto;
    
    display: flex;
    flex-direction: row;
    color: #757373;
`;

export const TextButtonNext = styled.Text`
    font-size: 24px;
    color: #757373;
    margin: auto;
`;

