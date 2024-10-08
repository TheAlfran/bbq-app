import React from "react";
import { router } from "expo-router";

import {
  Button,
  ButtonText,
  LandingBackground,
  LandingContainer,
  LandingImage,
  LandingTitle,
  Overlay,
  VersionText,
} from "./styles";

const User = () => {
  return (
    <LandingBackground source={require("../../assets/background.jpg")}>
      <Overlay />
      <LandingContainer>
        <LandingTitle>Frank and Anita{"\n"}Barbeque</LandingTitle>
        <LandingImage source={require("../../assets/barbecue.png")} />
      </LandingContainer>
      <Button>
        <ButtonText onPress={() => router.push("/home")}>
          Get Started
        </ButtonText>
      </Button>
      <VersionText>v.0.01</VersionText>
    </LandingBackground>
  );
};

export default User;
