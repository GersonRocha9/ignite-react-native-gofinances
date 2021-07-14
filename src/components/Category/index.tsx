//React
import React from "react";

//Styles
import { Container, Icon, Label, Separator } from "./styles";

//Types
type Props = {};

export default function Category(props: Props) {
  const { data } = props;

  return (
    <Container>
      <Icon name={data.icon} />
      <Label>{data.name}</Label>
    </Container>
  );
}
