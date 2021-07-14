//React
import React, { useState } from "react";

//Components
import Input from "../../components/Form/Input";
import Button from "../../components/Form/Button";

//Styles
import { Container, Header, Title, Form, Fields } from "./styles";

export default function Register() {
  const [name, setName] = useState<string>("");
  const [amount, setAmount] = useState<string>("");

  return (
    <Container>
      <Header>
        <Title>Cadastro</Title>
      </Header>

      <Form>
        <Fields>
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
        </Fields>

        <Button title="Enviar" />
      </Form>
    </Container>
  );
}
