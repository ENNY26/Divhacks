import { 
    createUserWithEmailAndPassword, 
    signInWithEmailAndPassword, 
    GoogleAuthProvider, 
    signInWithPopup, 
    signOut 
} from "firebase/auth";
import { auth } from "./firebase";

// Sign up user with email and password
export const doCreateUserWithEmailAndPassword = async (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
};

// Sign in user with email and password
export const doSignInWithEmailAndPassword = async (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
};

// Sign in with Google
export const doSignInWithGoogle = async () => {
    const provider = new GoogleAuthProvider();
    return signInWithPopup(auth, provider);
};

// Sign out user
export const doSignOut = () => {
    return signOut(auth);
};
