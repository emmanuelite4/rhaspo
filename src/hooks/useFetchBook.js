import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchBook, fetchBookContent } from "../redux/book/book.slice";

const useFetchBook = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const book = useSelector((state) => state.book.book);
  const contents = useSelector((state) => state.book.contents);

  const onFetchBook = () => {
    dispatch(fetchBook(id));
    dispatch(fetchBookContent(id));
  };

  useEffect(() => {
    onFetchBook();
  }, []);

  return [book, contents, onFetchBook];
};

export default useFetchBook;
