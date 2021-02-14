import { Link } from 'react-router-dom';

export const FooterComponent = () => {
  return (
    <footer>
      <Link className='btn' to='/about'>About</Link>
      <p>Copyright &copy; {new Date().getFullYear()}</p>
      <p>Build with 💓💓💘 React</p>
      <p><a target="_blank" href="https://github.com/purkayasta/Task-Tracker">Fork This Repo 😁</a></p>
    </footer>
  )
}
