import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import api from "../services/api";

function MobileDetails() {

  const { id } = useParams();

  const [mobile, setMobile] = useState(null);

  useEffect(() => {
    getMobile();
  }, [id]);

  async function getMobile() {
    try {
      const response = await api.get(
        `/mobiles/${id}`
      );

      setMobile(response.data);

    } catch (error) {
      console.log(error);
    }
  }

  if (!mobile) {
    return <h2>Loading...</h2>;
  }

  return (
    <div className="mobile-details">

      <img
        src={mobile.image}
        alt={mobile.name}
      />

      <h1>{mobile.name}</h1>

      <h3>Brand</h3>
      <p>{mobile.brand}</p>

      <h3>Price</h3>
      <p>₹ {mobile.price}</p>

      <h3>Rating</h3>
      <p>⭐ {mobile.rating}</p>

      <h3>Description</h3>
      <p>{mobile.description}</p>

      <h3>Processor</h3>
      <p>{mobile.processor}</p>

      <h3>RAM</h3>
      <p>{mobile.ram}</p>

      <h3>Storage</h3>
      <p>{mobile.storage}</p>

      <h3>Display</h3>
      <p>{mobile.display}</p>

      <h3>Battery</h3>
      <p>{mobile.battery}</p>

      <h3>Camera</h3>
      <p>{mobile.camera}</p>

      <h3>Operating System</h3>
      <p>{mobile.os}</p>

    </div>
  );
}

export default MobileDetails;