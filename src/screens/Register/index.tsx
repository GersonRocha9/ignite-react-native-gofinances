//React
import React, { useState } from "react";
import { Modal } from "react-native";

//Screens
import CategorySelect from "../CategorySelect";

//Components
import Header from "../../components/Header";
import Input from "../../components/Form/Input";
import TransactionTypeButton from "../../components/Form/TransactionTypeButton";
import CategorySelectButton from "../../components/Form/CategorySelectButton";
import Button from "../../components/Form/Button";

//Styles
import { Container, Form, Fields, TransactionsTypes } from "./styles";

export default function Register() {
  const [name, setName] = useState<string>("");
  const [amount, setAmount] = useState<string>("");
  const [transactionType, setTransactionType] = useState<string>("");
  const [category, setCategory] = useState({
    key: "category",
    name: "Categoria",
  });

  const [categoryModalOpen, setCategoryModalOpen] = useState<boolean>(false);

  function handleTransactionTypeSelect(type: "up" | "down") {
    setTransactionType(type);
  }

  function handleOpenSelectCategoryModal() {
    setCategoryModalOpen(true);
  }

  function handleCloseSelectCategoryModal() {
    setCategoryModalOpen(false);
  }

  return (
    <Container>
      <Header title="Cadastro" />

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

          <CategorySelectButton
            title={category.name}
            onPress={handleOpenSelectCategoryModal}
          />
        </Fields>

        <Button title="Enviar" />
      </Form>

      <Modal
        visible={categoryModalOpen}
        animationType="slide"
        transparent={true}
        style={{ flex: 1 }}
      >
        <CategorySelect
          category={category}
          setCategory={setCategory}
          closeSelectCategory={handleCloseSelectCategoryModal}
        />
      </Modal>
    </Container>
  );
}
