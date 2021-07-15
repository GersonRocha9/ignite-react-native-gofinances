//React
import React from "react";
import { TextInputProps } from "react-native";

//React Hook Form
import { Control, Controller } from "react-hook-form";

//Components
import Input from "../../Form/Input";

//Styles
import { Container } from "./styles";

//Types
type Props = TextInputProps & {
  control: Control;
  name: string;
};

export default function InputForm(props: Props) {
  const { control, name, ...rest } = props;

  return (
    <Container>
      <Controller
        control={control}
        render={({ field: { onChange, value } }) => (
          <Input onChangeText={onChange} value={value} {...rest} />
        )}
        name={name}
      />
    </Container>
  );
}
