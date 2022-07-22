import React, { useState } from "react";
import { StyleSheet, View, TextInput, Button } from "react-native";


export default function AddTodo({ submitTodo }) {
    const [text, setText] = useState('')
    const handleChange = (value) => {
        setText(value)
    }
    return (
        <View>
            <TextInput
                placeholder="add todo...."
                onChangeText={handleChange}
                style={styles.input}
            />
            <Button color='coral' title='Add Task' onPress={() => submitTodo(text)} />
        </View>
    )


}

const styles = StyleSheet.create({
    input: {
        marginBottom: 10,
        paddingHorizontal: 8,
        paddingVertical: 6,
        borderBottomWidth: 1,
        borderBottomColor: '#ddd',
        outlineStyle: 'none',
    }
})