//React
import React, { useState } from "react";

//Components
import Input from "../../components/Form/Input";
import Button from "../../components/Form/Button";
import TransactionTypeButton from "../../components/Form/TransactionTypeButton";

//Styles
import {
  Container,
  Header,
  Title,
  Form,
  Fields,
  TransactionsTypes,
} from "./styles";

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

          <TransactionsTypes>
            <TransactionTypeButton type="up" title="Income" />
            <TransactionTypeButton type="down" title="Outcome" />
          </TransactionsTypes>
        </Fields>

        <Button title="Enviar" />
      </Form>
    </Container>
  );
}
