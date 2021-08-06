import BookList from "../app/component/Book/BookList";
import Header from "../app/component/HomeHeader/Header";

const BookListContainer = () => {
  return (
    <div>
      <Header title="Rhapso Books" />
      <BookList />
    </div>
  );
};

export default BookListContainer;
