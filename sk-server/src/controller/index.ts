import { AreasController } from './areas.controller';
import { AuthController } from './auth.controller';
import { CountryController } from './country.controller';
import { OrganizationController } from './organization.controller';
import { PersonController } from './person.controller';
import { RoleController } from './role.controller';
import { UsersController } from './users.controller';

const Controllers = [
  AuthController,
  UsersController,
  RoleController,
  PersonController,
  OrganizationController,
  AreasController,
  CountryController,
];

export default Controllers;
