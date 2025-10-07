import "./App.css";
import Greeting from "./components/Greeting";
import ShoppingList from "./components/ShoppingList";
import OrderStatus from "./components/OrderStatus";
import { v4 as uuidv4 } from "uuid";

function App() {
  const productList = ["cheese", "milk", "sugar"];
  const productList1 = [];
  const orderList = [
    { orderId: 101, status: "processed" },
    { orderId: 102, status: "on the way" },
    { orderId: 103, status: "on the way" },
    { orderId: 104, status: "delivered" },
  ];
  return (
    <>
      <Greeting name="Alice" />
      <ShoppingList items={productList} />
      <ShoppingList items={productList1} />
      {orderList.map((orderItem) => {
        return (
          <OrderStatus
            key={uuidv4()}
            orderId={orderItem.orderId}
            status={orderItem.status}
          />
        );
      })}
    </>
  );
}

export default App;
