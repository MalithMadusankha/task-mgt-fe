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

export async function SendResetPasswordEmail(email) {
  Auth.sendPasswordResetEmail(email)
    .then(() => {
      // Password reset email sent!
      // ..
    })
    .catch((error) => {
      // var errorCode = error.code;
      // var errorMessage = error.message;
      // ..
    });
}

export async function GetFirebaseID() {
  // Get the Firebase User ID of the currently signed-in user
  var user = Auth.currentUser;
  if (user) {
    var firebaseUserId = user.uid;
    return firebaseUserId;
  } else {
    // User is not signed in
    return 0;
  }
}

export default async function SignUp(email, password) {
  try {
    const userCredential = await Auth.createUserWithEmailAndPassword(
      email,
      password
    );
    let user = userCredential.user;
    let firebaseUserId = user.uid;
    const token = await userCredential.user.getIdToken();
    console.log(token);
    localStorage.setItem("token", token);
    return firebaseUserId;
  } catch (error) {
    console.log("error : ", error);
    return 0;
  }
}
