import React from 'react';
import LottieView from 'lottie-react-native';

export default class BookAnimation extends React.Component {
    render(){
        return(
            <LottieView 
                source = {require('../assets/4887-book.json')}
                style = {{width: "60%"}}
                autoPlay loop />
        )
    }
}