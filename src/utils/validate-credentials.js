export function isEmailValid(email) {
  return !(
    email.length > 0 && !email.match(/^[^\s@]+@([^\s@.,]+\.)+[^\s@.,]{2,}$/)
  );
}

export function isPasswordValid(password) {
  return !(password.length < 8 && password.length > 0);
}

export function isConfirmPasswordValid(
  confirmPassword,
  password,
  passwordValid
) {
  return !getConfirmPasswordErrorText(confirmPassword, password, passwordValid);
}

export function getConfirmPasswordErrorText(
  confirmPassword,
  password,
  passwordValid
) {
  if (confirmPassword.length !== 0 && password.length !== 0) {
    if (password !== confirmPassword && passwordValid) {
      return "Passwords do not match.";
    } else if (!passwordValid) {
      return "Please check that your password above meets the requirements.";
    } else if (password.length === 0) {
      return "The password field above is empty.";
    } else {
      return "";
    }
  } else if (password.length === 0 && confirmPassword.length !== 0) {
    return "The password field above is empty.";
  } else {
    return "";
  }
}
