import router from 'next/router';
import { loginUserVar } from 'src/apollo/cache';
import Cookie from 'universal-cookie';
import firebase from '../../firebaseConfig';
import { unSubMeta } from '../pages/_app.page';

const cookie = new Cookie();
export const useLogout = () => {
  const logout = async () => {
    if (unSubMeta) {
      unSubMeta();
    }
    await firebase.auth().signOut();
    cookie.remove('token');
    loginUserVar(null);
    router.push('/');
  };
  return { logout };
};
