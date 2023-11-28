import validator from "validator";

export default function validPassword(password: string) {
  // type
  if (typeof password !== "string") {
    return "Invalid password type";
  }
  // min length
  if (password.length < 8) {
    return "Password must be longer than 8";
  }
  // max length
  if (password.length > 16) {
    return "Password must be shorter than 16";
  }
  // uppercase
  if (!/[A-Z]/.test(password)) {
    return "Password must contain uppercase";
  }
  // lowercase
  if (!/[a-z]/.test(password)) {
    return "Password must contain lowercase";
  }
  if (!/\d/.test(password)) {
    return "Password must contain digit";
  }
  if (!/[!@#$%^&*(),.?":{}|<>]/.test(password)) {
    return "Password must contain special character";
  }
  if (!/\/\\/.test(password)) {
    return "Password should not contain /";
  }

  return;
}
