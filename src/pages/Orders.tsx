import { FlatList, Pressable, Text, View } from "react-native";
import * as React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../store/reducer";
import { Order } from "../slices/orderSlice";
import EachOrder from "../components/EachOrder";

function Orders() {
  const orders = useSelector((state: RootState) => state.order.orders);
  const renderItem = React.useCallback(({ item }: { item: Order }) => {
    return <EachOrder item={item} />;
  }, []);
  return (
    <FlatList
      data={orders}
      keyExtractor={(item) => item.orderId}
      renderItem={renderItem}
    />
  );
}

export default Orders;
