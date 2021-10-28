// Import the functions you need from the SDKs you need
import { FirebaseApp, initializeApp } from 'firebase/app';
import {
  Auth,
  browserLocalPersistence,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  getAuth,
  setPersistence,
  User,
  signOut,
} from 'firebase/auth';
import { Ref, ref, readonly } from 'vue';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

import useGraphQL from './useGraphQL';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyCDbjByHisdirk9A9kNPGWY414YCe_j-lY',
  authDomain: 'fullstacklabo07.firebaseapp.com',
  projectId: 'fullstacklabo07',
  storageBucket: 'fullstacklabo07.appspot.com',
  messagingSenderId: '531217237979',
  appId: '1:531217237979:web:00c3c970ece26bbe1d49fe',
};

// Initialize Firebase
const app: FirebaseApp = initializeApp(firebaseConfig);
const auth: Auth = getAuth();

// Important code
// userSelectedOptions.persistance
setPersistence(auth, browserLocalPersistence);

let user: Ref<User | null> = ref(auth.currentUser);

export default () => {
  const { query } = useGraphQL();

  const restoreAuth = (): Promise<boolean> => {
    return new Promise((resolve, reject) => {
      try {
        auth.onAuthStateChanged(async (state) => {
          if (state) {
            user.value = state;
            resolve(true);
          }
        });
      } catch (error) {
        console.error(error);
        reject(false);
      }
    });
  };
  const createUser = (name: string, email: string, password: string) => {
    createUserWithEmailAndPassword(auth, email, password)
      .then(async (userCredential) => {
        //Signed in => success => let's try record to our disable
        //Eigen account op server bijhouden
        // const user = userCredential.user;
        user.value = userCredential.user;
        const response = await query(
          `createUser`,
          `mutation createUser($data: UserInput = {uuid:"",name:""})
          {createUser(data:$data){
              id
            name
             uuid
            }
        }`,
          { data: { uuid: user.uid, name: name } }
        );
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const login = (email: string, password: string): Promise<boolean> => {
    return new Promise((resolve, reject) => {
      signInWithEmailAndPassword(auth, email, password)
        .then(async (userCredential) => {
          //   console.log(await userCredential.user.getIdToken());

          user.value = userCredential.user;
          resolve(true);
        })
        .catch((error: { code: any; message: any }) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          reject(error);
        });
    });
  };

  const logout = () => {
    return signOut(auth);
  };

  return { createUser, login, logout, restoreAuth, user: readonly(user) };
};
