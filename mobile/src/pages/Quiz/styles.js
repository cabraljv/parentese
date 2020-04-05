import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background: #fff;
`;
export const Header = styled.View`
    height: 60px;
    background: #AC03FF;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    elevation: 5;
`;
export const BackButton = styled.TouchableOpacity`
  margin-left: 20px;
  margin-right: 35px;
`;
export const Logo = styled.Image`

`;
export const StarsView = styled.View`
  display: flex;
  flex-direction: row;
  background: #fff;
  padding: 5px 10px;
    border-radius: 40px;
    align-items: center;
    margin-right: 10px;
`;
export const StarImage = styled.Image`
  height: 17px;
  width: 17px;
  margin-right: 5px;
  
`;
export const StarText = styled.Text`
  padding: 2px;
  font-size: 16px;
  font-weight: bold;
  color: #333;
`;
export const Content = styled.View`
    flex: 1;
    align-items: center;
    justify-content: center;
`;
export const QuizLogo = styled.Image`
    width: 240px;
    height: 200px;
`;
export const TextContent = styled.Text`
    font-size: 18px;
    color: #444;
`;
export const ThemeField = styled.View`
    background: #E3E3E3;
    border-radius: 30px;
    margin: 10px;
`;
export const ThemeText = styled.Text`
    font-size: 18px;
    padding: 10px 40px;
`;
export const BtnStart = styled.TouchableOpacity`
    width: 60%;
    height: 50px;
    background: #AC03FF;
    margin-top: 20px;
    border-radius: 30px;
    elevation: 5;
`;
export const BtnText = styled.Text`
    color: #fff;
    margin: auto;
    font-size: 18px;
    letter-spacing: 2px;
`;
