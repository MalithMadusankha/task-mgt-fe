import { Auth } from "./firebase";

export async function SignIn(email, password) {
  // Sign in with email and password
  try {
    const userCredential = await Auth.signInWithEmailAndPassword(
      email,
      password
    );
    const token = await userCredential.user.getIdToken();
    console.log(token);
    localStorage.setItem("token", token);
    return 1;
  } catch (error) {
    console.log("error : ", error);
    return 0;
  }
}

export async function SignOut() {
  try {
    await Auth.signOut();
    localStorage.clear();
    return 1;
  } catch (error) {
    console.log("error: ", error);
    return 0;
  }
}

export default async function SignUp(email, password) {
  try {
    const userCredential = await Auth.createUserWithEmailAndPassword(
      email,
      password
    );
    const token = await userCredential.user.getIdToken();
    console.log(token);
    localStorage.setItem("token", token);
    return 1;
  } catch (error) {
    console.log("error : ", error);
    return 0;
  }
}
