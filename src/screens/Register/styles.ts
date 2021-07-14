//styled-components
import styled from "styled-components/native";

//react-native-responsive-fontsize
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";

//react-native-iphone-x-helper
import { getStatusBarHeight } from "react-native-iphone-x-helper";

export const Container = styled.View`
  flex: 1;

  background-color: ${({ theme }) => theme.colors.background};
`;

export const Header = styled.View`
  align-items: center;
  justify-content: flex-end;

  width: 100%;
  height: ${RFValue(113)}px;

  padding-bottom: ${RFValue(19)}px;

  background-color: ${({ theme }) => theme.colors.primary};
`;

export const Title = styled.Text`
  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: ${RFValue(18)}px;
  color: ${({ theme }) => theme.colors.shape};
`;
