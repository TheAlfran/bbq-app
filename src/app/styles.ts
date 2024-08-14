import styled from "styled-components/native";

export const Button = styled.TouchableOpacity`
  background-color: blue;
  justify-content: center;
  align-items: center;
  width: 251px;
  height: 62px;
  border-radius: 30px;
`;

export const ButtonText = styled.Text`
  font-size: 24px;
  font-weight: bold;
  color: white;
  text-align: center;
`;

export const LandingBackground = styled.ImageBackground`
  flex: 1;
  justify-content: center;
  align-items: center;
  position: relative;
  gap: 190px;
`;

export const Overlay = styled.View`
  background-color: rgba(255, 255, 255, 0.3);
  position: absolute;
  width: 100%;
  height: 100%;
`;

export const LandingTitle = styled.Text`
  font-weight: bold;
  font-size: 32px;
  color: white;
  text-align: center;
`;

export const LandingImage = styled.Image`
  width: 118px;
  height: 118px;
  color: blue;
`;

export const LandingContainer = styled.View`
  justify-content: center;
  align-items: center;
`;

export const VersionText = styled.Text`

`
