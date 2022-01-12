import * as React from "react";
import { View, Text, TextInput, Button } from "react-native";

const Profile = () => {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text testID="text-title">Perfil</Text>

      <TextInput
        testID="input-name"
        placeholder="Nome"
        autoCorrect={false}
        value="Henrique"
      />
      <TextInput
        testID="input-surname"
        placeholder="Sobrenome"
        autoCorrect={false}
        value="Marques"
      />

      <Button title="Salvar" onPress={() => {}} />
    </View>
  );
};

export default Profile;
