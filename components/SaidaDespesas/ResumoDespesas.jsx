import { Text, View, StyleSheet } from "react-native";

import { GlobalStyles } from "../../constants/styles";

function ResumoDespesas({ periodo, despesas }) {
  const somaDespesas = despesas.reduce((soma, despesa) => {
    return soma + despesa.preco;
  }, 0);

  return (
    <View style={styles.container}>
      <Text style={styles.periodo}>{periodo}</Text>
      <Text style={styles.soma}>{somaDespesas.toFixed(2)}R$</Text>
    </View>
  );
}

export default ResumoDespesas;

const styles = StyleSheet.create({
  container: {
    padding: 8,
    backgroundColor: GlobalStyles.colors.primary50,
    borderRadius: 6,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  soma: {
    fontSize: 24,
    fontWeight: "bold",
    color: GlobalStyles.colors.primary500,
  },

  periodo: {
    fontSize: 12,
    fontWeight: "bold",
    color: GlobalStyles.colors.primary500,
  },
});
