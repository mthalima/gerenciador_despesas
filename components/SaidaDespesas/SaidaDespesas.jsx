import { StyleSheet, View } from "react-native";
import { GlobalStyles } from "../../constants/styles";
import ResumoDespesas from "./ResumoDespesas";
import ListaDespesas from "./ListaDespesas";

const DESPESAS_DUMMY = [
  {
    id: "d1",
    descricao: "Camisa de botao",
    preco: 46.9,
    data: new Date("2023-02-11"),
  },

  {
    id: "d2",
    descricao: "O barro",
    preco: 150.0,
    data: new Date("2023-02-11"),
  },

  {
    id: "d3",
    descricao: "Caixa de ovos",
    preco: 18.0,
    data: new Date("2023-02-11"),
  },

  {
    id: "d4",
    descricao: "Bolo",
    preco: 13,
    data: new Date("2023-02-11"),
  },

  {
    id: "d5",
    descricao: "Areia de gato",
    preco: 418.0,
    data: new Date("2023-02-11"),
  },
  {
    id: "d6",
    descricao: "Camisa de botao",
    preco: 46.9,
    data: new Date("2023-02-11"),
  },

  {
    id: "d7",
    descricao: "O barro",
    preco: 150.0,
    data: new Date("2023-02-11"),
  },

  {
    id: "d8",
    descricao: "Caixa de ovos",
    preco: 18.0,
    data: new Date("2023-02-11"),
  },
];

function SaidaDespesas({ despesas, periodoDespesa }) {
  return (
    <View style={styles.container}>
      <ResumoDespesas periodo={periodoDespesa} despesas={DESPESAS_DUMMY} />
      <ListaDespesas despesas={DESPESAS_DUMMY}></ListaDespesas>
    </View>
  );
}

export default SaidaDespesas;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 24,
    backgroundColor: GlobalStyles.colors.primary700,
    flex: 1,
  },
});
