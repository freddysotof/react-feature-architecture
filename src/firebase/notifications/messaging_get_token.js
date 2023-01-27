// This snippet file was generated by processing the source file:
// ./messaging-next/index.js
//
// To update the snippets in this file, edit the source and then run
// 'npm run snippets'.

// [START messaging_get_token_modular]
import { getMessaging, getToken } from "firebase/messaging";

// Get registration token. Initially this makes a network call, once retrieved
// subsequent calls to getToken will return from cache.


export const requestNotificationPermission = () => {
  console.log('Requesting permission...');
  Notification.requestPermission().then((permission) => {
    if (permission === 'granted') {
      // Retrieve an instance of Firebase Messaging so that it can handle background
      // messages.

      const messaging = getMessaging();

      console.log('Notification permission granted.');
      const { VITE_APP_VAPID_KEY } = import.meta.env;
      const publicKey = VITE_APP_VAPID_KEY;


      getToken(messaging, { vapidKey: VITE_APP_VAPID_KEY })
        .then((currentToken) => {
          if (currentToken)
            console.log('currentToken ', currentToken);
          else
            console.log('No registration token available. Request permission to generate one.');
        })
        .catch((err) => {
          console.log('An error occurred while retrieving token. ', err)
        })
    }
    else
      console.log('Do not have permission')
  })
}

try {
  // [END messaging_get_token_modular]
  requestNotificationPermission();
} catch (error) {

}