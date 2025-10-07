export default function OrderStatus({ orderId = 0, status = "processed" }) {
  return (
    <p>
      Order #{orderId}: {status}
    </p>
  );
}
