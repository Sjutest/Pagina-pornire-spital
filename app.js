// app.js
import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc } from "firebase/firestore"; 

// Configurația Firebase
const firebaseConfig = {
  apiKey: "AIzaSyDnkONLSIMBnDYgOlpmIl5a9_gN7iuWY9A",
  authDomain: "sevrer-bc029.firebaseapp.com",
  projectId: "sevrer-bc029",
  storageBucket: "sevrer-bc029.firebasestorage.app",
  messagingSenderId: "450436026736",
  appId: "1:450436026736:web:31fc7cb68a820f8d27ffb5",
  measurementId: "G-PBVMK1N35V"
};

// Inițializează Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// Funcția pentru a salva programarea
async function saveAppointment(appointmentData) {
  try {
    const docRef = await addDoc(collection(db, "appointments"), appointmentData);
    console.log("Programarea a fost salvată cu ID: ", docRef.id);
    
    // Redirecționează utilizatorul către vp.html
    window.location.href = "vp.html"; // Redirecționare
  } catch (e) {
    console.error("Eroare la salvarea programării: ", e);
  }
}

// Gestionarea trimiterea formularului
document.getElementById('appointmentForm').addEventListener('submit', async (e) => {
  e.preventDefault();
  
  const appointmentData = {
    name: document.getElementById('name').value,
    email: document.getElementById('email').value,
    phone: document.getElementById('phone').value,
    date: document.getElementById('date').value,
    time: document.getElementById('time').value
  };

  await saveAppointment(appointmentData);
});
