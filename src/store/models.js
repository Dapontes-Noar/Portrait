export const login = {
  state: {
    auth: window.localStorage.getItem('logged') === 'true' || false,
    error: ''
  },
  reducers: {
    login(state) {
      return {
        ...state,
        auth: true
      }
    },
    logout(state) {
      return {
        ...state,
        auth: false
      }
    },
    error(state, payload) {
      return {
        ...state,
        error: payload
      }
    }
  },
  effects: dispatch => ({
    async loginAsync(data) {
      await new Promise(resolve => setTimeout(resolve, 2000))

      // Mock user
      const user = {
        email: 'example@mail.com',
        password: '123456'
      }

      if (data === user) {
        dispatch.login.login()
      } else {
        dispatch.login.error('Invalid Username or password')
      }
    },
  }),
}