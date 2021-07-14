//React
import React, { useState } from "react";

//Components
import Input from "../../components/Form/Input";
import TransactionTypeButton from "../../components/Form/TransactionTypeButton";
import CategorySelect from "../../components/Form/CategorySelect";
import Button from "../../components/Form/Button";

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
  const [transactionType, setTransactionType] = useState<string>("");

  function handleTransactionTypeSelect(type: "up" | "down") {
    setTransactionType(type);
  }

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
            <TransactionTypeButton
              type="up"
              title="Income"
              isActive={transactionType === "up"}
              onPress={() => handleTransactionTypeSelect("up")}
            />
            <TransactionTypeButton
              type="down"
              title="Outcome"
              isActive={transactionType === "down"}
              onPress={() => handleTransactionTypeSelect("down")}
            />
          </TransactionsTypes>

          <CategorySelect title="Categoria" />
        </Fields>

        <Button title="Enviar" />
      </Form>
    </Container>
  );
}
