//React
import { TouchableOpacity } from "react-native";

//styled-components
import styled from "styled-components/native";

//react-native-responsive-fontsize
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";

//Icons
import { Feather } from "@expo/vector-icons";

//Types
type IconProps = {
  type: "up" | "down";
};

export const Container = styled(TouchableOpacity)`
  flex-direction: row;
  align-items: center;
  justify-content: center;

  width: ${RFPercentage(24)}px;

  margin: 8px 0;
  padding: 16px 35px;

  border: 1.5px solid ${({ theme }) => theme.colors.text};
  border-radius: 5px;
`;

export const Icon = styled(Feather)<IconProps>`
  font-size: ${RFValue(24)}px;
  color: ${({ theme, type }) =>
    type === "up" ? theme.colors.success : theme.colors.attention};
`;

export const Title = styled.Text`
  margin-left: 12px;

  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: ${RFValue(14)}px;
  color: ${({ theme }) => theme.colors.title};
`;
