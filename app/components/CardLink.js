import React from 'react'
import { Text, View } from 'react-native'
import { Link } from 'react-router-native'
import PropTypes from 'prop-types'
import { StyleSheet } from 'react-native';

const CardLink = ({ children, to, text }) => {
  return (
    <Link to={to} style={styles.homeLink}>
      <View style={styles.homeLinkView}>
        <Text style={styles.homeLinkText}>{text}</Text>
      </View>
    </Link>
  );
};

const styles = StyleSheet.create({
  homeLink: {
    width: '40%',
    height: '30%'
  },
  homeLinkView: {
    width: '100%',
    height: '100%',
    alignItems: 'flex-end',
    justifyContent: 'flex-end',
    backgroundColor: 'white',
    padding: 20
  },
  homeLinkText: {
    fontSize: 20
  }
});

CardLink.propTypes = {
  to: PropTypes.string.isRequired,
  text: PropTypes.string
};

export default CardLink;
