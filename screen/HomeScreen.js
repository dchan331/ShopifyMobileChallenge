import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';

export default class HomeScreen extends React.Component {
  static navigationOptions = {
        title: 'Shopify Finder'
    };

  constructor(props){
    super(props);
    this.state={
      total : [],
      search:'',
    }
  }

  render() {
    return (
      <View style={styles.container}>
          <Image
            source={{uri: 'https://i1.wp.com/wptavern.com/wp-content/uploads/2017/04/shopify-logo.jpg?ssl=1'}}
            style={{width: 300, height: 150}}
          />
          <TouchableOpacity onPress={() => this.props.navigation.navigate('Price')}>
            <Text>
              Search by Customer
            </Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => this.props.navigation.navigate('Quantity')}>
            <Text>
              Search by Item
            </Text>
          </TouchableOpacity>
        </View>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  }
});
