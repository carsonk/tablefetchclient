import React from 'react'
import { TouchableHighlight, Text, View } from 'react-native'
import { Link } from 'react-router-native'
import PropTypes from 'prop-types'
import { StyleSheet } from 'react-native';

const CardLink = ({ text, onPress }) => {
  return (
    <TouchableHighlight style={styles.homeLinkView} onPress={onPress}>
      <Text style={styles.homeLinkText}>{text}</Text>
    </TouchableHighlight>
  );
};

const styles = StyleSheet.create({
  homeLinkView: {
    width: '30%',
    height: '20%',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(52,52,52,.7)',
    padding: 10,
    borderRadius: 8
  },
  homeLinkText: {
    fontSize: 30,
    color: 'white'
  }
});

CardLink.propTypes = {
  onPress: PropTypes.func.isRequired,
  text: PropTypes.string.isRequired
};

export default CardLink;
