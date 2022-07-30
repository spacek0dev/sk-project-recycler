import { Organization, Person } from "src/schemas";

export interface IAuth {
    roleId: String,
    areasId: String,
    person: Person,
    organizationId?: String
}
export interface ILogin {
    password: String,
    username: String
}

export interface IAuthOrganization {
    user:IAuth,
    organization:Organization
}