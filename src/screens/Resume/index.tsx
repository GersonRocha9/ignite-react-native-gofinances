//React
import React from "react";

//Components
import Header from "../../components/Header";
import HistoryCard from "../../components/HistoryCard";

//Styles
import { Container, History } from "./styles";

export default function Resume() {
  return (
    <Container>
      <Header title="Resumo por categoria" />

      <History>
        <HistoryCard title="Alimentação" amount="20" color="red" />
      </History>
    </Container>
  );
}
