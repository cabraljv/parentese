import styled from 'styled-components/native';

export const Container = styled.View`
    margin: 5px;
    background: #fff;
`;
export const Header = styled.View`
    display: flex;
    flex-direction: row;
    padding: 6px;
    
`;
export const ProfilePic = styled.Image`
    width: 65px;
    height: 65px;
`;
export const UserInfo = styled.View`
    margin: auto 10px;
`;
export const UserName = styled.Text`
    font-weight: bold;
    font-size: 18px;
`;
export const UserAccount = styled.Text`
    color: #707070;
`;
export const Time = styled.Text`
    margin: 5px;
    margin-left: auto;
    font-size: 12px;
    color: #707070;
`;
export const ContentView = styled.View`
    text-align: center;
`;
export const Title = styled.Text`
    font-size: 20px;
    font-weight: bold;
    text-align: center;
    padding: 5px;
`;
export const Content = styled.Text`
    color: #2A2A2A;
    text-align: center;
    font-size: 14px;
    padding: 5px;
`;
export const Footer = styled.View`
    background: #AC03FF;
    width: 170px;
    margin: 20px;
    padding: 10px;
    border-radius: 25px;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
`;
export const BtnFooter = styled.TouchableOpacity`

`;
export const BtnIcon = styled.Image`
    width: 30px;
    height: 30px;
`;