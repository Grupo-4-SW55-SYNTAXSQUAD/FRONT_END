import axios from 'axios';

const http = axios.create({
  baseURL: 'https://66347b559bb0df2359a1a40d.mockapi.io/api/v1/',
});

export class BaseService {
  ownerEndpoint = 'owner';

  getAllOwners() {
    return http.get(this.ownerEndpoint);
  }

  getOwnerById(id) {
    return http.get(`${this.ownerEndpoint}/${id}`);
  }
}
