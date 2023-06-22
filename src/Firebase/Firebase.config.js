// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDvDL6OTjyBMCf2Q-PBnWgRdlhuARe2uAM",
    authDomain: "bistro-boss-89171.firebaseapp.com",
    projectId: "bistro-boss-89171",
    storageBucket: "bistro-boss-89171.appspot.com",
    messagingSenderId: "747433597951",
    appId: "1:747433597951:web:dd6cb459ae4ad5b66c25ca"
};
// console.log(import.meta.env.VITE_apiKey)

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;