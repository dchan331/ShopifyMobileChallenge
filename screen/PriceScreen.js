import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, ScrollView, TextInput } from 'react-native';
import axios from 'axios';
import {
  StackNavigator,
} from 'react-navigation';

export default class PriceScreen extends React.Component {
  static navigationOptions = {
        title: 'Search By Customer'
    };

  constructor(props){
    super(props);
    this.state={
      total : [],
      search:'',
    }
  }
  componentDidMount(){
    axios.get('https://shopicruit.myshopify.com/admin/orders.json?page=1&access_token=c32313df0d0ef512ca64d5b336a0d7c6')
      .then(resp => {
        const items = resp.data.orders;
        return findTotalPrice(items)
      })
      .then(resp2 => {
        let arr = [];
        for(var key in resp2){
          arr.push(resp2[key])
        }
        this.setState({total: arr})
      })
  }

  render() {
    const filtered = this.state.total.filter(customer => {
      return customer.name.toLowerCase().includes(this.state.search.toLowerCase())
    })
    return (
      <View style={styles.container}>
          <TextInput
            style={styles.searchBar}
            placeholder="Search"
            onChangeText={(search) => this.setState({search})}
            value={this.state.search}
          />
          {this.state.search.length ?
          <ScrollView style={styles.dropdown}>
            {
              filtered.map((person,i) => {
                return(<View key={i}><Text style={styles.text}>{person.name + ' - $'+ person.total_price}</Text></View>)
              })
            }
          </ScrollView>:
          <View></View>
        }
        </View>
    );
  }
}

function findTotalPrice(items){
  const customerObj = {};
  items.forEach((item,i ) => {
    if(item.hasOwnProperty('customer')){
      const name = item.customer.first_name +' '+item.customer.last_name;
      if(customerObj.hasOwnProperty(item.customer.id)){
        customerObj[item.customer.id].total_price += Number(item.total_line_items_price);
      }else{
        customerObj[item.customer.id] = {
          name: name,
          email: item.customer.email,
          total_price: Number(item.total_line_items_price)
        }
      }
    }
  })
  return customerObj;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  searchBar:{
    top: 20,
    position: 'absolute',
    height: 50,
    width: 300,
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: '#a8acbc',
    borderRadius: 13,
    paddingLeft: 13
  },
  dropdown:{
    top: 70,
  },
  text:{
    fontSize: 15
  }
});
