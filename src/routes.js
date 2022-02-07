import Home from './routes/Home.svelte'
import Welcome from './routes/Welcome.svelte'

import TeacherWelcome from './routes/TeacherWelcome.svelte'
import TeacherRegister from './routes/TeacherRegister.svelte'
import TeacherLogin from './routes/TeacherLogin.svelte'

import StudentWelcome from './routes/StudentWelcome.svelte'
import StudentRegister from './routes/StudentRegister.svelte'
import StudentLogin from './routes/StudentLogin.svelte'

import ParentWelcome from './routes/ParentWelcome.svelte'
import ParentLogin from './routes/ParentLogin.svelte'
import ParentRegister from './routes/ParentRegister.svelte'

import Auth from './routes/Auth.svelte'
import Logout from './routes/Logout.svelte'
import NotFound from './routes/NotFound.svelte'

export default {
  '/': Home,
  '/welcome': Welcome,
  '/teacher': TeacherWelcome,
  '/teacher/register': TeacherRegister,
  '/teacher/login': TeacherLogin,
  '/student': StudentWelcome,
  '/student/register': StudentRegister,
  '/student/login': StudentLogin,
  '/parent': ParentWelcome,
  '/parent/login': ParentLogin,
  '/parent/register': ParentRegister,
  '/auth': Auth,
  '/logout': Logout,
  // The catch-all route must always be last
  '*': NotFound,
}
