/**
 * @api {POST} /auth/register Register
 * @apiName register
 * @apiGroup Auth
 *
 * @apiParam {String} lastName   lastName of the User.
 * @apiParam {String} firstName   firstName of the User.
 * @apiParam {String} email     email of the User.
 * @apiParam {Date} birthdate     birthdate of the User.
 * @apiParam {Gender} gender     gender of the User.
 * @apiParam {String} password password (not Hash) of the User.
 * @apiParam {String} facebookId facebookId of the User (if exist).
 *
 * @apiSuccess {Boolean} auth If the authentification is ok.
 * @apiSuccess {String} token  token of authentification.
 * @apiSuccess {Object} response.user the user login.
 */
export function register(req, res) {
  return res.status(500).send({ auth: false });
}

/**
 * @api {POST} /auth/sendConfirmationEmail Send confirmation email to the user
 * @apiName sendConfirmationMail
 * @apiGroup Auth
 *
 * @apiParam {String} email   email of the User.
 * @apiSuccess {Object} response Reponse.
 * @apiSuccess {Boolean} response.success true.
 */
export function sendConfirmationEmail(req, res) {
  return res.status(500).send({ auth: false });
}

/**
 * @api {GET} /auth/valid/:token Validate Account
 * @apiParam {Number} Unique token
 * @apiName Validate Account
 * @apiGroup Auth
 * @apiSuccess {Object} response Reponse.
 * @apiSuccess {Boolean} response.success true.
 */
export function valid(req, res) {
  return res.status(500).send({ auth: false });
}

/**
 * @api {POST} /auth/login Login
 * @apiName login
 * @apiGroup Auth
 *
 * @apiParam {String} password  Required Password of the User.
 * @apiParam {String} email  Required Mail of the User.
 *
 * @apiSuccess {Boolean} auth If the authentification is ok.
 * @apiSuccess {String} token  token of authentification.
 * @apiSuccess {Object} response.user the user login.
 */
export function login(req, res) {
  return res.status(500).send({ auth: false });
}

/**
 * @api {get} /auth/logout Logout
 * @apiName logout
 * @apiGroup Auth
 *
 * @apiSuccess {Boolean} auth authentification false.
 * @apiSuccess {String} token  token null.
 */
export function logout(req, res) {
  return res.status(500).send({ auth: false });
}


/**
 * connection with Facebook
 * If user exist then return token else create user and return token
 * @param req
 * @param res
 */
export function loginFacebook(req, res) {
  return res.status(500).send({ auth: false });
}

