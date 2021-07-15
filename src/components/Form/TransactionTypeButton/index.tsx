//React
import React from "react";

//react-native-gesture-handler
import { RectButtonProps } from "react-native-gesture-handler";

//Styles
import { Container, Icon, Title } from "./styles";

//Types
type Props = RectButtonProps & {
  type: "up" | "down";
  title: string;
  isActive: boolean;
};

export default function TransactionTypeButton(props: Props) {
  const { type, title, isActive, ...rest } = props;

  const icon = {
    up: "arrow-up-circle",
    down: "arrow-down-circle",
  };

  return (
    <Container type={type} isActive={isActive} {...rest}>
      <Icon type={type} name={icon[type]} />
      <Title>{title}</Title>
    </Container>
  );
}
