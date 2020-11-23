/* eslint-disable import/no-anonymous-default-export */
import firebase from "firebase/app";
// import 'firebase/auth';
import "firebase/firestore";
import "firebase/storage";
// import * as firebaseui from 'firebaseui';
import ReduxSagaFirebase from "redux-saga-firebase";
import { firebaseConfig } from "../config";

const { apiKey, projectId } = firebaseConfig;

const valid = firebaseConfig && apiKey && projectId;

const firebaseApp = valid && firebase.initializeApp(firebaseConfig);

// const firebaseAuth = valid && firebase.auth();
// set firebase login persistence state

const firestore = valid && firebase.firestore();

const storage = valid && firebase.storage();

const rsf = valid && new ReduxSagaFirebase(firebaseApp, firestore);

const rsfFirestore = valid && rsf.firestore;

// const ui = valid && new firebaseui.auth.AuthUI(firebaseAuth);

export default { rsfFirestore, firestore, firebase, storage };