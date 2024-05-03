import { BaseService } from '../../shared/services/base.service';

const service = new BaseService();

// Para obtener todos los propietarios
service.getAllOwners().then((response) => {
  console.log(response.data);
});

// Para obtener un propietario por ID
service.getOwnerById(1).then((response) => {
  console.log(response.data);
});
