import { Client } from './repository.config';
const resource = '/users';

export const UserRepository = {
  getUsers() {
    return Client.get(`${resource}`);
  },
  getPost(id) {
    return Client.get(`${resource}/${id}`);
  },
  create(payload) {
    return Client.post(`${resource}`, payload);
  },
  update(payload, id) {
    return Client.put(`${resource}/${id}`, payload);
  },
  delete(id) {
    return Client.delete(`${resource}/${id}`);
  }
};
