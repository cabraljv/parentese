import styled from 'styled-components/native';

export const Container = styled.View`
  width: 100%;
  height: 100%;
  background: #fff;
  display: flex;
`;
export const Logo = styled.Image`
  margin: auto;
`;
export const MidText = styled.Text`
  font-size: 24px;
  margin: 0 auto;
  text-align: center;
  color: #757373;
`;
export const FooterBar = styled.Image`
  margin: 0 auto;
  margin-top: 30px;
  width: 60px;
  height: 15px;
`;
export const Footer = styled.View`
    display: flex;
    margin-top: auto;
    margin-bottom: 40px;
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
