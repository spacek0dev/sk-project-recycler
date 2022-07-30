import { UserAwards, UserAwardsSchema } from './userAwards';
import { ContactForms, ContactFormsSchema } from './contactForm';
import { Areas, AreasSchema } from "./areas";
import { Bags, BagsSchema } from "./bags";
import { Country, CountrySchema } from "./country";
import { Organization, OrganizationSchema } from "./organization";
import { Person, PersonSchema } from "./person";
import { Role, RoleSchema } from "./role";
import { Users, UsersSchema } from "./user";
import { Partners, PartnersSchema } from './partners';
import { AwardCategorys, AwardCategorysSchema } from './awardCategorys';
import { Banners, BannersSchema } from './banners';
import { Awards, AwardsSchema } from './awards';

export const AllSchemas = [
    { name: Country.name, schema: CountrySchema },
    { name: Person.name, schema: PersonSchema },
    { name: Organization.name, schema: OrganizationSchema },
    { name: Role.name, schema: RoleSchema },
    { name: Areas.name, schema: AreasSchema },
    { name: Users.name, schema: UsersSchema },
    { name: Bags.name, schema: BagsSchema },
    { name: ContactForms.name, schema: ContactFormsSchema },
    { name: Partners.name, schema: PartnersSchema },
    { name: AwardCategorys.name, schema: AwardCategorysSchema },
    { name: Banners.name, schema: BannersSchema },
    { name: Awards.name, schema: AwardsSchema },
    { name: UserAwards.name, schema: UserAwardsSchema },
]

export {
    Country,
    Person,
    Organization,
    Role,
    Areas,
    Users,
    Bags,
    ContactForms,
    Partners,
    AwardCategorys,
    Banners,
    Awards,
    UserAwards
}
