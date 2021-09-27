import  {StyleSheet} from 'react-native';

export default StyleSheet.create({
    container: {
        flex: 1,
        flexDirection:'row',
        marginTop:15,
    },
    img_container:{
        flex:1,
        marginLeft:5,
    
      },
    image:{
        height: 100,
        width: 100,
        resizeMode: 'contain' ,
    
        borderRadius:100,
      },
    content:{
        flex:3,
        marginLeft:25,
    },
    content_top:{
        flex:1
      },
    title:{
        fontWeight:"bold",
        fontSize:12,
        marginTop:30,
      },
      content_bottom:{
        flex:0.3,

        
        
      },
      price:{
        color:"#FCA311",
        fontWeight:"bold",
      },
})