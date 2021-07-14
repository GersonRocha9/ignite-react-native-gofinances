//React
import React from "react";
import { FlatList } from "react-native-gesture-handler";

//Components
import Header from "../../components/Header";
import Category from "../../components/Category";
import SeparatorItem from "../../components/SeparatorItem";
import Button from "../../components/Form/Button";

//Utils
import { categories } from "../../utils/categories";

//Styles
import { Container, Footer } from "./styles";

//Types
type CategoryProps = {
  key: string;
  name: string;
};

type Props = {
  category: string;
  setCategory: (category: CategoryProps) => void;
  closeSelectCategory: () => void;
};

export default function CategorySelect(props: Props) {
  const { category, setCategory, closeSelectCategory } = props;

  return (
    <Container>
      <Header title="Categoria" />

      <FlatList
        data={categories}
        keyExtractor={(item) => item.key}
        renderItem={({ item }) => <Category data={item} />}
        ItemSeparatorComponent={() => <SeparatorItem />}
        style={{ flex: 1, width: "100%" }}
      />

      <Footer>
        <Button title="Selecionar" />
      </Footer>
    </Container>
  );
}
