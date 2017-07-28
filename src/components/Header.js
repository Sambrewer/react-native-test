import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import FontAwesome, { Icons } from 'react-native-fontawesome';


const Header = (props) => {
  const { headerStyle, textStyle } = styles;

  return (
    <View style={headerStyle} >
      <TouchableOpacity>
        <FontAwesome style={textStyle}>{Icons.bars}</FontAwesome>
      </TouchableOpacity>
      <Text style={textStyle}>{props.navText}</Text>
      <TouchableOpacity>
        <FontAwesome style={textStyle}>{Icons.search}</FontAwesome>
      </TouchableOpacity>
    </View>
  );
};

const styles = {
  headerStyle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: 'dodgerblue',
    alignItems: 'center',
    height: 40,
    padding: 10
  },
  textStyle: {
    color: 'white',
    fontSize: 18,
  }
};

export default Header;
