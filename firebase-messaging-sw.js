importScripts('https://www.gstatic.com/firebasejs/9.0.0/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/9.0.0/firebase-messaging-compat.js');


try {
  firebase.initializeApp(
    {
      apiKey: "",
  
      authDomain: "",
  
      projectId: "",
  
      storageBucket: "",
  
      messagingSenderId: "",
  
      appId: "",
  
      measurementId: "G-13NVHJR69Y"
    }
  );
  
} catch (error) {
  
}

try {
  const isSupported = firebase.messaging.isSupported();
  if (isSupported) {
    const messaging = firebase.messaging();
    messaging.onBackgroundMessage(({ title, body, image }) => {
      // const { title, body, image } =payload.notification;
      console.log('[firebase-messaging-sw.js] Received background message ', payload);
      self.registration.showNotification(title, { body, icon: image || '/assets/icons/icon-72x72.png' });
    });
  }

} catch (error) {
  console.error(error);
}

