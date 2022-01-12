import React from "react";
import { render } from "@testing-library/react-native";

import Profile from "../../screens/Profile";

describe("Profile", () => {
  it("verify if the input are with placeholder correct in screen", () => {
    const { getByPlaceholderText } = render(<Profile />);

    const placeholderName = getByPlaceholderText("Nome");
    const placeholderSurname = getByPlaceholderText("Sobrenome");

    expect(placeholderName.props.placeholder).toBeTruthy();
    expect(placeholderSurname.props.placeholder).toBeTruthy();
  });

  it("verify if the data has been loaded", () => {
    const { getByTestId } = render(<Profile />);

    const inputName = getByTestId("input-name");
    const inputSurname = getByTestId("input-surname");

    expect(inputName.props.value).toEqual("Henrique");
    expect(inputSurname.props.value).toEqual("Marques");
  });

  it("verify if the title render correctly ", () => {
    const { getByTestId } = render(<Profile />);
    const textTitle = getByTestId("text-title");

    expect(textTitle.props.children).toEqual("Perfil");
  });
});
