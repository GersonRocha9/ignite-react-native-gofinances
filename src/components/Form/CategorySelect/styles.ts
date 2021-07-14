//React
import { TouchableOpacity } from "react-native";

//styled-components
import styled from "styled-components/native";

//react-native-responsive-fontsize
import { RFValue } from "react-native-responsive-fontsize";

//Icons
import { Feather } from "@expo/vector-icons";

export const Container = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  width: 100%;

  padding: 20px 16px;

  background-color: ${({ theme }) => theme.colors.shape};
  border-radius: 5px;
`;

export const Category = styled.Text`
  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: ${RFValue(14)}px;
  color: ${({ theme }) => theme.colors.text};
`;

export const Icon = styled(Feather)`
  font-size: ${RFValue(20)}px;
  color: ${({ theme }) => theme.colors.text};
`;
