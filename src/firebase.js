import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
const firebaseConfig = {
    apiKey: "AIzaSyBRQTnK0fdxbrHJRr68yaEl6z8JvdZsF2k",
    authDomain: "digital-notebook-97645.firebaseapp.com",
    databaseURL: "https://digital-notebook-97645-default-rtdb.firebaseio.com",
    projectId: "digital-notebook-97645",
    storageBucket: "digital-notebook-97645.appspot.com",
    messagingSenderId: "27230321946",
    appId: "1:27230321946:web:40d29ac8dd0286e8ca40a3"
};

const app = initializeApp(firebaseConfig);
const db = getDatabase(app)

export default db;