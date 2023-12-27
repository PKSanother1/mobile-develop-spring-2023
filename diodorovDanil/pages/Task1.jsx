import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment } from '../store/slice/stateSlice'

const Task1 = () => {
    const state = useSelector((state) => state.state)
    const dispatch = useDispatch()

    const incrementHandle = () => {
        dispatch(increment())
    }

    const decrementHandle = () => {
        dispatch(decrement())
    }

    return (
        <View style={styles.container}>
            <Text style={styles.text}>{state}</Text>
            <TouchableOpacity style={styles.button} onPress={incrementHandle}>
                <Text>Добавить</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={decrementHandle}>
                <Text>Отнять</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        color: 'white',
    },
    button: {
        alignItems: 'center',
        backgroundColor: '#DDDDDD',
        padding: 10,
        width: 200,
        marginTop: 10,
    },
    text: {
        color: 'white',
        fontSize: 30,
    },
})

export default Task1
