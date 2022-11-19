import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const Screen4 = props => {


  return (
    <View style={style.container}>
          <Text style={style.basket}>Sepetim</Text>
      <View style={style.section}>
      <MaterialCommunityIcons name="cart-outline" color={'#7952B3'} size={150} style={{}} />
      <Text style={style.basketempty}>Şuanda Sepetiniz Boş</Text>
      </View>

      <TouchableOpacity>
        <Text style={style.goon}>Alışverişe Devam Et</Text>
      </TouchableOpacity>
    </View>
  );
}

export {Screen4};

const style= StyleSheet.create({
  container: {
    flex:1,
    flexDirection:'column',
    justifyContent:'center',
    alignItems:'center',
    backgroundColor:'white'
  },
  section: {
    justifyContent:'center',
    alignItems:'center' 
  },
  basket: {
    fontSize:20,
  },
  basketempty: {
    backgroundColor:'#FFC107',
    borderRadius:10,
    overflow:'hidden',
    padding:12,
    fontSize:20,
    color:'white',
    marginVertical:10
  },
  goon: {
    backgroundColor:'#7952B3',
    borderRadius:10,
    overflow:'hidden',
    padding:12,
    fontSize:20,
    color:'white',
  }

})