import React from 'react';
import { Text, Image, View } from 'react-native';
import FontAwesome, { Icons } from 'react-native-fontawesome';
import Card from './Card';
import CardSection from './CardSection';
import ImageSection from './ImageSection';

const CategoryDetail = (props) => {
  const {
    name,
    id,
    image_url,
    avg_revenue,
    avg_vol,
    avg_review,
    page_space,
    max_revenue
  } = props.category;
  const {
    cardHeaderText,
    imageStyle,
    imageFooter,
    textStyle,
    textStyle2,
    textStyle3
  } = styles;

  return (
    <Card>
      <CardSection>
        <Text style={cardHeaderText}>{name} </Text>
        <Text style={cardHeaderText}>({id})</Text>
      </CardSection>

      <ImageSection style={{ flexDirection: 'column' }}>
        <Image source={{ uri: image_url }} style={imageStyle} />
        <View style={imageFooter}>
          <Text style={textStyle}>
            Avg Revenue
          </Text>
          <Text style={textStyle2}>${avg_revenue}</Text>
          <FontAwesome style={textStyle}>{Icons.infoCircle}</FontAwesome>
        </View>
      </ImageSection>

      <CardSection>
        <View style={{ alignItems: 'center' }}>
          <Text style={textStyle}>{avg_vol}</Text>
          <Text style={textStyle3}>Avg Volume</Text>
          <Text style={textStyle}>{avg_review}</Text>
          <Text style={textStyle3}>Avg Review Count</Text>
        </View>
        <View style={{ alignItems: 'center' }}>
          <Text style={textStyle}>{page_space}</Text>
          <Text style={textStyle3}>1st Page Space</Text>
          <Text style={textStyle}>Max Revenue</Text>
          <Text style={textStyle3}>{max_revenue}</Text>
        </View>
      </CardSection>
    </Card>
  );
};

const styles = {
  cardHeaderText: {
    color: 'dodgerblue',
    fontSize: 16
  },
  imageStyle: {
    height: 135,
    width: '60%'
  },
  imageFooter: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    width: '60%'
  },
  textStyle: {
    color: 'black',
    fontSize: 14
  },
  textStyle2: {
    color: 'black',
    fontSize: 24
  },
  textStyle3: {
    color: '#aaa',
    fontSize: 14
  }
};

export default CategoryDetail;
