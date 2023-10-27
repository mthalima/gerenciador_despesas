import { Pressable, StyleSheet, Text, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { GlobalStyles } from "../../constants/styles";
import { dataFormatada } from "../../util/Date";

function ItemDespesa({ id, descricao, preco, data }) {
  const navigation = useNavigation();

  function despesaPressHandler() {
    navigation.navigate("GerenciaDespesa", { idDespesa: id });
  }

  return (
    <Pressable
      onPress={despesaPressHandler}
      style={({ pressed }) => pressed && styles.pressed}
    >
      <View style={styles.itemDespesa}>
        <View>
          <Text style={[styles.textoBase, styles.descricao]}>{descricao}</Text>
          <Text style={styles.textoBase}>{dataFormatada(data)}</Text>
        </View>
        <View style={styles.totalContainer}>
          <Text style={styles.quantia}>{preco.toFixed(2)}</Text>
        </View>
      </View>
    </Pressable>
  );
}

export default ItemDespesa;

const styles = StyleSheet.create({
  itemDespesa: {
    padding: 12,
    backgroundColor: GlobalStyles.colors.primary500,
    marginVertical: 8,
    flexDirection: "row",
    justifyContent: "space-between",
    borderRadius: 6,
    elevation: 3,
  },

  textoBase: {
    color: GlobalStyles.colors.primary50,
  },

  descricao: {
    fontSize: 16,
    marginBottom: 4,
    fontWeight: "bold",
  },

  totalContainer: {
    paddingHorizontal: 12,
    paddingVertical: 4,
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 4,
    minWidth: 70,
  },

  quantia: {
    color: GlobalStyles.colors.primary500,
    fontWeight: "bold",
  },

  pressed: {
    opacity: 0.7,
  },
});
