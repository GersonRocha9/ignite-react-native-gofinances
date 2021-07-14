//React
import React from "react";

//Styles
import { Container } from "./styles";

//Components
import Header from "../../components/Header";

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

export default function CategorySelectModal(props: Props) {
  const { category, setCategory, closeSelectCategory } = props;

  return (
    <Container>
      <Header title="Categoria" />
    </Container>
  );
}
