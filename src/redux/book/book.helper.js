import { firestore } from "../../firebase/util";
import { handleTranlateText } from "../../utils/helper";

export const handleFetchBooks = () => {
  return new Promise((resolve, reject) => {
    let ref = firestore.collection("books");

    ref
      .get()
      .then((snapshot) => {
        const data = [
          ...snapshot.docs.map((doc) => {
            return {
              ...doc.data(),
              documentID: doc.id,
            };
          }),
        ];

        resolve(data);
      })
      .catch((err) => {
        reject(err);
      });
  });
};

export const handleFetchBook = (bookID) => {
  return new Promise((resolve, reject) => {
    firestore
      .collection("books")
      .doc(bookID)
      .get()
      .then((snapshot) => {
        if (snapshot.exists) {
          resolve(snapshot.data());
        }
      })
      .then()
      .catch((err) => {
        reject(err);
      });
  });
};

export const handleFetchBookDetail = (bookID) => {
  return new Promise((resolve, reject) => {
    firestore
      .collection("content")
      .where("bookID", "==", bookID)
      .get()
      .then((snapshot) => {
        const data = [
          ...snapshot.docs.map((doc) => {
            return {
              ...doc.data(),
              documentID: doc.id,
            };
          }),
        ];

        resolve(data);
        // if (snapshot.exists) {
        //   resolve(snapshot.data());
        // }
      })
      .catch((err) => {
        reject(err);
      });
  });
};

export const handleTranslateBook = async (data) => {
  const lang = data.lang.code;
  let { books, book, contents } = data.bookObj;

  let newBook = await handleTranlateText(book.name, lang);

  let book1 = await handleTranlateText(books[0].name, lang);

  let book2 = await handleTranlateText(books[1].name, lang);

  let content0 = await handleTranlateText(contents[0].text, lang);
  let newBook1 = books.map((book, i) =>
    i === 0 ? Object.assign({ ...book, name: book1 }) : book
  );
  let newBook2 = books.map((book, i) =>
    i === 1 ? Object.assign({ ...book, name: book2 }) : book
  );
  let translatedBook = { ...book, name: newBook };
  let translatedBooks = [newBook1[0], newBook2[1]];

  let newContent = contents.map((content, i) =>
    Object.assign({ ...content, text: content0 })
  );

  return { books: translatedBooks, book: translatedBook, contents: newContent };
};
