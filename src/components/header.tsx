import { Link } from 'react-router-dom';

export function Header() {
  return (
    <header>
      <Link to="/">
        <h1>KANGOROOO!!!</h1>
      </Link>
      <Link to="/auth">Auth</Link>
    </header>
  );
}
