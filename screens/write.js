import React from 'react';
import { Text, View, TouchableOpacity, TextInput, Image, StyleSheet, ToastAndroid, KeyboardAvoidingView, Alert} from 'react-native';
import styles from '../styles';
import AppHeader from '../components/AppHeader';
import uri from '../images/uri';
import * as firebase from 'firebase';
import db from '../config';

export default class WritingScreen extends React.Component {
  constructor(){
    super();
    this.state = {
      story:'',
      author:'',
      title:''
    }
  }

  submitStory = async ()=>{
    db.collection("Stories").doc(this.state.title).set({
      'Title':this.state.title,
      'Author':this.state.author,
      'Story':this.state.story
    }).then(function() {
      console.log("Story has been successfully submitted");
      //ToastAndroid.show("Story has been successfully submitted", ToastAndroid.SHORT);      not working---ERROR: ToastAndroid.show is not a function
      alert("Yeah!! Your Story has been successfully submitted");
    }).catch(function(error) {
      console.error("Error: ", error);
    });
  }

  render() {
    return (
        <KeyboardAvoidingView style={styles.container} behavior = "padding" enabled >
            <AppHeader />
            <Image source = {{uri:uri.write}} style = {styles.img} />
            <TextInput 
              style = {styles.input}
              placeholder = 'Title'
              value = {this.state.title}
              editable
              textAlignVertical = 'top'
              onChangeText = {text=>{ this.setState({
                    title:text
              })}}
            />
            <TextInput 
              style = {styles.input}
              placeholder = 'Author'
              value = {this.state.author}
              editable
              textAlignVertical = 'top'
              onChangeText = {text=>{ this.setState({
                    author:text
              })}}
            />
            <TextInput 
              style = {styles.inputS}
              placeholder = 'Your Story'
              value = {this.state.story}
              editable
              multiline = 'true'
              textAlignVertical = 'top'
              onChangeText = {text=>{ this.setState({
                    story:text
              })}}
            />
            <TouchableOpacity
              style = {styles.button}
              onPress = {async()=>{
                this.submitStory()
              }}
            >
              <Text style = {styles.buttonText}>SUBMIT</Text>
            </TouchableOpacity>
        </KeyboardAvoidingView>
    );
  }
}