import { users } from './sampleData.js'

export function getUserFromStorage() {
  try {
    let user = window.localStorage.getItem('user')
    // if no user, redirect to login (normally)
    if (!user) {
      const newUser = users[0]
      window.localStorage.setItem('user', JSON.stringify(newUser))
      user = newUser
    }
    return JSON.parse(user)
  } catch (e) {
    console.error(e)
    return {}
  }
}