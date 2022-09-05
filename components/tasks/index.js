import { View, Text,TouchableOpacity } from 'react-native'
import React from 'react'
import styles from './style'
const Task = (props) => {
  return (
    <TouchableOpacity
        onPress={props.onDeleteTask}
    >
    < View style={styles.item} >
        <View style={styles.square}>
          <Text style={styles.number}>{props.number}</Text>
        </View>
        <Text>{props.title}</Text>

      </View>
    </TouchableOpacity>
  ) 
}

export default Task; 