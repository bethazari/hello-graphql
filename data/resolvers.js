
export default {
  Query: {
    author(root, args) {
      return {id: 1, fristName: 'Hello', lastName: 'World!' };
    },
    allAuthors() {
      return [
        { id: 1, firstName: 'Hello', lastName: 'World!' },
        { id: 2, firstName: 'Hello2', lastName: 'World2!' },
      ];
    },
  },
  Author: {
    posts(author, root, context) {
      console.log(author);
      return context.postsLoader.load(author.id);
    },
  },
};