import { v4 as uuidv4 } from "uuid";

function ShoppingList({ items }) {
  if (items.length === 0) {
    return <p> The shopping list is empty</p>;
  }

  return (
    <ul>
      {items.map((item) => {
        return <li key={uuidv4()}>{item}</li>;
      })}
    </ul>
  );
}

export default ShoppingList;
