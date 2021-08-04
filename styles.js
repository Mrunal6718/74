import {StyleSheet} from 'react-native'

const styles = StyleSheet.create({
    container: {
        //flex: 1, 
        justifyContent: 'center', 
        alignItems: 'center' ,
        backgroundColor:'#f8f8f8',
        height:'100%',
    },
    button: {
      marginTop:10,
      marginBottom:30,
      borderRadius:10,
      marginLeft:'2%',
      width:"60%",
      height:27,
      backgroundColor:'#F28123'
    },
    buttonText: {
      fontWeight:'bold',
      textAlign:'center',
      marginTop:3,
      color:'#f8f8f8'
    },
    input: { 
      borderColor: '#38726C', 
      //marginLeft:'30%',
      borderWidth: 2,
      width:300, 
      marginTop:15 
    },
    inputS: { 
      borderColor: '#38726C', 
      borderWidth: 1.5,
      //marginLeft:'30%',
      width:300, 
      marginTop:15,
      height:175
    },
    img: {
      width:100,
      height:100,
      marginTop:10,
      marginLeft:'10%',
    },
    text: {
      color:'#563F1B',
      fontSize:18,
      marginLeft:5,
      marginTop:100
    },
    bg: {
      flex: 1,
      resizeMode: "stretch",
      justifyContent: "center",
      opacity:20
    },
    bar: {
      width:'90%',
      height:'10%',
      borderColor: '#38726C', 
      borderWidth: 2,
      borderRadius:5
    },
    comment: {
      color:'#563F1B',
      fontSize:12, 
      marginBottom:30,
      justifyContent:'center',
      marginLeft:'10%'
    }
});

export default styles