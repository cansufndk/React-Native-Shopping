import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { Login } from '../../redux/actions/LoginActions';

const Screen5 = props => {
 const dispatch = useDispatch()
 const state = useSelector(state => state)
 console.log(state)

  return (
    <View style={styles.container}>
    <Text style={styles.title}>Login</Text>
         <View style={styles.section}>
          <TextInput placeholder='E-mail' style={styles.input}/>
          <TextInput placeholder='Password' secureTextEntry={true} style={styles.input}/>
          <TouchableOpacity onPress={() => dispatch(Login())}>
            <Text style={styles.button}>Login</Text>
          </TouchableOpacity>
         </View>
    </View>
  );
}

export {Screen5};

const styles = StyleSheet.create({
  container: {
    flex:1,
    flexDirection:'column',
    justifyContent:'center',
    alignItems:'center',
    backgroundColor:'#7952B3'
  },
  title: {
   fontSize:22,
   color:'white',
   marginBottom:20,   
  },
  input: {
    color:'white',
    padding:15,
    borderWidth:.5,
    borderColor:'#ddd',
    fontSize:18,
    borderRadius:10,
    marginBottom:10
  },
  section:{
    width:'80%',
  },
  button: {
    padding:15,
    borderRadius:10,
    textAlign:'center',
    backgroundColor:'#FFC107',
    overflow:'hidden',
    fontSize:18
  }
})