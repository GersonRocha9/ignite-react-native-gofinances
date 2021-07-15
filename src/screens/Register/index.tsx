//React
import React, { useState, useEffect } from "react";
import { Modal, TouchableWithoutFeedback, Keyboard, Alert } from "react-native";

//React Navigation
import { useNavigation } from "@react-navigation/native";

//AsyncStorage
import AsyncStorage from "@react-native-async-storage/async-storage";

//React Hook Form
import { useForm } from "react-hook-form";
import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

//uuid
import uuid from "react-native-uuid";

//Storages
import { COLLECTION_TRANSACTIONS } from "../../storages/storage";

//Screens
import CategorySelect from "../CategorySelect";

//Components
import Header from "../../components/Header";
import InputForm from "../../components/Form/InputForm";
import TransactionTypeButton from "../../components/Form/TransactionTypeButton";
import CategorySelectButton from "../../components/Form/CategorySelectButton";
import Button from "../../components/Form/Button";

//Styles
import { Container, Form, Fields, TransactionsTypes } from "./styles";

//Types
import { CategoryProps } from "../CategorySelect";

interface FormData {
  name: string;
  amount: string;
}

// --------------------- //
export default function Register() {
  //Form States
  const [transactionType, setTransactionType] = useState<string>("");
  const [category, setCategory] = useState<CategoryProps>({
    key: "category",
    name: "Categoria",
  });

  //Modal States
  const [categoryModalOpen, setCategoryModalOpen] = useState<boolean>(false);

  //React Navigation
  const navigation = useNavigation();

  //React Hook Form
  const schema = Yup.object().shape({
    name: Yup.string().required("Nome é obrigatório"),
    amount: Yup.number()
      .typeError("Informe um valor númerico")
      .positive("O valor não pode ser negativo")
      .required("O valor é obrigatório"),
  });

  const {
    control,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  //Functions
  function handleTransactionTypeSelect(type: "up" | "down") {
    setTransactionType(type);
  }

  function handleOpenSelectCategoryModal() {
    setCategoryModalOpen(true);
  }

  function handleCloseSelectCategoryModal() {
    setCategoryModalOpen(false);
  }

  async function handleRegister(form: FormData) {
    if (!transactionType) {
      Alert.alert(
        "Erro ao enviar o formulário!",
        "Selecione o tipo da transação."
      );
      return;
    }

    if (category.key === "category") {
      Alert.alert("Erro ao enviar o formulário!", "Selecione uma categoria.");
      return;
    }

    const newTransaction = {
      id: String(uuid.v4()),
      name: form.name,
      amount: form.amount,
      transactionType,
      category: category.key,
      date: new Date(),
    };

    try {
      const data = await AsyncStorage.getItem(COLLECTION_TRANSACTIONS);
      const currentData = data ? JSON.parse(data) : [];
      const formattedData = [...currentData, newTransaction];

      await AsyncStorage.setItem(
        COLLECTION_TRANSACTIONS,
        JSON.stringify(formattedData)
      );

      reset();
      setTransactionType("");
      setCategory({
        key: "category",
        name: "Categoria",
      });

      navigation.navigate("Dashboard");
    } catch (error) {
      console.log(error);
      Alert.alert("Não foi possível salvar.");
    }
  }

  useEffect(() => {
    async function loadData() {
      const response = await AsyncStorage.getItem(COLLECTION_TRANSACTIONS);
      console.log(JSON.parse(response!));
    }
    loadData();
  }, []);

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <Container>
        <Header title="Cadastro" />

        <Form>
          <Fields>
            <InputForm
              control={control}
              name="name"
              error={errors.name && errors.name.message}
              placeholder="Nome"
              autoCapitalize="sentences"
              autoCorrect={false}
            />

            <InputForm
              control={control}
              name="amount"
              error={errors.amount && errors.amount.message}
              placeholder="Preço"
              keyboardType="numeric"
              autoCorrect={false}
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
    </TouchableWithoutFeedback>
  );
}
