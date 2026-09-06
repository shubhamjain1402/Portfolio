import { portfolio } from '@/data/portfolio';
import { ArrowUp } from 'lucide-react';
export default function Footer() {
  return (
    <footer className="footer container">
      <div>
        <strong>{portfolio.name}</strong>
        <p>{portfolio.title}</p>
      </div>
      <a className="back-top" href="#top">
        Back to top <ArrowUp size={16} />
      </a>
    </footer>
  );
}
