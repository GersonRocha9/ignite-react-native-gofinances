//styled-components
import styled from "styled-components/native";

//react-native-responsive-fontsize
import { RFValue } from "react-native-responsive-fontsize";

//Icons
import { Feather } from "@expo/vector-icons";

export const Container = styled.View`
  flex-direction: row;
  align-items: center;

  width: 100%;

  padding: ${RFValue(15)}px;

  background-color: ${({ theme }) => theme.colors.shape};
`;

export const Icon = styled(Feather)`
  font-size: ${RFValue(20)}px;
`;

export const Label = styled.Text`
  margin-left: 16px;

  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: ${RFValue(14)}px;
`;
