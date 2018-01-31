import casual from "casual";

const mocks = {
  String: () => 'It works really!',
  Query: () => ({
    author: (root, args) => {
      return { firstName: args.firstName, lastName: args.lastName };
    },
  }),
  Author: () => ({
    firstName: () => casual.first_name,
    lastName: () => casual.last_name,
  }),
  Post: () => ({
    title: casual.title,
    text: casual.sentences(6),
  }),
};

export default mocks;
