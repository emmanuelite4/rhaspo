import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchBooks } from "../redux/book/book.slice";

const useFetchBookList = () => {
  const dispatch = useDispatch();
  const books = useSelector((state) => state.book.books);
  console.log(books);

  const onFetchBooks = () => {
    dispatch(fetchBooks());
  };

  useEffect(() => {
    onFetchBooks();
  }, []);

  return [books, onFetchBooks];
};

export default useFetchBookList;
