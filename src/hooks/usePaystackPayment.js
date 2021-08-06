import { useHistory } from "react-router-dom";
import { BOOK_URL } from "../constant/navigation";

const usePaystackPayment = () => {
  const history = useHistory();
  const onPay = (id) => {
    alert("Thanks for doing business with us! Come back soon!!");
    history.push(`${BOOK_URL}/${id}`);
    // dispatch(makePaystackPayment(amount));
  };
  return [onPay];
};

export default usePaystackPayment;
