import { AuthService } from './auth.service';
import { RoleService } from './role.service';
import { PersonService } from './person.service';
import { OrganizationService } from './organization.service';
import { CountryService } from './country.service';
import { AreasService } from './areas.service';
import { UsersService } from './users.service';
import { AwardsService } from './awards.service';
import { BannersService } from './banner.service';
import { BagsService } from './bags.service';
import { PartnersService } from './partners.service';
import { ContactFormService } from './contactForm.service';
import { UserAwardsService } from './userAwards.service';
import { AwardsCategoryService } from './awardCategorys.service';

const Services = [
  UsersService,
  RoleService,
  AuthService,
  PersonService,
  OrganizationService,
  AreasService,
  CountryService,
  AwardsService,
  BannersService,
  BagsService,
  PartnersService,
  ContactFormService,
  UserAwardsService,
  AwardsCategoryService,
];
const AllServices = {
  RoleService,
  AuthService,
  PersonService,
  OrganizationService,
  AreasService,
  CountryService,
  UsersService,
  BannersService,
  AwardsService,
  BagsService,
  PartnersService,
  ContactFormService,
  UserAwardsService,
  AwardsCategoryService,
};
export { Services, AllServices };
