import styled from "@emotion/styled";
import { COLOR_PRIMARY, COLOR_SECONDARY } from "../../../constant/styles";
import useFetchBookList from "../../../hooks/useFetchBookList";
import usePaystackPayment from "../../../hooks/usePaystackPayment";
import { TextBig, TextMid, TextNorm } from "../../Text/Text";

import { PaystackButton } from "react-paystack";

const BookList = () => {
  const [books, onFetchBooks] = useFetchBookList();
  const [onPay] = usePaystackPayment();
  const componentProps = {
    email: "johnsmith@test.com",
    amount: 1000,
    metadata: {
      name: "John Smith",
      phone: "+234 90000000",
    },
    publicKey: "pk_test_7ecaa6583e691f151a059b16cd0a55688cbf2b08",
    text: "Pay Now",
    onClose: () => alert("Wait! You need this oil, don't go!!!!"),
  };
  return (
    <Holder>
      <TextBig>Book Library</TextBig>
      <ItemContainer>
        {books.map((book, i) => (
          <ItemWrapper key={i}>
            <HeroImage src={book.imgUri} alt={book.name} />
            <ItemTextWrap>
              <TextMid color={COLOR_PRIMARY}>{book.name}</TextMid>
              <TextNorm fontWeight="700" color={COLOR_SECONDARY}>
                {book.price}
              </TextNorm>

              <PaystackButton
                onSuccess={() => onPay(book.documentID)}
                {...componentProps}
              />
            </ItemTextWrap>
          </ItemWrapper>
        ))}
      </ItemContainer>
    </Holder>
  );
};

export default BookList;

const Holder = styled.div`
  padding: 20px;
  & > :not(:last-child) {
    margin-bottom: 20px;
  }
`;

const ItemContainer = styled.div`
  display: grid;
  gap: 20px;
  @media (min-width: 576px) {
    grid-template-columns: 1fr 1fr;
  }
  @media (min-width: 992px) {
    grid-template-columns: 1fr 1fr 1fr;
  }
  @media (min-width: 1400px) {
    grid-template-columns: 1fr 1fr 1fr 1fr;
  }
`;

const ItemWrapper = styled.div`
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
  border-radius: 20px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
`;

const HeroImage = styled.img`
  width: 100%;
  max-height: 250px;
  height: 100%;
  object-fit: cover;
`;

const ItemTextWrap = styled.div`
  padding: 20px;
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: space-between;
  & > :last-child {
    margin-top: 20px;
    background-color: var(--color-primary);
    color: var(--color-white);
    border-radius: 10px;
    padding: 0 20px;
    height: 50px;
    display: flex;
    align-items: center;
    outline: none;
    border: none;
    width: 100%;
    justify-content: center;
    align-self: flex-end;
    cursor: pointer;
    font-size: 20px;
  }
`;
