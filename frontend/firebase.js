// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, RecaptchaVerifier, onAuthStateChanged, signInWithPhoneNumber, createUserWithEmailAndPassword, GoogleAuthProvider, signInWithPopup, updateProfile } from "firebase/auth";
import { getFirestore, collection, addDoc, doc, setDoc } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBzACQJXOZI7kiNeHwgFauVGc1Kwou1RnA",
  authDomain: "techvanza-b2076.firebaseapp.com",
  projectId: "techvanza-b2076",
  storageBucket: "techvanza-b2076.firebasestorage.app",
  messagingSenderId: "324836470904",
  appId: "1:324836470904:web:3d26574ccf3ecf8c77bd8d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
auth.languageCode = 'en';

const db = getFirestore(app);


const provider = new GoogleAuthProvider();

const setupRecaptcha = () => {
  window.recaptchaVerifier = new RecaptchaVerifier(auth, 'recaptcha-container', {
    'size': 'normal',
    'callback': (response) => {
      // reCAPTCHA solved, allow signInWithPhoneNumber.
      console.log("ReCaptcha Verified", response);
    }
  }, auth);
  window.recaptchaVerifier.render().then((widgetId) => {
    console.log("reCAPTCHA rendered with widget ID:", widgetId);
  });
}

let confresult = null;

const signIn = ({firstname, lastname, contact, password}) => {
  const appVerifier = window.recaptchaVerifier;

  signInWithPhoneNumber(auth, contact, appVerifier)
    .then((confirmationResult) => {
      // SMS sent. Prompt user to type the code from the message, then sign the
      // user in with confirmationResult.confirm(code).
      console.log("OTP Sent.");
      confresult = confirmationResult;
    }).catch((error) => {
      console.log("SMS not sent", error);
      // Error; SMS not sent
      // ...
    });
}

const verifyOtp = (otp) => {
  confresult.confirm(otp)
  .then((result) => {
    console.log("User signed in successfully:", result.user);
})
.catch((error) => {
    console.error("Error during OTP verification:", error);
});
};






// const signUp = async (username, email, password) => {
//   try {
//     // Create user with email and password
//     const userCredential = await createUserWithEmailAndPassword(auth, email, password);
//     const user = userCredential.user;

//     // Update the displayName with the username
//     await updateProfile(user, { displayName: username });

//     // Store the username in Firestore
//     await setDoc(doc(db, "users", user.uid), {
//         username: username,
//         email: email,
//     });

//     console.log("User signed up successfully!");
// } catch (error) {
//     console.error("Error signing up:", error);
// }

// }

// const signIn = async (email, password) => {
//   try {
//     // Create user with email and password
//     const userCredential = await signInWithEmailAndPassword(auth, email, password);
//     const user = userCredential.user;


//     console.log("User signed up successfully!");
//   } catch (error) {
//       console.error("Error signing up:", error);
//   }

// }

const googleSignIn = async (redirect) => {
  signInWithPopup(auth, provider)
  .then((result) => {
    // This gives you a Google Access Token. You can use it to access the Google API.
    const credential = GoogleAuthProvider.credentialFromResult(result);
    const token = credential.accessToken;
    // The signed-in user info.
    const user = result.user;
    // IdP data available using getAdditionalUserInfo(result)
    redirect(user.uid);
    // ...
  }).catch((error) => {
    // Handle Errors here.
    const errorCode = error.code;
    const errorMessage = error.message;
    // The email of the user's account used.
    const email = error.customData.email;
    // The AuthCredential type that was used.
    const credential = GoogleAuthProvider.credentialFromError(error);
    // ...
  });
}

const saveChat = async (message, sender) => {
  await addDoc(collection(db, 'chatlogs'), {
    message,
    sender,
    timestamp: new Date(),
  });
};


const logOut = () => {
  signOut(auth).then(() => {
    // Sign-out successful.
  }).catch((error) => {
    // An error happened.
  });
}

export {setupRecaptcha, signIn, verifyOtp, googleSignIn, logOut};