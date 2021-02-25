export const login = {
  state: {
    auth: window.localStorage.getItem('TOKEN') || false,
    user: null
  },
  reducers: {
    login(state, payload) {
      return {
        ...state,
        auth: true,
        user: payload
      }
    },
    logout(state) {
      return {
        ...state,
        auth: false,
        user: null
      }
    }
  },
  effects: dispatch => ({
    async loginAsync(data) {
      try {
        await new Promise(resolve => setTimeout(resolve, 300))

        // Mock user
        const user = { email: 'example@mail.com', password: '123456' }
        
        if (data.email !== user.email || data.password !== user.password) {
          throw new Error('Invalid Username or password')
        } 

        dispatch.login.login(user)
        return "TOKEN SECRETO";

      } catch (error) {
        throw error;
      }
    },
    async logoutAsync() {
      await new Promise(resolve => setTimeout(resolve, 300));
      dispatch.login.logout();
    },
  }),
}