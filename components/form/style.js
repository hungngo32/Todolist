import { StyleSheet } from 'react-native'
const styles=StyleSheet.create({
  addTask:{
    bottom:30,
    paddingHorizontal:20,
    width:'100%',
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center',
    
  },
  input:{
    height:45,
    width:'80%',
    backgroundColor:'#fff',
    borderWidth:2,
    borderColor:'green',
    borderRadius:20,
    paddingHorizontal:20,
    paddingVertical:10
  },
  iconWapper:{
    width:45,
    height:45,
    borderRadius:100,
    borderWidth:2,
    borderColor:'green',
    alignItems:'center',
    justifyContent:'center'
    
  },
  icon:{
    fontSize:20,
    fontWeight:'bold'
  }
})

export default styles;