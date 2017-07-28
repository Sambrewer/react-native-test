import React from 'react';
import { View, TouchableOpacity } from 'react-native';
import FontAwesome from 'react-native-fontawesome';

const Button = (props) => (
  <View>
    <TouchableOpacity>
      <FontAwesome>{props.icon}</FontAwesome>
    </TouchableOpacity>
  </View>
);


export default Button;
