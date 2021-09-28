import { StyleSheet } from "react-native";

export default StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: "#E5E5E5"
        

    },

    logo_container:{
        flex:1,
        alignItems: "center",
        justifyContent:"center",
    },
    body_container:{
        alignItems: "center",
        flex:2
    },
    inputView: {
        backgroundColor: "#FCA311",
        borderRadius: 30,
        width: "70%",
        height: 45,
        marginBottom: 20,
        alignItems: "center",
      },
    logo_text:{
        marginTop:60,
        fontSize:20,
        fontWeight:"bold",
    },
    input:{
        color:"#14213D",
        height: 50,
        flex: 1,
        padding: 10,
    },
    forgot_button:{
        height: 30,
        marginBottom: 30,
    },
    loginBtn:{
        width:"80%",
        borderRadius:25,
        height:50,
        alignItems:"center",
        justifyContent:"center",
        marginTop:40,
        backgroundColor:"#14213D",
    },
    loginText:{
        color: "#FCA311",
        fontWeight:"bold",
    }

})