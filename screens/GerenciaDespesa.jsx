import { useLayoutEffect } from "react";
import { StyleSheet, Text, View } from "react-native";

import { GlobalStyles } from "../constants/styles";
import IconeBotao from "../components/UI/IconeBotao";
import Botao from "../components/UI/Botao";

function GerenciaDespesa({ route, navigation }) {
  const idDaDespesa = route.params?.idDespesa;

  const editando = !!idDaDespesa;

  useLayoutEffect(() => {
    navigation.setOptions(
      { title: editando ? "Editar despesa" : "Add despesa" },
      [navigation, editando]
    );
  });

  function deletaDespesaHandler() {
    navigation.goBack();
  }

  function cancelHandler() {
    navigation.goBack();
  }

  function confirmHandler() {
    navigation.goBack();
  }

  return (
    <View style={styles.container}>
      <View style={styles.containerBotoes}>
        <Botao
          style={styles.botao}
          mode="flat"
          onPress={() => {
            cancelHandler;
          }}
        >
          Cancelar
        </Botao>
        <Botao
          style={styles.botao}
          onPress={() => {
            confirmHandler;
          }}
        >
          {editando ? "Atualizar" : "Add"}
        </Botao>
      </View>
      {editando && (
        <View style={styles.deleteContainer}>
          <IconeBotao
            icone="trash"
            color={GlobalStyles.colors.error500}
            size={36}
            onPress={() => {
              deletaDespesaHandler;
            }}
          />
        </View>
      )}
    </View>
  );
}
export default GerenciaDespesa;

const styles = StyleSheet.create({
  deleteContainer: {
    marginTop: 16,
    paddingTop: 8,
    borderTopWidth: 2,
    borderTopColor: GlobalStyles.colors.primary200,
    alignItems: "center",
  },

  container: {
    flex: 1,
    padding: 24,
    backgroundColor: GlobalStyles.colors.primary800,
  },

  containerBotoes: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },

  botao: { minWidth: 120, marginHorizontal: 8 },
});
