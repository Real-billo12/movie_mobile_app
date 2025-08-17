import { icons } from '@/constants/icons'
import { Image, StyleSheet, View } from 'react-native'

const searchBar = () => {
  return (
    <View className ="flex row items-center bg-white 200 rounded-full 
    px-5 py-4">
      <Image source={icons.search} style={{ width: 5, height: 5 }} resizeMode="contain"
      tintColor="#abf8ff" />
    </View>
  )
}

export default searchBar

const styles = StyleSheet.create({})