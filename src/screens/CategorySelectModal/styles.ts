//styled-components
import styled from "styled-components/native";

//react-native-responsive-fontsize
import { RFValue } from "react-native-responsive-fontsize";

export const Container = styled.View`
  flex: 1;

  background-color: ${({ theme }) => theme.colors.background};
`;
