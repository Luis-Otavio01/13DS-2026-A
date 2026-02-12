import { useEffect, useMemo, useState } from 'react';
import './index.css';
import reactLogo from './assets/react-logo.svg';

const App = () => {
    const [theme, setTheme] = useState(() => {
        const prefersDark = window.matchMedia?.('(prefers-color-scheme: dark)').matches;
        return prefersDark ? 'dark' : 'light';
    });
    const [visits, setVisits] = useState(0);
    const [now, setNow] = useState(() => new Date());

    useEffect(() => {
        const id = setInterval(() => setNow(new Date()), 1000);
        return () => clearInterval(id);
    }, []);

    useEffect(() => {
        const stored = Number(localStorage.getItem('visits') || 0) + 1;
        setVisits(stored);
        localStorage.setItem('visits', String(stored));
    }, []);

    useEffect(() => {
        document.body.dataset.theme = theme;
    }, [theme]);

    const greeting = useMemo(() => {
        const hours = now.getHours();
        if (hours < 12) return 'Bom dia';
        if (hours < 18) return 'Boa tarde';
        return 'Boa noite';
    }, [now]);

    const handleToggleTheme = () => {
        setTheme((current) => (current === 'dark' ? 'light' : 'dark'));
    };

    return (
        <div className="app">
            <header className="hero">
                <img src={reactLogo} className="logo" alt="React logo" />
                <div>
                    <p className="eyebrow">Vite + React</p>
                    <h1>{greeting}, bem-vindo!</h1>
                    <p className="subtitle">
                        Um app moderno com hooks, tema dinâmico e base pronta para evoluir.
                    </p>
                    <div className="actions">
                        <button className="primary" onClick={handleToggleTheme} type="button">
                            Alternar para tema {theme === 'dark' ? 'claro' : 'escuro'}
                        </button>
                        <span className="pill">Visitas: {visits}</span>
                    </div>
                </div>
            </header>

            <section className="grid">
                <article className="card">
                    <h2>Hooks prontos</h2>
                    <p>UseState, UseEffect e UseMemo para basear fluxos reativos.</p>
                </article>
                <article className="card">
                    <h2>Design consistente</h2>
                    <p>Tokens de cor e espaçamento globais com tema claro/escuro.</p>
                </article>
                <article className="card">
                    <h2>Vite configurado</h2>
                    <p>Build rápido, HMR e estrutura enxuta para acelerar o desenvolvimento.</p>
                </article>
            </section>
        </div>
    );
};

export default App;
