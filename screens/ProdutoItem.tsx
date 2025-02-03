import React from "react";
import { Text, View, TouchableOpacity } from "react-native";
import { styles } from "./CommonStyles.js";

export default function ProdutoItem(props) {
  return (
    <View style={styles.container} id={String(props.produto.codigo)}>
      <Text style={styles.textItem}>
        {props.produto.codigo} - {String(props.produto.nome)}
      </Text>
      <Text style={styles.textItem}>
        Quantidade: {props.produto.quantidade}
      </Text>
      <View style={styles.buttonsContainer}>
        <TouchableOpacity style={styles.deleteButton} onPress={props.onDelete}>
          <Text style={styles.buttonText}>X</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
