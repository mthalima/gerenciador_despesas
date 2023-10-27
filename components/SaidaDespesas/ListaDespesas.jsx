import { FlatList } from "react-native";
import ItemDespesa from "./ItemDespesa";

function renderItemDespesa(itemData) {
  return <ItemDespesa {...itemData.item} />;
}

function ListaDespesas({ despesas }) {
  return (
    <FlatList
      data={despesas}
      renderItem={renderItemDespesa}
      keyExtractor={(item) => item.id}
    ></FlatList>
  );
}

export default ListaDespesas;
