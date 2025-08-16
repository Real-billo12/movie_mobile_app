
import SearchBar from "@/components/searchBar";
import { icons } from "@/constants/icons";
import { images } from "@/constants/images";
import { Image, ScrollView, View } from "react-native";



const Index = () => {
	return (
		<View className="flex-1 bg-primary">
      <Image  
        source={images.bg}
        className="absolute w-full z-0"
        resizeMode="cover"
      />
	  </View>
	);
};
export default Index;
