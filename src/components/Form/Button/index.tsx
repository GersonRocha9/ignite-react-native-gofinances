//React
import React from "react";
import { TouchableOpacityProps } from "react-native";

//Styles
import { Container, Title } from "./styles";

//Types
type Props = TouchableOpacityProps & {
  title: string;
};

export default function Button(props: Props) {
  const { title, ...rest } = props;

  return (
    <Container activeOpacity={0.7} {...rest}>
      <Title>{title}</Title>
    </Container>
  );
}
