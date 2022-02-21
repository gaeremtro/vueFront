import { UserRepository } from './users.repository';

const repositories = {
  // 'posts': PostRepository,
  users: UserRepository
};
export default {
  get: name => repositories[name]
};
