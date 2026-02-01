import { Header } from '../components/Header.jsx';
import './NotFoundPage.css';

export function NotFoundPage() {
  return (
    <div className="not-found">
      <Header />
      <h1>404</h1>
      <p>OH NO! Page not found!!!</p>
    </div>
  );
}
