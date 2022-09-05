import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,TouchableOpacity,ScrollView,Alert } from 'react-native';
import Task from './components/tasks'
import Form from './components/form'
import { useState } from 'react';
export default function App() {
  const [taskList,setTaskList]=useState([])
  const handleAddTask=(task)=>{
    setTaskList([...taskList,task])
  }
  const handleDeleteTask=(index)=>{
    Alert.alert(
      "Thông báo",
      "Làm xong chưa mà xóa ???",
      [
        {
          text: "Cancel",
          onPress: () => 
         {}
        },
        { text: "OK", onPress: () => {
          let taskListTmp=[...taskList];
          taskListTmp.splice(index,1);
          setTaskList(taskListTmp);
        }, }
      ]
    );
  }
  return (
    <View style={styles.container}>
      <View style={styles.body}>
          <Text style={styles.header}> Todo List</Text>
          <ScrollView>
            {
              taskList.map((item,index)=>{
                return <Task key={index} title={item} number={index+1} onDeleteTask={()=>handleDeleteTask(index)}/>
              })
            }
         
          </ScrollView>
      </View>
      <Form onAddTask={handleAddTask}/>
    </View>
    
  );
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:"#e7feef",
  },
  body:{
    flex:1,
    paddingTop:50,
    paddingHorizontal:18
  },
  header:{
    fontSize:30,
    color:"#21a3d0",
    fontWeight:"bold"
  },
  item:{
    flexDirection: 'row',
    backgroundColor:"#fff",
    marginBottom:15,
    paddingVertical: 14,
    paddingHorizontal:20,
    borderRadius:10,
    alignItems:"center",
    justifyContent:"space-between"
  },
});