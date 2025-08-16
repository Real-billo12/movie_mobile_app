import { icons } from '@/constants/icons'
import { Image, StyleSheet } from 'react-native'

const searchBar = () => {
  return (
    <view className ="flex row items-center bg-white 200 rounded-full 
    px-5 py-4">
      <Image source={icons.search}  resizeMode="contain"
      tintColor="#abf8ff" />
    </view>
  )
}

export default searchBar

const styles = StyleSheet.create({})