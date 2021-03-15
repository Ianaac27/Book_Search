import axios from "axios";

const API = {

  // Gets all books
  getBooks: function() {
    return axios.get("/api/books");
  },
  // Saves a book to the database
  saveBook: function(bookData) {
    return axios.post("/api/books", bookData);
  },
   // Deletes the book with the given id
   deleteBook: function(id) {
    return axios.delete("/api/books/" + id);
  }
};

export default API;