import * as React from "react";
import {TextInput, View, StyleSheet,Text,TouchableOpacity,Alert,Modal,ScrollView,KeyboardAvoidingView} from 'react-native';
import firebase from 'firebase';
import db from '../config';

export default class SignUpLoginScreen extends React.Component{
    constructor(){
        super();
        this.state = {
            emailId:"",
            password:"",
            isPasswordVisible:true,
        }
    }

    userSignUp = (username,password)=>{
        firebase.auth().createUserWithEmailAndPassword(username,password)
        .then(()=>{
            return Alert.alert("User added successfully")
        })
        .catch(function(error){
            var errorVode = error.code
            var errorMessage = error.message
            return Alert.alert(errorMessage)
        })
    }

    userLogin=(emailId,password)=>{
        firebase.auth().signInWithEmailAndPassword(emailId,password)
        .then(()=>{
            return Alert.alert("User Login Successfully")
        })
        .catch(function(error){
            var errorCode = error.Code
            var errorMessage = error.message
            return Alert.alert(errorMessage)
        })
    }

    render(){
        return(
            <View style = {styles.constainer}>
                <View>
                    <Text style = {styles.title}>Barter</Text>
                </View>
                <View>
                    <TextInput
                    style = {styles.login}
                    placeholder = "enter your emailId."
                    keyboardType = 'email-address'
                    onChangeText = {(text)=>{
                        this.setState({
                            emailId:text
                        })
                    }}
                    />
                    <TextInput
                    style = {styles.login}
                    placeholder = "enter your password."
                    secureTextEntry = {this.state.isPasswordVisible}
                    onChangeText = {(text)=>{
                        this.setState({
                            password:text
                        })
                    }}
                    />
                </View>
                <View>
                <TouchableOpacity 
                    style = {styles.loginShowPassword}
                    onPress = {()=>{
                        this.setState({
                            isPasswordVisible:false
                        })
                    }}>
                        <Text style = {styles.passwordText}>Show Password</Text>
                </TouchableOpacity>
                <TouchableOpacity 
                    style = {styles.loginShowPassword}
                    onPress = {()=>{
                        this.setState({
                            isPasswordVisible:true
                        })
                    }}>
                        <Text style = {styles.passwordText}>Hide Password</Text>
                </TouchableOpacity>
                <TouchableOpacity 
                    style = {[styles.Buttonlogin,{marginBottom:50,marginTop:60}]}
                    onPress = {()=>{
                        this.userLogin(this.state.emailId,this.state.password)
                    }}>
                        <Text style = {styles.loginText}>Login</Text>
                </TouchableOpacity>
                <TouchableOpacity 
                    style = {styles.ButtonsignUp}
                    onPress = {()=>{
                        this.userSignUp(this.state.emailId,this.state.password)
                    }}>
                        <Text style = {styles.signUpText}>Sign Up</Text>
                </TouchableOpacity>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    constainer:{
        flex:1,
        alignItems:'center',
        backgroundColor:'skyblue',
    },
    title:{
        textAlign:'center',
        fontSize:50,
        fontWeight:'200',
        marginTop:100,
        paddingBottom:90,
        color:'red',
    },
    login:{
        marginTop:10,
        width:350,
        height:50,
        borderBottomWidth:1.5,
        borderColor:"yellow",
        fontSize:22,
        alignSelf:"center",
        color:"black",
        paddingLeft:10,
        paddingRight:10,
    },
    loginShowPassword:{
        width:150,
        height:40,
        justifyContent:"center",
        alignItems:'center',
        borderRadius:25,
        backgroundColor:"lightgreen",
        marginTop:10,
    },
    passwordText:{
        color:'red',
        fontWeight:'100',
        fontSize:15,
    },
    Buttonlogin:{
        width:300,
        height:50,
        justifyContent:'center',
        alignItems:'center',
        borderRadius:25,
        backgroundColor:"orange",
        shadowColor: "black",
        alignSelf:"center",
        shadowOffset: {
           width: 0,
           height: 8,
        },
        shadowOpacity: 0.30,
        shadowRadius: 10.32,
        elevation: 16,
        padding: 10,
    },
    loginText:{
        color:'blue',
        fontWeight:'200',
        fontSize:20,
    },
    ButtonsignUp:{
        width:300,
        height:50,
        justifyContent:'center',
        alignItems:'center',
        borderRadius:25,
        backgroundColor:"orange",
        shadowColor: "black",
        alignSelf:"center",
        shadowOffset: {
           width: 0,
           height: 8,
        },
        shadowOpacity: 0.30,
        shadowRadius: 10.32,
        elevation: 16,
        padding: 10,
        marginBottom:50,
    },
    signUpText:{
        color:'blue',
        fontWeight:'200',
        fontSize:20,
    }
})