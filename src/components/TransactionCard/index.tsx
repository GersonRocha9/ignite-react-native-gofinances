//React
import React from "react";

//Styles
import {
  Container,
  Title,
  Amount,
  Footer,
  Category,
  Icon,
  CategoryName,
  Date,
} from "./styles";

//Types
type CategoryProps = {
  name: string;
  icon: string;
};

type DataProps = {
  title: string;
  amount: string;
  category: CategoryProps;
  date: string;
};

type Props = {
  data: DataProps;
};

export default function TransactionCard(props: Props) {
  const { data } = props;

  return (
    <Container>
      <Title>{data.title}</Title>
      <Amount>{data.amount}</Amount>

      <Footer>
        <Category>
          <Icon name="dollar-sign" />
          <CategoryName>{data.category.name}</CategoryName>
        </Category>

        <Date>{data.date}</Date>
      </Footer>
    </Container>
  );
}
