class loginPage{


      userNameInput(){

        return '//input[@placeholder="Username"]'
      }

      passwordInput(){

        return 'input[placeholder="Password"]'
      }

      loginBtn(){

        return 'button[type="submit"]'
      }

      loginErrorMessage(){

        return 'Invalid credentials'
      }
}

const login = new loginPage()

export default login