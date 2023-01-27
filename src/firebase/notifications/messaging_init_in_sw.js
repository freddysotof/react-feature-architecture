import { initializeApp } from "firebase/app";
import { getMessaging,getToken } from "firebase/messaging";

// TODO: Replace the following with your app's Firebase project configuration
// See: https://firebase.google.com/docs/web/learn-more#config-object
const firebaseConfig = {
    apiKey: "",

    authDomain: "",
  
    projectId: "",
  
    storageBucket: "",
  
    messagingSenderId: "",
  
    appId: "",
  
    measurementId: ""
  
};

// Initialize Firebase
if(firebaseConfig.apiKey.length>1){

    
    const app = initializeApp(firebaseConfig);


    // Initialize Firebase Cloud Messaging and get a reference to the service
    const messaging = getMessaging(app);
    
}

