// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyDqcBi8ZkIIpMp5GJg00WCf-V2kXCn3Y8w",
  authDomain: "bar-data-193c0.firebaseapp.com",
  databaseURL: "https://bar-data-193c0.firebaseio.com",
  projectId: "bar-data-193c0",
  storageBucket: "bar-data-193c0.appspot.com",
  messagingSenderId: "399670917413",
  appId: "1:399670917413:web:d9318a9546c950f9c682cc"
};


export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);