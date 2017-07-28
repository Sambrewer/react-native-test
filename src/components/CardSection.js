import React from 'react';
import { View } from 'react-native';

const CardSection = (props) => (
    <View style={styles.containerStyle}>
      {props.children}
    </View>
  );


const styles = {
  containerStyle: {
    borderBottomWidth: 1,
    padding: 10,
    backgroundColor: '#fff',
    justifyContent: 'space-around',
    alignItems: 'center',
    flexDirection: 'row',
    borderColor: '#ddd',
    position: 'relative'
  }
};

export default CardSection;
