import { useEffect, useState } from 'react'
import { StyleSheet, Text, View } from 'react-native'

const Task2 = () => {
    const [users, setUser] = useState([])

    const getUsers = async () => {
        const res = await fetch(
            'https://jsonplaceholder.typicode.com/users?_start=0&_limit=10'
        )
        let newUsers = await res.json()
        setUser(newUsers)
    }

    useEffect(() => {
        getUsers()
    }, [])

    return (
        <View style={styles.container}>
            {users.map((user) => {
                return (
                    <View style={styles.block} key={user.id}>
                        <Text style={styles.text}>{user.name}</Text>
                    </View>
                )
            })}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 30,
    },
    block: {
        padding: 20,
        borderBottomColor: 'white',
        borderBottomWidth: 1,
    },
    text: {
        color: 'white',
        fontSize: 20,
    },
})

export default Task2
