/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Image
} from 'react-native';

import Home from './src/containers/home';
import Header from './src/components/header';

import CallDetectorManager from 'react-native-call-detection';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

type Props = {};
export default class App extends Component<Props> {

  startListenerTapped() {

	this.callDetector = new CallDetectorManager((event)=> {
    console.log("callDetector",event);
    console.log("callDetector",this);
    console.log("callDetector",this.callDetector);
    console.log("callDetector",this.callDetector.callDetector);
	// For iOS event will be either "Connected",
	// "Disconnected","Dialing" and "Incoming"

	// For Android event will be either "Offhook",
	// "Disconnected", "Incoming" or "Missed"


	if (event === 'Disconnected') {
	// Do something call got disconnected
	}
	else if (event === 'Connected') {
	// Do something call got connected
	// This clause will only be executed for iOS
	}
	else if (event === 'Incoming') {
	// Do something call got incoming
  console.log("Incoming");
  console.log("Incoming",this);
	}
	else if (event === 'Dialing') {
	// Do something call got dialing
	// This clause will only be executed for iOS
	}
	else if (event === 'Offhook') {
	//Device call state: Off-hook.
	// At least one call exists that is dialing,
	// active, or on hold,
	// and no calls are ringing or waiting.
	// This clause will only be executed for Android
	}
	else if (event === 'Missed') {
    	// Do something call got missed
    	// This clause will only be executed for Android
    }
},
true, // if you want to read the phone number of the incoming call [ANDROID], otherwise false
()=>{
  console.log("callback",this);


}, // callback if your permission got denied [ANDROID] [only if you want to read incoming number] default: console.error
{
title: 'Phone State Permission',
message: 'This app needs access to your phone state in order to react and/or to adapt to incoming calls.'
} // a custom permission request message to explain to your user, why you need the permission [recommended] - this is the default one
)
}

stopListenerTapped() {
	this.callDetector && this.callDetector.dispose();
}


  render() {
    console.log(this);
    var numero = this.startListenerTapped();
    console.log("numero",numero);

    return (
      <View>
        <Home>
          <Header>
            <Text>HOLA HEADER</Text>
          </Header>
          <Text style={styles.instructions}>
            ACA VA UN TEXTO
          </Text>
        </Home>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
