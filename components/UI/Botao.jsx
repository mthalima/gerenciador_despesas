import { View, Text, Pressable, StyleSheet } from "react-native";
import { GlobalStyles } from "../../constants/styles";

function Botao({ children, onPress, mode, style }) {
  return (
    <View style={style}>
      <Pressable
        onPress={onPress}
        style={({ pressed }) => pressed && styles.pressed}
      >
        <View style={[styles.botao, mode === "flat" && styles.flat]}>
          <Text
            style={[styles.textoBotao, mode === "flat" && styles.textoFlat]}
          >
            {children}
          </Text>
        </View>
      </Pressable>
    </View>
  );
}

export default Botao;

const styles = StyleSheet.create({
  botao: {
    borderRadius: 4,
    padding: 8,
    backgroundColor: GlobalStyles.colors.primary500,
  },

  flat: { backgroundColor: "transparent" },

  textoBotao: { color: "white", textAlign: "center" },

  textoFlat: { color: GlobalStyles.colors.primary200 },

  pressed: {
    opacity: 0.75,
    backgroundColor: GlobalStyles.colors.primary100,
    borderRadius: 4,
  },
});
