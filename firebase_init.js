// SEU OBJETO firebaseConfig AQUI!
// Copie do Console Firebase (Configurações do Projeto > Seus apps > Configuração SDK)
const firebaseConfig = {
  apiKey: "AIzaSyCee4pXFdNxmdSv4VA90KdihyapXvAGt8w",
  authDomain: "controle-financeiro-e190f.firebaseapp.com",
  projectId: "controle-financeiro-e190f",
  storageBucket: "controle-financeiro-e190f.firebasestorage.app",
  messagingSenderId: "711653253846",
  appId: "1:711653253846:web:f633ce5cc025e2c8aedf77",
  measurementId: "G-ZKEY3BJN9G"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Exporte as instâncias para que possam ser usadas em outras páginas
const auth = firebase.auth();
const db = firebase.firestore();