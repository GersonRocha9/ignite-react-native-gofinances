//React
import React from "react";
import { TextInputProps } from "react-native";

//styled-components
import { useTheme } from "styled-components";

//Styles
import { Container } from "./styles";

//Types
type Props = TextInputProps;

export default function Input(props: Props) {
  const { ...rest } = props;

  const theme = useTheme();

  return <Container placeholderTextColor={theme.colors.text} {...rest} />;
}
