// stores/userStore.js
import { defineStore } from 'pinia';

export const useUserStore = defineStore('user', {
  state: () => ({
    name: '',
    phoneNumber: '',
    email: '',
    isLoggedIn: false,
  }),
  actions: {
    setUser(user) {
      this.name = user.displayName || '';
      this.phoneNumber = user.phoneNumber || '';
      this.email = user.email || '';
      this.isLoggedIn = true;
    },
    clearUser() {
      this.name = '';
      this.phoneNumber = '';
      this.email = '';
      this.isLoggedIn = false;
    },
  },
});
