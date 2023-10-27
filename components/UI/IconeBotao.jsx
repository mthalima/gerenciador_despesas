import { Pressable, StyleSheet, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";

function IconeBotao({ icone, size, color, onPress }) {
  return (
    <Pressable onPress={onPress} style={(pressed) => pressed && styles.pressed}>
      <View style={styles.buttonContainer}>
        <Ionicons name={icone} size={size} color={color}></Ionicons>
      </View>
    </Pressable>
  );
}

export default IconeBotao;

const styles = StyleSheet.create({
  buttonContainer: {
    borderRadius: 24,
    padding: 6,
    marginHorizontal: 16,
    marginVertical: 2,
  },
  pressed: {
    opacity: 0.7,
  },
});
