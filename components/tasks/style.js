import { StyleSheet } from 'react-native'
const styles=StyleSheet.create({
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
      square:{
        width:48,
        height:36,
        borderRadius:10,
        backgroundColor:"#ffae",
        alignItems:"center",
        justifyContent:"center"
      },
      number:{
        
        color:'black',
        fontWeight:"bold",
        borderColor:"pink"
      }
})

export default styles;