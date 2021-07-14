//React
import React, { useState } from "react";

//Components
import Input from "../../components/Form/Input";

//Styles
import { Container, Header, Title, Form } from "./styles";

export default function Register() {
  const [name, setName] = useState<string>("");
  const [amount, setAmount] = useState<string>("");

  return (
    <Container>
      <Header>
        <Title>Cadastro</Title>
      </Header>

      <Form>
        <Input
          placeholder="Nome"
          onChangeText={(t) => setName(t)}
          value={name}
        />

        <Input
          placeholder="Preço"
          onChangeText={(t) => setAmount(t)}
          value={amount}
        />
      </Form>
    </Container>
  );
}
