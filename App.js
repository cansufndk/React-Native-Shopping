import React from "react";
import { SafeAreaView, StyleSheet, Text, View} from "react-native";
import { Navigation } from "./src/navigation";
import { Provider } from "react-redux";
import { store } from "./src/redux";

const App = () => {

  return (
   <Provider store={store}>
     <SafeAreaView style={{flex:1,}}>
          <Navigation/>
    </SafeAreaView>
   </Provider>
    );
};

export default App;

/*
react-navigation kuruldu
npm i @react-navigation/native react-native-screens react-safe-area-context
npm install @react-navigation/native-stack 
createNative gibi küçük harfle başlayan herşey method büyük harfle başlayanlar component
bottom-tabs kuruldu
vector-icons kuruldu
stylelar oluşturuldu
react-redux kuruldu
redux-persist redux-thunk
@reduxjs/toolkit

*/
