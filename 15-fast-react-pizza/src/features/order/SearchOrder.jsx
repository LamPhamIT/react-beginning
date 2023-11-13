import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function SearchOrder() {
  const [searchOrder, setSearchOrder] = useState('');
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    if (!searchOrder) return;
    navigate(`/order/${searchOrder}`);
    setSearchOrder('');
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        placeholder="Search order "
        value={searchOrder}
        onChange={(e) => setSearchOrder(e.target.value)}
        className="transition:all w-28 rounded-full 
        bg-yellow-100 px-4 py-2 text-sm duration-300 
        placeholder:text-stone-400 focus:w-72 focus:outline-none 
        focus:ring focus:ring-yellow-500 focus:ring-opacity-50
        sm:w-64 sm:focus:w-72"
      />
    </form>
  );
}

export default SearchOrder;
