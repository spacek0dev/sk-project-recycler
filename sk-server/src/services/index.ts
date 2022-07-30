import { AuthService } from "./auth.service";
import { RoleService } from "./role.service";
import { PersonService } from "./person.service";
import { OrganizationService } from "./organization.service";
import { CountryService } from "./country.service";
import { AreasService } from "./areas.service";

const Services = [
    RoleService,
    AuthService,
    PersonService,
    OrganizationService,
    AreasService,
    CountryService
]
const AllServices = {
    RoleService,
    AuthService,
    PersonService,
    OrganizationService,
    AreasService,
    CountryService
}
export { Services, AllServices }