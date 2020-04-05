import styled from 'styled-components/native';

export const Container = styled.View`
    flex: 1;
`;
export const Header = styled.View`
    display: flex;
    background: #AC03FF;
    height: 70px;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    elevation: 5;
`;
export const BtnDrawer = styled.TouchableOpacity`
  margin-left: 10px;
`;
export const ImageDrawer = styled.Image`
    width: 60px;
    height: 60px;
    
`;
export const Logo = styled.Image`
    width: 37px;
    height: 40px;
`;
export const BtnQuiz = styled.TouchableOpacity`
  margin-right: 10px;
`;
export const ImageQuiz = styled.Image`
    width: 50px;
    height: 42px;
`;
export const FeedArea = styled.ScrollView`
    background: #B9B9B9;
`;
export const ActionButton = styled.TouchableOpacity`
    background: #AC03FF;
    width: 60px;
    height: 60px;
    border-radius: 30px;
    position: absolute;
    bottom: 25px;
    right: 10px;
`;
