import styled from 'styled-components/native';

export const Container = styled.View`
  width: 100%;
  height: 100%;
	background: #fff;
`;
export const Header = styled.View`
  width: 100%;
  height: 100px;
  background: #AC03FF;
	margin-bottom: 55px;
`;
export const ButtonPP = styled.TouchableOpacity`
  margin: auto;
  margin-bottom: -75px;
	border-radius: 75px;
`;
export const ImagePP = styled.Image`
	height: 150px;
	width: 150px;
`;
export const Field = styled.View`
  width: 90%;
	margin: 20px auto;
`;
export const Label = styled.Text`
	font-size: 16px;
	color: #555;
	margin-left: 2px;
`;
export const Input = styled.TextInput`
  width: 100%;
  height: 45px;
	background: #fff;
	elevation: 4;
	padding: 5px;
	color: #333;
	border-radius: 15px;
`;
export const Footer = styled.View`
	display: flex;
	flex-direction: row;
	margin-top: 70px;
	position: relative;

`;
export const FooterBar = styled.Image`
  margin: 0 auto;
  margin-top: 30px;
  width: 60px;
  height: 15px;
`;
export const ButtonNext = styled.TouchableOpacity`
    display: flex;
    flex-direction: row;
		position: absolute;
		right: 5%;
		bottom: -10px;
`;

export const TextButtonNext = styled.Text`
    font-size: 18px;
    color: #AC03FF;
    margin: auto;
`;



