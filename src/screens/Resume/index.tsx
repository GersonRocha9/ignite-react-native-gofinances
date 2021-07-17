//React
import React, { useState, useCallback } from "react";

//React Navigation
import { useFocusEffect } from "@react-navigation/native";
import { useBottomTabBarHeight } from "@react-navigation/bottom-tabs";

//AsyncStorage
import AsyncStorage from "@react-native-async-storage/async-storage";

//Victory
import { VictoryPie } from "victory-native";

//styled-components
import { useTheme } from "styled-components";

//react-native-responsive-fontsize
import { RFValue } from "react-native-responsive-fontsize";

//Storages
import { COLLECTION_TRANSACTIONS } from "../../storages/storage";

//Utils
import { categories } from "../../utils/categories";

//Components
import Header from "../../components/Header";
import HistoryCard from "../../components/HistoryCard";

//Styles
import { Container, ChartContainer, Content } from "./styles";

//Types
import { TransactionCardProps } from "../../components/TransactionCard";

interface CategoryData {
  key: string;
  name: string;
  total: number;
  totalFormatted: string;
  percent: string;
  color: string;
}

export default function Resume() {
  const [totalByCategories, setTotalByCategories] = useState<CategoryData[]>(
    []
  );

  const theme = useTheme();

  async function loadData() {
    const response = await AsyncStorage.getItem(COLLECTION_TRANSACTIONS);
    const responseFormatted = response ? JSON.parse(response) : [];

    const expensives = responseFormatted.filter(
      (item: TransactionCardProps) => item.type === "negative"
    );

    const expensivesTotal = expensives.reduce(
      (acumullator: number, expensive: TransactionCardProps) => {
        return acumullator + Number(expensive.amount);
      },
      0
    );

    const totalByCategory: CategoryData[] = [];

    categories.forEach((category) => {
      let categorySum = 0;

      expensives.forEach((expensive: TransactionCardProps) => {
        if (expensive.category === category.key) {
          categorySum += Number(expensive.amount);
        }
      });

      if (categorySum > 0) {
        const totalFormatted = categorySum.toLocaleString("pt-BR", {
          style: "currency",
          currency: "BRL",
        });

        const percent = `${((categorySum / expensivesTotal) * 100).toFixed(
          0
        )}%`;

        totalByCategory.push({
          key: category.key,
          name: category.name,
          total: categorySum,
          totalFormatted,
          percent,
          color: category.color,
        });
      }
    });

    setTotalByCategories(totalByCategory);
  }

  useFocusEffect(
    useCallback(() => {
      loadData();
    }, [])
  );

  return (
    <Container>
      <Header title="Resumo por categoria" />

      <ChartContainer>
        <VictoryPie
          data={totalByCategories}
          x="percent"
          y="total"
          style={{
            labels: {
              fontSize: RFValue(18),
              fontWeight: "bold",
              fill: theme.colors.shape,
            },
          }}
          colorScale={totalByCategories.map((item) => item.color)}
          labelRadius={50}
        />
      </ChartContainer>

      <Content
        contentContainerStyle={{
          paddingBottom: useBottomTabBarHeight(),
          paddingHorizontal: 24,
        }}
      >
        {totalByCategories.map((item) => (
          <HistoryCard
            key={item.key}
            title={item.name}
            amount={item.totalFormatted}
            color={item.color}
          />
        ))}
      </Content>
    </Container>
  );
}
