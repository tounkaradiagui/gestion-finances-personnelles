import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'

const ProfileScreen = () => {
  return (
    <SafeAreaView>
      <ScrollView>
        <View>
          <Text>Profile Screen</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default ProfileScreen

const styles = StyleSheet.create({})