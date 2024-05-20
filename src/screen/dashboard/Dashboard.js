import {StyleSheet, Text, View, FlatList, Image, TouchableOpacity} from 'react-native';
import React, {useEffect, useState} from 'react';
import CustomHeader from '../../component/CustomHeader';
import {useNavigation} from '@react-navigation/native';
import {DrawerActions} from '@react-navigation/native';
import { Colors } from '../../constant/Colors';

const Dashboard = () => {
  const navigation = useNavigation();
  const [data, setData] = useState([])
  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then(res => res.json())
      .then(json => {
        // console.log(json);
        setData(json);
      });
  }, []);

  const renderItem = ({item}) => (
    <TouchableOpacity onPress={()=> navigation.navigate("DetailProduct", item)} style={styles.itemContainer}>
      <Image source={{uri: item.image}} style={styles.itemImage} />
      {/* <Text style={styles.itemTitle}>{item.title}</Text> */}
      <Text style={styles.itemPrice}>Rs. {item.price}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <CustomHeader
        title={'Dashboard'}
        onPressMenu={() => navigation.dispatch(DrawerActions.openDrawer())}
      />
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
        numColumns={2}
        columnWrapperStyle={styles.columnWrapper}
        contentContainerStyle={styles.listContent}
      />
    </View>
  );
};

export default Dashboard;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:Colors.backColor
  },
  listContent: {
    paddingHorizontal: 10,
    paddingVertical: 10,
  },
  columnWrapper: {
    justifyContent: 'space-between',
  },
  itemContainer: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 10,
    marginBottom: 10,
    flex: 1,
    marginHorizontal: 5,
    alignItems: 'center',
  },
  itemImage: {
    width: 100,
    height: 100,
    resizeMode: 'contain',
  },
  itemTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginVertical: 5,
    textAlign: 'center',
  },
  itemPrice: {
    fontSize: 14,
    color: '#888',
  },
});
