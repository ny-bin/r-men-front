import { useState, useCallback, ChangeEvent, FormEvent } from 'react';
import firebase from '../../firebaseConfig';

export const useFirebaseAuth = (isLogin: boolean) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [userName, setUserName] = useState('');
  const [passwordConf, setPasswordConf] = useState('');

  const emailChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  }, []);

  const pwChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  }, []);

  const nameChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    setUserName(e.target.value);
  }, []);

  const pwConfChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    setPasswordConf(e.target.value);
  }, []);

  const resetInput = useCallback(() => {
    setEmail('');
    setPassword('');
  }, []);

  const authUser = useCallback(
    async (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      if (isLogin) {
        try {
          await firebase.auth().signInWithEmailAndPassword(email, password);
        } catch (e) {
          alert(e.message);
        }
        resetInput();
      } else {
        try {
          await firebase.auth().createUserWithEmailAndPassword(email, password);
        } catch (e) {
          alert(e.message);
        }
        resetInput();
      }
    },
    [email, password, isLogin]
  );

  return {
    email,
    password,
    emailChange,
    pwChange,
    resetInput,
    isLogin,
    authUser,
    userName,
    nameChange,
    passwordConf,
    pwConfChange,
  };
};
