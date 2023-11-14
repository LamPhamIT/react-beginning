/* eslint-disable-next-line */
import { Link } from 'react-router-dom';

function Button({ children, disabled, to, type, onClick }) {
  const base = `transition-color inline-block rounded-full bg-yellow-400 
  font-semibold uppercase tracking-wide text-stone-500 duration-300 hover:bg-yellow-300 f
  ocus:outline-none focus:ring focus:ring-yellow-300 focus:ring-offset-2 disabled:cursor-not-allowed`;

  const styles = {
    primary: base + ' px-4 py-3',
    small: base + ' py-2 px-3 text-xs',
    round: base + ' py-1 px-2 text-xs',
    secondary: `transition-color inline-block rounded-full border-2 border-stone-300 px-4 py-2.5
    font-semibold uppercase tracking-wide text-stone-500 duration-300 hover:bg-stone-300 hover:text-stone-800
    focus:text-stone-800 focus:outline-none focus:ring focus:ring-stone-300 focus:ring-offset-2 
    disabled:cursor-not-allowed`,

  };
  if (to) {
    return (
      <Link to={to} className={styles[type]}>
        {children}
      </Link>
    );
  }
  if(onClick) {
    return (
      <button disabled={disabled} className={styles[type]} onClick={onClick}>
        {children}
      </button>
    );
  }
  return (
    <button disabled={disabled} className={styles[type]}>
      {children}
    </button>
  );
}

export default Button;
