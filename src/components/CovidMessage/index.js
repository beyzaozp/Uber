import React from 'react';
import {View, Text} from 'react-native';

import styles from './styles';

const CovidMessage = props => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Travel only if necessary</Text>
      <Text style={styles.text}>
        This method has the advantage of fonts being copied from this module at
        build time so that the fonts and JS are always in sync, making upgrades
        painless.
      </Text>
      <Text style={styles.learnMore}>Learn more</Text>
    </View>
  );
};

export default CovidMessage;
