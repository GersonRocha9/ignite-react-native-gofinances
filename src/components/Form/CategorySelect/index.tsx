//React
import React from "react";
import { TouchableOpacityProps } from "react-native";

//Styles
import { Container, Category, Icon } from "./styles";

//Types
type Props = TouchableOpacityProps & {
  title: string;
};

export default function CategorySelect(props: Props) {
  const { title } = props;

  return (
    <Container activeOpacity={0.7}>
      <Category>{title}</Category>
      <Icon name="chevron-down" />
    </Container>
  );
}
