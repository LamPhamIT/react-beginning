import { useSelector } from 'react-redux';

function Username() {
  const username = useSelector((store) => store.user.username);

  return (
    <div className="hidden text-sm font-semibold md:block">{username}</div>
  );
}

export default Username;
