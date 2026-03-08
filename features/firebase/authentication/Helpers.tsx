import {
  createUserWithEmailAndPassword,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { SignupDetailsType } from "../types/auth";
import { firebaseAuth as auth } from "@/config/firebaseConfig";

export const signUpWithFirebase = ({ email, password }: SignupDetailsType) => {
  return createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      const user = userCredential.user;
      return user;
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      return { errorCode, errorMessage };
    });
};

export const signinWithFirebase = ({ email, password }: SignupDetailsType) => {
  return signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      const user = userCredential.user;
      return user;
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      return { errorCode, errorMessage };
    });
};

export const resetPasswordWithFirebase = (email: string) => {
  return sendPasswordResetEmail(auth, email)
    .then(() => {
      return { success: true };
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      return { errorCode, errorMessage };
    });
};
