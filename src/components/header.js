import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  SafeAreaView
} from 'react-native';

function Header(props){
  return(
    <View>
      <SafeAreaView>
        <View style={styles.container}>
          <Image source={require('../../assets/LogoUTP.jpg')}
            style={styles.logo}
          />
        </View>
        <View>
          {props.children}
        </View>
      </SafeAreaView>
    </View>
  )
}

const styles = StyleSheet.create({
  logo: {
    width: 80,
    height: 26,
    resizeMode: 'contain',
  },
  container: {
    paddingVertical: 10,
    paddingHorizontal: 10,
  }
});


export default Header;
