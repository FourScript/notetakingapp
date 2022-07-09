/*
  /api/user endpoint for account actions
*/

import validateInput from "../../../api/middleware/validate-input";
import userService from "../../../api/services/user";

// Handle incoming requests
export default async function handler(req, res) {
  if (req.method === "POST") {
    return await login(req, res);
  } else if (req.method === "PUT") {
    return await register(req, res);
  } else if (req.method === "DELETE") {
    return await remove(req, res);
  } else {
    return res.status(405).json({error: `Method ${req.method} not allowed`});
  }
}

/*
  User controllers
*/
async function register(req, res) {
  const {email, password} = req.body;

  // Ensure the email and password are valid before continuing
  try {
    validateInput.user(email, password);
  } catch (error) {
    console.error(error.message);
    return res.status(400).json({error: error});
  }

  return await userService.register(email, password, res);
}

async function login(req, res) {
  const {email, password} = req.body;

  try {
    validateInput.user(email, password);
  } catch (error) {
    console.error(error.message);
    return res.status(400).json({error: error});
  }

  return await userService.login(email, password, res);
}

async function remove(req, res) {
  return await userService.remove(req, res);
}
