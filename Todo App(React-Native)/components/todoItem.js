import React from "react";
import { TouchableOpacity, StyleSheet, Text, View } from "react-native";
import { MaterialCommunityIcons } from '@expo/vector-icons';

export default function TodoItem({ item, handlePress }) {
    return (

        <TouchableOpacity onPress={() => handlePress(item.key)}>
            <View style={styles.item}>
                <MaterialCommunityIcons name="delete-alert-outline" size={21} style={styles.icon} />
                <Text style={styles.content}>{item.text}</Text>

            </View >
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
        borderStyle: 'dashed',
        flexDirection: 'row'

    },
    icon: {
        color: 'red',

    },
    content: {
        marginLeft: 15
    }
})