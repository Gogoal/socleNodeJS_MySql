/* All constant useful beetween environnement - prod vs local */
export const config = {
  secret: 'secretMySqlConfig',
  dbProdHost: '',
  dbProdUser: '',
  dbProdPassword: '',
  dbProdDatabase: '',
  dbDevHost: '',
  dbDevUser: '',
  dbDevPassword: '',
  dbDevDatabase: '',
  dbTestHost: '',
  dbTestUser: '',
  dbTestPassword: '',
  dbTestDatabase: '',
  apiLocal: 'http://localhost:3000',
  apiProd: 'https://afternoon-dawn-41835.herokuapp.com',
};

// Mail Wesport
export const mailConfig = {
  mail: 'mettreUneAdresseMail.com',
  password: 'mdr',
};
