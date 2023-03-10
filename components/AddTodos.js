import React, { useState } from 'react'
import { Button, StyleSheet, TextInput, View } from 'react-native'

export const AddTodos = ({ SubmitHandler }) => {

    const [text, setText] = useState()

    const changeHandler = (val) => {
        setText(val.trim())
    }

  return (
    <View>
        <TextInput 
            style={styles.input}
            placeholder='Add todo...'
            onChangeText={changeHandler} 
        />
        <Button
            title='Add todo' color='#f05137'
            onPress={() => SubmitHandler(text)}
        />
    </View>
  )
}

const styles = StyleSheet.create({
    input: {
        padding: 5,
        borderWidth: 1,
        marginBottom: 10,
        paddingHorizontal: 10
    }
})
