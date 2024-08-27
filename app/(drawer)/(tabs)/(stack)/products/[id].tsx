import { products } from '@/store/products.store';
import { Redirect, useLocalSearchParams, useNavigation } from 'expo-router';
import { useEffect } from 'react';
import { View, Text } from 'react-native';
const ProductScreen = () => {
  const { id } = useLocalSearchParams();
  const navigation = useNavigation();

  const product = products.find((p) => p.id == id);

  useEffect(() => {
    navigation.setOptions({
      title: product?.title ?? 'Producto',
    });
  }, [product]);

  if (!product) {
    return <Redirect href="/" />;
  }

  return (
    <View className="px-5 mt-2">
      <Text className="font-work-black text-2xl">{product.title}</Text>
      <Text className="">{product.description}</Text>
      <Text className="font-work-black">{product.price}</Text>
    </View>
  );
};
export default ProductScreen;
