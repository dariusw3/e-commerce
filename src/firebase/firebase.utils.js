import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyAhuof1xC05vd5yKRBJ8XXQmy2oyuyldfo",
  authDomain: "outstep-db.firebaseapp.com",
  projectId: "outstep-db",
  storageBucket: "outstep-db.appspot.com",
  messagingSenderId: "721304906649",
  appId: "1:721304906649:web:cfef6e961194217c208108",
  measurementId: "G-8QZG838LJX",
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData,
      });
    } catch (error) {
      console.log("error creating user", error.message);
    }
  }
  return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });

export const SignInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
