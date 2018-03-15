const db = require('../../db');

/**
 * @api {GET} /users/ Get all users
 * @apiName getAll users
 * @apiGroup Users
 * @apiParam {Integer} [limit]  Optional Limit return users (100 default)
 * @apiParam {Integer} [page]  Optional Page of users
 * @apiParam {String} [attribute]  Attribute for filter (ex: name=test)
 * @apiSuccess {Object} Users Array of User.
 * @apiSuccess {Object[]} Users List of User.
 */
export function getUsers(req, res) {
  db.query('SELECT * FROM users', (err, result) => {
    if (err) throw err;
    return res.status(200).send({ data: result });
  });
}

/**
 * @api {GET} /users/:id Get one user
 * @apiParam {Number} id Users unique ID.
 * @apiName get one user by id
 * @apiGroup Users
 *
 * @apiSuccess {Object} profile User profile information.
 * @apiSuccess {String} profile.name User name.
 * @apiSuccess {String} profile.email User email.
 */
export function getUserById(req, res) {
  return res.status(500).send({ auth: false });
}

/**
 * @api {GET} /users/:id Get my user
 * @apiName get my own user
 * @apiGroup Users
 *
 * @apiSuccess {Object} profile User profile information.
 * @apiSuccess {String} profile.name User name.
 * @apiSuccess {String} profile.email User email.
 */
export function getMe(req, res) {
  return res.status(500).send({ auth: false });
}

/**
 * @api {POST} /users Create user
 * @apiName Create user
 * @apiGroup Users
 * @apiParam {String} lastName   lastName of the User.
 * @apiParam {String} firstName   firstName of the User.
 * @apiParam {String} email     email of the User.
 * @apiParam {Date} birthdate     birthdate of the User.
 * @apiParam {Sport} sport     sports of the User.
 * @apiParam {Gender} gender     gender of the User.
 * @apiParam {String} password password (not Hash) of the User.
 * @apiParam {String} facebookId facebookId of the User (if exist).
 * @apiParam {Boolean} isValidate validation user account (default to false)
 * @apiParam {Boolean} validateToken specific token that permit to valid user account
 * @apiSuccess {Object} response Reponse.
 * @apiSuccess {Boolean} response.success true.
 * @apiSuccess {Object} response.user the user create.
 */
export function createUser(req, res) {
  return res.status(500).send({ auth: false });
}

/**
 * @api {DELETE} /users/:id Delete user
 * @apiParam {Number} id Users unique ID.
 * @apiName Delete user
 * @apiGroup Users
 * @apiSuccess {Object} response Reponse.
 * @apiSuccess {Boolean} response.success true.
 */
export function deleteUser(req, res) {
  return res.status(500).send({ auth: false });
}

/**
 * @api {POST} /users/:id Update user
 * @apiName Update user
 * @apiGroup Users
 * @apiParam {String} lastName   lastName of the User.
 * @apiParam {String} firstName   firstName of the User.
 * @apiParam {String} email     email of the User.
 * @apiParam {Date} birthdate     birthdate of the User.
 * @apiParam {Sport} sport     sports of the User.
 * @apiParam {Gender} gender     gender of the User.
 * @apiParam {String} password password (not Hash) of the User.
 * @apiParam {String} facebookId facebookId of the User (if exist).
 * @apiParam {Boolean} isValidate validation user account (default to false)
 * @apiSuccess {Object} response Reponse.
 * @apiSuccess {Boolean} response.success true.
 * @apiSuccess {Object} response.user the user update.
 */
export function updateUser(req, res) {
  return res.status(500).send({ auth: false });
}

/**
 * @api {POST} /users/forgotPassword Generate a new password
 * @apiName Generate a new password
 * @apiGroup Users
 * @apiParam {String} email     email of the User.
 * @apiSuccess {Object} response Reponse.
 * @apiSuccess {Boolean} response.success true.
 * @apiSuccess {Object} response.user new password generated.
 */
export function forgotPassword(req, res) {
  return res.status(500).send({ auth: false });
}

/**
 * @api {POST} /users/resetPassword Reset the password
 * @apiName Reset the password
 * @apiGroup Users
 * @apiParam {String} email     email of the User.
 * @apiParam {int} token     Token of the User.
 * @apiParam {String} password password (not Hash) of the User.
 * @apiSuccess {Object} response Reponse.
 * @apiSuccess {Boolean} response.success true.
 * @apiSuccess {Object} response.user the user update.
 */
export function resetPassword(req, res) {
  return res.status(500).send({ auth: false });
}

/**
 * @api {POST} /users/verifyResetPassword Verify if the token of reset the password is valid
 * @apiName Verify if the password can be reset
 * @apiGroup Users
 * @apiParam {String} email     email of the User.
 * @apiParam {int} token     Token of the User.
 * @apiSuccess {Object} response Reponse.
 * @apiSuccess {Boolean} response.success true.
 */
export function validateResetPassword(req, res) {
  return res.status(500).send({ auth: false });
}
