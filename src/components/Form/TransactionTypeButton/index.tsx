//React
import React from "react";
import { TouchableOpacityProps } from "react-native";

//Styles
import { Container, Icon, Title } from "./styles";

//Types
type Props = TouchableOpacityProps & {
  type: "up" | "down";
  title: string;
};

export default function TransactionTypeButton(props: Props) {
  const { type, title, ...rest } = props;

  const icon = {
    up: "arrow-up-circle",
    down: "arrow-down-circle",
  };

  return (
    <Container activeOpacity={0.6} {...rest}>
      <Icon type={type} name={icon[type]} />
      <Title>{title}</Title>
    </Container>
  );
}
