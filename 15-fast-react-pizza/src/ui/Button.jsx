/* eslint-disable-next-line */
import { Link } from 'react-router-dom';

function Button({ children, disabled, to, type }) {
  const base = `transition-color inline-block rounded-full bg-yellow-400 
  font-semibold uppercase tracking-wide text-stone-500 duration-300 hover:bg-yellow-300 f
  ocus:outline-none focus:ring focus:ring-yellow-300 focus:ring-offset-2 disabled:cursor-not-allowed`;

  const styles = {
    primary: base + " px-4 py-3",
    small: base + " py-2 px-3 text-xs"
  };
  if (to) {
    return (
      <Link to={to} className={styles[type]}>
        {children}
      </Link>
    );
  }
  return (
    <button disabled={disabled} className={styles[type]}>
      {children}
    </button>
  );
}

export default Button;
