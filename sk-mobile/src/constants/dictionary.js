const common = {
  register_text: {
    en: (name, email, username) =>
      `Hello ${name} you are about to register with the user ${username} and the email ${email}`,
    es: (name, email, username) =>
      `Hola ${name} estas a punto de registrarte con el  usuario ${username} y el  email ${email} `,
  },
  next: {es: 'Siguiente', en: 'Next'},
  back: {es: 'Atras', en: 'Back'},
  reset: {es: 'Reiniciar', en: 'Reset'},
  accept: {es: 'Aceptar', en: 'Accept'},
  cancel: {es: 'Cancelar', en: 'Cancel'},
  welcome: {
    en: 'Welcome',
    es: 'Bienvenido',
  },
  select: {
    en: 'Select',
    es: 'Seleccione',
  },
  countrys: {
    es: 'Paises',
    en: 'Countries',
  },
  roles: {
    es: 'Roles',
    en: 'Roles',
  },
  areas: {
    es: 'Ubicaciones',
    en: 'Areas',
  },
  categorys: {
    es: 'Categorias',
    en: 'Categories',
  },
  'upload-file': {
    en: 'Upload File',
    es: 'Subir archivo',
  },
  of: {
    en: 'of',
    es: 'de',
  },
  showing: {
    en: 'Showing',
    es: 'Mostrando',
  },
  entries: {
    en: 'Entries',
    es: 'Entradas',
  },
  complete_all_fields: {
    es: 'Completa todos los campos',
    en: 'Complete all the fields',
  },
  user_registered: {
    es: 'Usuario registrado satisfactoriamente.',
    en: 'Successfully registered user.',
  },
  name: {
    en: 'Name',
    es: 'Nombre',
  },
  date: {
    en: 'Date',
    es: 'Fecha',
  },
  users: {
    en: 'Users',
    es: 'Usuarios',
  },
  organizations: {
    en: 'Organizations',
    es: 'Organizaciones',
  },
  'export-data': {
    en: 'Export data',
    es: 'Exportar datos',
  },
};
const menu = {
  spanish: {
    en: 'Spanish',
    es: 'Español',
  },
  english: {
    en: 'English',
    es: 'Ingles',
  },
  logout: {
    en: 'Logout',
    es: 'Cerrar sesion',
  },
  'Configurations-menu': {
    en: 'Configurations',
    es: 'Configuraciones',
  },
  'Home-menu': {
    en: 'Home',
    es: 'Inicio',
  },
  'Users-menu': {
    en: 'Users',
    es: 'Usuarios',
  },
  'Organizations-menu': {
    en: 'Organizations',
    es: 'Organizaciones',
  },
  'Awards-menu': {
    en: 'Awards',
    es: 'Premios',
  },
  'Messages-menu': {
    en: 'Messages',
    es: 'Mensajes',
  },
  'Learning-menu': {
    en: 'Learning',
    es: 'Aprendiendo',
  },
  'UserAwards-menu': {
    en: 'User awards',
    es: 'Premios canjeados',
  },
  'Partners-menu': {
    en: 'Partners',
    es: 'Socios',
  },
  'register-category': {
    en: 'Register Category',
    es: 'Registrar categoria',
  },
  'AwardsCategory-menu': {
    en: 'Awards Categories',
    es: 'Categorias premios',
  },
};
const LoginPage = {
  welcome_description: {
    es: 'Bienvenido ingresa y consigue grandes premios',
    en: ' Welcome enter and get great prizes',
  },
  register_description: {
    es: 'Bienvenido ingresa tus datos para poder registrarte',
    en: ' Welcome enter your information to be able to register',
  },
  enter_username: {
    es: 'Ingresa tu usuario',
    en: 'Enter your username',
  },
  enter_password: {
    es: 'Ingresa tu contraseña',
    en: 'Enter your password',
  },
  enter_email: {
    es: 'Ingresa tu email',
    en: 'Enter your email',
  },
  enter_firstname: {
    es: 'Ingresa tus nombres',
    en: 'Enter your firstname',
  },
  enter_lastname: {
    es: 'Ingresa tus apellidos',
    en: 'Enter your lastname',
  },
  enter_dni: {
    es: 'Ingresa tu dni',
    en: 'Enter your ID card',
  },
  enter_phone: {
    es: 'Ingresa tu telefono',
    en: 'Enter your phone',
  },
  enter_address: {
    es: 'Ingresa tu direccion',
    en: 'Enter your address',
  },
  enter_addressReference: {
    es: 'Ingresa una referencia',
    en: 'Enter an address reference',
  },
  username: {
    es: 'Usuario',
    en: 'Username',
  },
  password: {
    es: 'Contraseña',
    en: 'Password',
  },
  register: {
    en: 'Register',
    es: 'Registrarse',
  },
  help: {
    en: 'Help',
    es: 'Ayuda',
  },
  language: {
    en: 'Language',
    es: 'Idioma',
  },
  login: {
    en: 'Login',
    es: 'Iniciar sesion',
  },
};
const UsersPage = {
  'register-user-description': {
    en: 'Remember to complete the form fields in order to register new users.',
    es: 'Recuerda completar los campos del formulario para poder registrar nuevos usuarios.',
  },
  users: {
    es: 'Usuarios',
    en: 'Users',
  },
  firstname: {
    es: 'Nombres',
    en: 'First name',
  },
  lastname: {
    es: 'Apellido',
    en: 'Last name',
  },
  status: {
    es: 'Estado',
    en: 'Status',
  },
  dni: {
    es: 'DNI',
    en: 'ID',
  },
  address: {
    es: 'Direccion',
    en: 'Address',
  },
  reference: {
    es: 'Referencia',
    en: 'Reference',
  },
  email: {
    es: 'Correo electronico',
    en: 'Email address',
  },
  role: {
    es: 'Posicion',
    en: 'Role',
  },
  phone: {
    es: 'Telefono',
    en: 'Phone',
  },
  ubication: {
    es: 'Ubicación',
    en: 'Ubication',
  },
  fullname: {
    es: 'Nombres y apellidos',
    en: 'Full Name',
  },
  'list-users': {
    es: 'Lista de usuarios',
    en: 'Users list',
  },
  'register-users': {
    es: 'Registrar usuario',
    en: 'Users register',
  },
};
const OrganizationPage = {
  'list-organizations': {
    es: 'Lista de organizaciones',
    en: 'Organizations list',
  },
  'register-organizations': {
    es: 'Registrar organizacion',
    en: 'Organization register',
  },
  organization_registered: {
    es: 'Organizacion registrada satisfactoriamente',
    en: 'Successfully registered organization',
  },
  'register-organization-description': {
    en: 'Remember to complete the form fields in order to register new organization.',
    es: 'Recuerda completar los campos del formulario para poder registrar una nueva organizacion.',
  },
};
const RegisterForms = {
  'list-partners': {
    es: 'Lista de socios',
    en: 'Partners List',
  },
  'register-partners': {
    es: 'Registrar socio',
    en: 'Partner register',
  },
  'register-partner-description': {
    en: 'Remember to complete the form fields in order to register new partner.',
    es: 'Recuerda completar los campos del formulario para poder registrar un nuevo socio.',
  },
  'register-category-description': {
    en: 'Remember to complete the form fields in order to register new category.',
    es: 'Recuerda completar los campos del formulario para poder registrar nueva categoria.',
  },
  'register-role-description': {
    en: 'Remember to complete the form fields in order to register new role.',
    es: 'Recuerda completar los campos del formulario para poder registrar nuevo rol.',
  },
  'list-tab': {
    en: 'List items',
    es: 'Listar items',
  },
  'register-tab': {
    es: 'Registrar',
    en: 'Register',
  },
  'register-role': {
    es: 'Registrar rol',
    en: 'Register role',
  },
};
const Dictionary = {
  ...common,
  ...menu,
  ...LoginPage,
  ...UsersPage,
  ...OrganizationPage,
  ...RegisterForms,
};
export default Dictionary;
