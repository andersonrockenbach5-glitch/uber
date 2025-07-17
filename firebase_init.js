// firebase_init.js

// Importações modulares do Firebase SDK
import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.6.10/firebase-app.js';
import { getAuth } from 'https://www.gstatic.com/firebasejs/9.6.10/firebase-auth.js';
import { getFirestore } from 'https://www.gstatic.com/firebasejs/9.6.10/firebase-firestore.js';

// Sua configuração do Firebase
const firebaseConfig = {
    apiKey: "AIzaSyCee4pXFdNxmdSv4VA90KdihyapXvAGt8w",
    authDomain: "controle-financeiro-e190f.firebaseapp.com",
    projectId: "controle-financeiro-e190f",
    storageBucket: "controle-financeiro-e190f.firebasestorage.app",
    messagingSenderId: "711653253846",
    appId: "1:711653253846:web:f633ce5cc025e2c8aedf77",
    measurementId: "G-ZKEY3BJN9G"
};

// Inicializa o Firebase
const app = initializeApp(firebaseConfig);

// Inicializa serviços Firebase e atribui-os a variáveis
const auth = getAuth(app);
const db = getFirestore(app);

// EXPORTA os objetos para que possam ser importados em outros arquivos
export { auth, db, firebaseConfig };