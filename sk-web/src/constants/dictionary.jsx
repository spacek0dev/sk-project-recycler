const common = {
  complete_all_fields: {
    es: "Completa todos los campos",
    en: "Complete all the fields",
  },
  user_registered: {
    es: "Usuario registrado satisfactoriamente.",
    en: "Successfully registered user.",
  },
};
const LoginPage = {};
const UsersPage = {
  users: {
    es: "Usuarios",
    en: "Users",
  },
};
const Dictionary = {
  ...common,
  ...LoginPage,
  ...UsersPage,
};
export default Dictionary;
