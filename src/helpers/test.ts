export type MockType<T> = {
  [P in keyof T]: jest.Mock<any>;
};

export const repositoryMockFactory: () => any = jest.fn(() => ({
  find: jest.fn(entity => entity),
  findAll: jest.fn(entity => entity),
  // ...
}));
