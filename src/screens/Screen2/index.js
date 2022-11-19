import { Text, TextInput, View, StyleSheet, TouchableOpacity} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const Screen2 = (props) =>{
  return (
    <View style={styles.section}>
    <TextInput style={styles.input} placeholder='Search' />

    <TouchableOpacity>
    <MaterialCommunityIcons name="magnify" color={'#343A40'} size={40} style={{marginTop:15}}/>        
    </TouchableOpacity>
    </View>
  );
}

export {Screen2};

const styles = StyleSheet.create({
  section:{
   flexDirection:'row',
   justifyContent:'space-evenly',
  },
  input: {
    borderWidth:1,
    borderColor:'#ddd',
    color:'#343A40',
    backgroundColor:'white',
    width:'80%',
    padding:15,
    borderRadius:10,
    marginTop:10
  }
})
