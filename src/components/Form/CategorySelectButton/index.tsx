//React
import React from "react";
import { TouchableOpacityProps } from "react-native";

//Styles
import { Container, Category, Icon } from "./styles";

//Types
type Props = TouchableOpacityProps & {
  title: string;
};

export default function CategorySelectButton(props: Props) {
  const { title, ...rest } = props;

  return (
    <Container activeOpacity={0.7} {...rest}>
      <Category>{title}</Category>
      <Icon name="chevron-down" />
    </Container>
  );
}
