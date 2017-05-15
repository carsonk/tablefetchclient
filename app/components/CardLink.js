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
    width: '30%',
    height: '20%'
  },
  homeLinkView: {
    width: '100%',
    height: '100%',
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
  to: PropTypes.string.isRequired,
  text: PropTypes.string
};

export default CardLink;
