export default {
  Query: {
    author(root, args) {
      return {id: 1, fristName: 'Hello', lastName: 'World!' };
    },
    allAuthors() {
      return [{ id: 1, firstName: 'Hello', lastName: 'World!' }];
    },
  },
  Author: {
    posts(author) {
      return [
        { id: 1, title: 'A post', text: 'Some text', views: 2 },
        { id: 2, title: 'B post', text: 'Some other text', views: 5 },
      ];
    },
  },
};