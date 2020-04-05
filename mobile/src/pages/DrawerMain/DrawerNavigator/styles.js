import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background: #AC03FF;
`;
export const Header = styled.View`
  background: #AC03FF;
  height: 70px;
  elevation: 5;
  align-items: flex-end;
  justify-content: center;
`;
export const ProfilePic = styled.Image`
  width: 65px;
  height: 65px;
  margin-right: 15px;
`;
export const Item = styled.TouchableOpacity`
  height: 50px;
  display: flex;
  flex-direction: row;
  width: 100%;
  align-items: center;
  padding-left: 20px;
  margin-top: 15px;
`;
export const ItemText = styled.Text`
  font-size: 18px;
  color: #fff;
  padding: 5px;
`;

