import { StyleSheet, Text, View, Image } from 'react-native';

export default function Container() {
    return(
        <View>
             <View>
             <Text style={styles.text}>Campanhas</Text>

             </View>
        </View>
        
    )
}

const styles = StyleSheet.create({

    text: {
      display: "flex",
      fontSize:20,
      color: "white",
      paddingTop:20
    },
    img: {
        height:10,
        width:10,
        display: "flex",
        alignContent:"flex-start",

    }
  });