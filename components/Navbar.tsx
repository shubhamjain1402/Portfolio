'use client';
import { useEffect, useState } from 'react';
import { Menu, Moon, Sun, X, ArrowUpRight } from 'lucide-react';
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { portfolio } from '@/data/portfolio';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState('');
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries)
          if (entry.isIntersecting) setActive('#' + entry.target.id);
      },
      { rootMargin: '-15% 0px -60% 0px' },
    );
    document
      .querySelectorAll('main section[id]')
      .forEach((element) => observer.observe(element));
    return () => {
      window.removeEventListener('scroll', onScroll);
      observer.disconnect();
    };
  }, []);
  function toggleTheme() {
    const next =
      document.documentElement.dataset.theme === 'dark' ? 'light' : 'dark';
    document.documentElement.dataset.theme = next;
    try {
      localStorage.setItem('portfolio-theme', next);
    } catch {
      /* A blocked store must not break the theme control. */
    }
  }
  return (
    <header className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <a className="wordmark" href="#top" aria-label={`${portfolio.name} home`}>
        <span className="wordmark-symbol">
          {portfolio.initials}
          <i />
        </span>
        <span className="wordmark-name">{portfolio.name}</span>
      </a>
      <nav className="desktop-nav" aria-label="Main navigation">
        {portfolio.navigation.map((link, index) => (
          <a
            key={link.href}
            href={link.href}
            aria-current={active === link.href ? 'location' : undefined}
          >
            <span>0{index + 1}</span>
            {link.label}
          </a>
        ))}
      </nav>
      <div className="nav-controls">
        <button
          className="theme-toggle"
          aria-label="Toggle light and dark theme"
          onClick={toggleTheme}
        >
          <Moon className="moon-icon" size={18} />
          <Sun className="sun-icon" size={18} />
        </button>
        <Dialog open={open} onOpenChange={setOpen}>
          <DialogTrigger
            className="mobile-menu-trigger"
            aria-label="Open navigation"
          >
            <Menu size={21} />
          </DialogTrigger>
          <DialogContent
            className="mobile-navigation"
            aria-describedby={undefined}
            showCloseButton={false}
          >
            <div className="mobile-menu-heading">
              <DialogTitle>Explore</DialogTitle>
              <DialogClose aria-label="Close navigation">
                <X size={22} />
              </DialogClose>
            </div>
            <nav aria-label="Mobile navigation">
              {portfolio.navigation.map((link, index) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                >
                  <span>0{index + 1}</span>
                  {link.label}
                  <ArrowUpRight size={25} />
                </a>
              ))}
            </nav>
            <p className="eyebrow">
              {portfolio.name} / {portfolio.id}
            </p>
          </DialogContent>
        </Dialog>
      </div>
    </header>
  );
}
