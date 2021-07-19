//React
import React from "react";
import { Alert } from "react-native";

//react-native-responsive-fontsize
import { RFValue } from "react-native-responsive-fontsize";

//Components
import SignInSocialButton from "../../components/SignInSocialButton";

//Hooks
import { useAuth } from "../../hooks/useAuth";

//Styles
import {
  Container,
  Header,
  TitleWrapper,
  Title,
  SignInTitle,
  Footer,
  SignInWrapper,
} from "./styles";

//Svg
import GoogleSvg from "../../assets/google.svg";
import AppleSvg from "../../assets/apple.svg";
import LogoSvg from "../../assets/logo.svg";

export default function SignIn() {
  const { signInWithGoogle } = useAuth();

  async function handleSignInWithGoogle() {
    try {
      await signInWithGoogle();
    } catch (error) {
      console.log(error);
      Alert.alert(
        "Erro de conexão",
        "Não foi possível conectar a conta Google."
      );
    }
  }

  return (
    <Container>
      <Header>
        <TitleWrapper>
          <LogoSvg width={RFValue(120)} height={RFValue(68)} />

          <Title>
            Controle suas{"\n"}
            finanças de forma{"\n"}
            muito simples
          </Title>
        </TitleWrapper>
        <SignInTitle>
          Faça seu login com{"\n"}
          uma das contas abaixo.
        </SignInTitle>
      </Header>

      <Footer>
        <SignInWrapper>
          <SignInSocialButton
            title="Entrar com Google"
            svg={GoogleSvg}
            onPress={handleSignInWithGoogle}
          />
          <SignInSocialButton title="Entrar com Apple" svg={AppleSvg} />
        </SignInWrapper>
      </Footer>
    </Container>
  );
}