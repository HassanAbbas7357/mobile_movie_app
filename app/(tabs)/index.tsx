import { Text, View } from "react-native";
import "../global.css"; // path must match metro.config.js input


 
export default function App() {
  return (
   <View className="flex-1 justify-center items-center">
    <Text className=" text-5xl text-dark-200 font-bold">Hello World!</Text>
   </View>
  );
}
