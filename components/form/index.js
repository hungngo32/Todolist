import { View, Text,TextInput,TouchableOpacity,KeyboardAvoidingView,Keyboard } from 'react-native'
import React,{useState} from 'react'
import styles from './style'
const Form = (props) => {
  const [task,setTask]=useState('')

  const handleAddTask=()=>{
    if(task.length===0){
        alert("Nhập task đi ")
        return false;
    }
    props.onAddTask(task)
    setTask('')
    Keyboard.dismiss()
  }
  return (
    <KeyboardAvoidingView>
        <View style={styles.addTask}>
      <TextInput value={task} onChangeText={(text)=>setTask(text)} style={styles.input}/>
      <TouchableOpacity onPress={handleAddTask}>
      <View  style={styles.iconWapper}>
        <Text style={styles.icon}>+</Text>
      </View>
      </TouchableOpacity>
    </View>
    </KeyboardAvoidingView>
    
  )
}

export default Form;