import BookList from "../app/component/Book/BookList";
import DesktopHeader from "../app/component/HomeHeader/DesktopHeader";
import Header from "../app/component/HomeHeader/Header";
import CategoryContainer from "../app/component/Rhapso/CategoryContainer";

const BookListContainer = () => {
  return (
    <>
      <DesktopHeader title="Rhapso Translate" />
      <Header title="Rhapso Books" />
      <CategoryContainer>
        <BookList />
      </CategoryContainer>
    </>
  );
};

export default BookListContainer;
