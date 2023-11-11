import { useState } from "react";
import { useNavigate } from "react-router-dom";

function SearchOrder() {
  const [searchOrder, setSearchOrder] = useState("");
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    if(!searchOrder) return;
    navigate(`/order/${searchOrder}`);
    setSearchOrder("");
  }
  
  return (
    <form onSubmit={handleSubmit}>
      <input
        placeholder="Search order "
        value={searchOrder}
        onChange={(e) => setSearchOrder(e.target.value)}
      />
    </form>
  );
}

export default SearchOrder;
