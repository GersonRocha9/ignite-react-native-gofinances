//React
import React from "react";
import { TextInputProps } from "react-native";

//Styles
import { Container } from "./styles";

//Types
type Props = TextInputProps;

export default function Input(props: Props) {
  const { ...rest } = props;

  return <Container {...rest} />;
}
