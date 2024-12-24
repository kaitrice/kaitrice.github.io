import logo from '../../assets/logo.svg';
// import Button from './Button';

import './Header.css'

export default function Header() {
  return (
    <div id="header">
      <img src={logo} className="App-logo" alt="logo" />
      <h1>Kait Rice</h1>
      <h2>Full-Stack Developer</h2>
    </div>
  );
}