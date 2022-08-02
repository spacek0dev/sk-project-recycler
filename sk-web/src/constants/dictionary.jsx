const common = {
  welcome: {
    en: "Welcome",
    es: "Bienvenido",
  },
  of: {
    en: "of",
    es: "de",
  },
  showing: {
    en: "Showing",
    es: "Mostrando",
  },
  entries: {
    en: "Entries",
    es: "Entradas",
  },
  complete_all_fields: {
    es: "Completa todos los campos",
    en: "Complete all the fields",
  },
  user_registered: {
    es: "Usuario registrado satisfactoriamente.",
    en: "Successfully registered user.",
  },
  name: {
    en: "Name",
    es: "Nombre",
  },
  date: {
    en: "Date",
    es: "Fecha",
  },
  users: {
    en: "Users",
    es: "Usuarios",
  },
  organizations: {
    en: "Organizations",
    es: "Organizaciones",
  },
  "export-data": {
    en: "Export data",
    es: "Exportar datos",
  },
};
const menu = {
  spanish: {
    en: "Spanish",
    es: "Español",
  },
  english: {
    en: "English",
    es: "Ingles",
  },
  logout: {
    en: "Logout",
    es: "Cerrar sesion",
  },
  "Home-menu": {
    en: "Home",
    es: "Inicio",
  },
  "Users-menu": {
    en: "Users",
    es: "Usuarios",
  },
  "Organizations-menu": {
    en: "Organizations",
    es: "Organizaciones",
  },
};
const LoginPage = {
  username: {
    es: "Nombre de usuario",
    en: "Username",
  },
  password: {
    es: "Contraseña",
    en: "Password",
  },
  register: {
    en: "Register",
    es: "Registrarse",
  },
  help: {
    en: "Help",
    es: "Ayuda",
  },
  language: {
    en: "Language",
    es: "Idioma",
  },
  login: {
    en: "Login",
    es: "Iniciar sesion",
  },
};
const UsersPage = {
  "register-user-description": {
    en: "Remember to complete the form fields in order to register new users.",
    es: "Recuerda completar los campos del formulario para poder registrar nuevos usuarios.",
  },
  users: {
    es: "Usuarios",
    en: "Users",
  },
  firstname: {
    es: "Nombres",
    en: "First name",
  },
  lastname: {
    es: "Apellido",
    en: "Last name",
  },
  status: {
    es: "Estado",
    en: "Status",
  },
  dni: {
    es: "DNI",
    en: "ID",
  },
  address: {
    es: "Direccion",
    en: "Address",
  },
  reference: {
    es: "Referencia",
    en: "Reference",
  },
  email: {
    es: "Correo electronico",
    en: "Email address",
  },
  role: {
    es: "Posicion",
    en: "Role",
  },
  phone: {
    es: "Telefono",
    en: "Phone",
  },
  ubication: {
    es: "Ubicación",
    en: "Ubication",
  },
  fullname: {
    es: "Nombres y apellidos",
    en: "Full Name",
  },
  "list-users": {
    es: "Lista de usuarios",
    en: "Users list",
  },
  "register-users": {
    es: "Registrar usuario",
    en: "Users register",
  },
};
const OrganizationPage = {
  "list-organizations": {
    es: "Lista de organizaciones",
    en: "Organizations list",
  },
  "register-organizations": {
    es: "Registrar organizacion",
    en: "Organization register",
  },
  "register-organization-description": {
    en: "Remember to complete the form fields in order to register new organization.",
    es: "Recuerda completar los campos del formulario para poder registrar una nueva organizacion.",
  },
};
const Dictionary = {
  ...common,
  ...menu,
  ...LoginPage,
  ...UsersPage,
  ...OrganizationPage,
};
export default Dictionary;
