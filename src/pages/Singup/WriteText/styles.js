import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
  width: 100%;
  height: 100%;
  background: #fff;
  display: flex;
`;
export const Header = styled.View`
  margin: 0 auto;
  margin-top: 50px;
  display: flex;
`;

export const TextShowTheme = styled.Text`
    color: #333;
    font-size: 20px;
`;

export const TextTheme = styled.Text`
  font-size: 24px;
  color: #AC03FF;
  margin: auto;
`;

export const TextArea = styled.TextInput`
  width: 90%;
  height: 50%;
  border-radius: 20px;
  padding: 10px;
  font-size: 18px;
  color: #444;
  background: #fff;
  elevation: 5;
  margin: 20px auto;
  text-align-vertical: top;
`;

export const Footer = styled.View`
    display: flex;
    margin-top: auto;
    margin-bottom: 70px;
    width: 100%;
`;
export const ButtonNext = styled.TouchableOpacity`
    margin: auto;
    
    display: flex;
    flex-direction: row;
`;

export const TextButtonNext = styled.Text`
    font-size: 24px;
    color: #AC03FF;
    margin: auto;
`;
