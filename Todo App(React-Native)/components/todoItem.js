import React from "react";
import { TouchableOpacity, StyleSheet, Text } from "react-native";

export default function TodoItem({ item, handlePress }) {
    return (
        <TouchableOpacity onPress={() => handlePress(item.key)}>
            <Text style={styles.item}>{item.text}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    item: {
        padding: 10,
        marginTop: 10,
        borderColor: '#bbb',
        borderWidth: 1,
        borderRadius: 10,
        borderStyle: 'dashed'

    }
})