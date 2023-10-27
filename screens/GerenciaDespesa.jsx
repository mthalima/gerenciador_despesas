import { useLayoutEffect } from "react";
import { Text } from "react-native";

function GerenciaDespesa({ route, navigation }) {
  const idDaDespesa = route.params?.idDespesa;

  const editando = !!idDaDespesa;

  useLayoutEffect(() => {
    navigation.setOptions(
      { title: editando ? "Editar despesa" : "Add despesa" },
      [navigation, editando]
    );
  });

  return <Text>Tela de gerenciamento da despesa</Text>;
}

export default GerenciaDespesa;
