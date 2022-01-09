// import Home from './routes/Home.svelte'
import Welcome from './routes/Welcome.svelte'
import Teacher from './routes/Teacher.svelte'
import Student from './routes/Student.svelte'
import ParentWelcome from './routes/ParentWelcome.svelte'
import ParentLogin from './routes/ParentLogin.svelte'
import ParentRegister from './routes/ParentRegister.svelte'
import Auth from './routes/Auth.svelte'
import Logout from './routes/Logout.svelte'
import NotFound from './routes/NotFound.svelte'

export default {
  '/': Welcome,
  '/teacher': Teacher,
  '/student': Student,
  '/parent': ParentWelcome,
  '/parent/login': ParentLogin,
  '/parent/register': ParentRegister,
  '/auth': Auth,
  '/logout': Logout,
  // The catch-all route must always be last
  '*': NotFound,
}
