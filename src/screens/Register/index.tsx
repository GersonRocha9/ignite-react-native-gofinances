//React
import React, { useState } from "react";
import { Modal } from "react-native";

//React Hook Form
import { useForm } from "react-hook-form";

//Screens
import CategorySelect, { CategoryProps } from "../CategorySelect";

//Components
import Header from "../../components/Header";
import InputForm from "../../components/Form/InputForm";
import TransactionTypeButton from "../../components/Form/TransactionTypeButton";
import CategorySelectButton from "../../components/Form/CategorySelectButton";
import Button from "../../components/Form/Button";

//Styles
import { Container, Form, Fields, TransactionsTypes } from "./styles";

//Types
type FormData = {
  name: string;
  amount: string;
};

export default function Register() {
  //Form
  const [transactionType, setTransactionType] = useState<string>("");
  const [category, setCategory] = useState<CategoryProps>({
    key: "category",
    name: "Categoria",
  });

  //Modal
  const [categoryModalOpen, setCategoryModalOpen] = useState<boolean>(false);

  const { control, handleSubmit } = useForm();

  function handleTransactionTypeSelect(type: "up" | "down") {
    setTransactionType(type);
  }

  function handleOpenSelectCategoryModal() {
    setCategoryModalOpen(true);
  }

  function handleCloseSelectCategoryModal() {
    setCategoryModalOpen(false);
  }

  function handleRegister(form: FormData) {
    const data = {
      name: form.name,
      amount: form.amount,
      transactionType,
      category,
    };

    console.log(data);
  }

  return (
    <Container>
      <Header title="Cadastro" />

      <Form>
        <Fields>
          <InputForm name="name" control={control} placeholder="Nome" />

          <InputForm name="amount" control={control} placeholder="Preço" />

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

        <Button title="Enviar" onPress={handleSubmit(handleRegister)} />
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
