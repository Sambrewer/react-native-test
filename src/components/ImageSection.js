import React from 'react';
import { View } from 'react-native';

const ImageSection = (props) => (
  <View style={styles.imageSection}>
    {props.children}
  </View>
);

const styles = {
  imageSection: {
    justifyContent: 'space-around',
    height: 225,
    alignItems: 'center',
    borderBottomWidth: 1,
    borderColor: '#ddd'
  }
};

export default ImageSection;
