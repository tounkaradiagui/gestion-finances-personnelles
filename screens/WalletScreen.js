import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'

const WalletScreen = () => {
  return (
    <SafeAreaView>
      <ScrollView>
        <View>
          <Text>Portefeuille</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default WalletScreen

const styles = StyleSheet.create({})