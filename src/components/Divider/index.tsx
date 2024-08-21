import React from 'react'
import { View, StyleSheet } from 'react-native'
import { styles } from './style'

const Divider = () => {
  return (
    <View style={styles.dividerContainer}>
      <View style={styles.divider}></View>
    </View>
  )
}

export default Divider
