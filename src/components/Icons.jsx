import React from 'react';
import { Image, StyleSheet } from 'react-native';

const Icons = ({ type }) => {

  let imageSource;
  let iconStyle = styles.icon;

  switch (type) {
    case 'close':
      imageSource = require('../assets/common/close.png');
      iconStyle = styles.closeIcon;
      break;
    case 'back':
      imageSource = require('../assets/common/go-back.png');
      iconStyle = styles.backIcon;
      break;
    case 'folder':
      imageSource = require('../assets/common/folder.png');
      break;
    case 'edit':
      imageSource = require('../assets/common/edit.png');
      break;
    case 'delete':
      imageSource = require('../assets/common/delete.png');
      break;
    case 'plus':
      imageSource = require('../assets/common/plus.png');
      iconStyle = styles.backIcon;
      break;
  }

  return (
    <Image 
      source={imageSource} 
      style={iconStyle} 
    />
  );
};

const styles = StyleSheet.create({
  icon: {
    width: '100%',
    height: '100%',
    objectFit: 'cover'
  },
  closeIcon: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    tintColor: '#8b7e56',
  },
  backIcon: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    tintColor: '#f9a500',
  },
});

export default Icons;
