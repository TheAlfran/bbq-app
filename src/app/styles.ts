import styled from "styled-components/native";
import { background, primary, tertiary, text } from "../@core/theme";

export const Button = styled.TouchableOpacity`
  background-color: ${primary};
  justify-content: center;
  align-items: center;
  width: 251px;
  height: 62px;
  border-radius: 30px;
`;

export const ButtonText = styled.Text`
  font-size: 24px;
  font-weight: bold;
  color: ${text};
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
  color: ${primary};
  text-align: center;
`;

export const LandingImage = styled.Image`
  width: 118px;
  height: 118px;
`;

export const LandingContainer = styled.View`
  justify-content: center;
  align-items: center;
`;

export const VersionText = styled.Text`
  color: ${tertiary};
  font-size: 12px;
  font-weight: bold;
`;
