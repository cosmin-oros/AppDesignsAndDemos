import { useContext } from 'react';
import { UserStoreContext } from '../contexts/UserContext';
import { UserProfile } from '../types';

export const useUserStore = () => {
  const { user, setUser } = useContext(UserStoreContext);

  const updateUserProfile = (newProfile: UserProfile) => {
    setUser(newProfile);
  };

  // ! implement functions to update specific details about the user

  const clearUserProfile = () => {
    setUser(null);
  };

  return {
    user,
    updateUserProfile,
    clearUserProfile,
  };
};