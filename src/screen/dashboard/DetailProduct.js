// src/screens/DetailProduct.js

import {Image, StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {increment, decrement} from '../../redux/ProductSlice';
import CustomHeader from '../../component/CustomHeader';
import {DrawerActions} from '@react-navigation/native';
import {Colors} from '../../constant/Colors';

const DetailProduct = ({navigation, route}) => {
  const item = route.params;
  const quantity = useSelector(state => state.product.quantity);
  const total = useSelector(state => state.product.total);
  const dispatch = useDispatch();

  return (
    <>
      <CustomHeader
        onPressArrow={() => navigation.goBack()}
        title="Product Detail"
        onPressMenu={() => navigation.dispatch(DrawerActions.openDrawer())}
      />
      <View style={styles.container}>
        {item?.image && (
          <Image source={{uri: item.image}} style={styles.itemImage} />
        )}
        <Text style={styles.itemTitle}>{item?.title}</Text>
        <Text style={styles.itemDescription}>{item?.description}</Text>
        <Text style={styles.itemPrice}>Price: Rs. {item?.price}</Text>

        <View style={styles.counterContainer}>
          <TouchableOpacity
            style={styles.countButton}
            onPress={() => dispatch(increment())}>
            <Text style={styles.counterButton}>+</Text>
          </TouchableOpacity>
          <Text style={styles.quantity}>{quantity}</Text>

          <TouchableOpacity
            style={styles.countButton}
            onPress={() => dispatch(decrement())}>
            <Text style={styles.counterButton}>-</Text>
          </TouchableOpacity>
        </View>
        <Text style={styles.totalPrice}>Total: Rs. {total*item?.price}</Text>
      </View>
    </>
  );
};

export default DetailProduct;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.backColor,
    padding: 20,
  },
  itemImage: {
    width: '100%',
    height: 200,
    resizeMode: 'contain',
    marginBottom: 20,
  },
  itemTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  itemDescription: {
    fontSize: 16,
    color: Colors.textColor,
    marginBottom: 20,
  },
  itemPrice: {
    fontSize: 18,
    color: '#000',
  },
  counterContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 20,
  },
  counterButton: {
    fontSize: 32,
    textAlign: 'center',
  },
  quantity: {
    fontSize: 24,
    marginHorizontal: 20,
  },
  totalPrice: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 20,
  },
  countButton: {
    width: 50,
    height: 50,
    backgroundColor: Colors.borderColor,
    borderRadius: 5,
  },
});
