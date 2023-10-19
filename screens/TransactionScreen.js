import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from "react-native-safe-area-context";


const TransactionScreen = () => {
  return (
    <SafeAreaView>
      <ScrollView>
        <View>
          <Text>TransactionScreen</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default TransactionScreen

const styles = StyleSheet.create({})