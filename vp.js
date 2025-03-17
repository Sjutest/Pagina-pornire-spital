// vp.js
import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs } from "firebase/firestore"; 

// Configurația Firebase
const firebaseConfig = {
  apiKey: "AIzaSyDnkONLSIMBnDYgOlpmIl5a9_gN7iuWY9A",
  authDomain: "sevrer-bc029.firebaseapp.com",
  projectId: "sevrer -bc029",
  storageBucket: "sevrer-bc029.firebasestorage.app",
  messagingSenderId: "450436026736",
  appId: "1:450436026736:web:31fc7cb68a820f8d27ffb5",
  measurementId: "G-PBVMK1N35V"
};

// Inițializează Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// Funcția pentru a încărca programările
async function loadAppointments() {
  const appointmentsList = document.getElementById('appointmentsList');
  const querySnapshot = await getDocs(collection(db, "appointments"));
  
  querySnapshot.forEach((doc) => {
    const appointment = doc.data();
    const listItem = document.createElement('li');
    listItem.className = 'list-group-item';
    listItem.textContent = `${appointment.name} - ${appointment.date} la ${appointment.time}`;
    appointmentsList.appendChild(listItem);
  });
}

// Apelarea funcției pentru a încărca programările
loadAppointments();
