import styled from 'styled-components/native';

export const Container = styled.View`
  background-color: #AC03FF;
  flex: 1;
`;
export const CommentContainer = styled.View`
  background-color: #fff;
  margin: 10px;
  flex: 1;
  border-radius: 20px;
`;
export const Header = styled.View`
    display: flex;
    flex-direction: row;
    align-items: center;
    border-bottom-width: 1px;
    border-bottom-color: #B9B9B9;
    margin: 0 30px;
`;
export const BtnClose = styled.TouchableOpacity`
    margin: 15px;
    margin-left: -10px;
`;
export const ViewHeader = styled.View`
    margin-left: auto;
    display: flex;
    flex-direction: row;
`;
export const IconHeader = styled.Image`
    width: 30px;
    height: 30px;
    margin-left: 20px;
`;
export const TextCount = styled.Text`
    font-size: 18px;
`;
export const CommentItensContainer = styled.ScrollView`

`;
export const Footer = styled.View`
    display: flex;
    flex-direction: row;
    border-top-width: 1px;
    border-top-color: #eee;
    padding: 5px;
    align-items: center;
`;
export const PpUser = styled.Image`
    width: 60px;
    height: 60px;
`;
export const Input = styled.TextInput`
    background: #E5E2E2;
    flex: 1;
    height: 50px;
    border-radius: 25px;
    padding: 15px;
    margin-right: 10px;
`;
export const ButtonSend = styled.TouchableOpacity`
    background: #AC03FF;
    width: 55px;
    height: 55px;
    border-radius: 30px;
    margin: 0 10px;
    margin-left: auto;
    justify-content: center;
    align-items: center;
    elevation: 5;
`;


