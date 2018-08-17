import React, { Component } from 'react';
import { FlatList, Text } from 'react-native';

import call from 'react-native-phone-call'


class SuggestionList extends Component {

  callPhoneNumber(args){
    call(args).catch(console.error)
  }

  render() {
    const args = {
      number: '952941673', // String value with the number to call
      prompt: false // Optional boolean property. Determines if the user should be prompt prior to the call
    }




    const list = [
      {
        title: 'Numero Francisco tel:952941673',
        key: '1'
      },
      {
        title: 'genaro',
        key: '2'
      }
    ];
    return (
      <FlatList
        data={list}
        renderItem={({item}) => <Text>{item.title}</Text>}
        onPress={() => callPhoneNumber(args)}
      />
    )
  }
}

export default SuggestionList;
