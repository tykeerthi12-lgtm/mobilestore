import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import api from "../services/api";

function EditMobile() {

  const { id } = useParams();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    brand: "",
    price: "",
    rating: "",
    image: "",
    description: "",
    processor: "",
    ram: "",
    storage: "",
    display: "",
    battery: "",
    camera: "",
    os: ""
  });

  useEffect(() => {
    getMobile();
  }, [id]);

  async function getMobile() {
    try {
      const response = await api.get(`/mobiles/${id}`);
      setFormData(response.data);
    } catch (error) {
      console.log(error);
    }
  }

  function handleChange(e) {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  }

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      await api.put(`/mobiles/${id}`, {
        ...formData,
        price: Number(formData.price),
        rating: Number(formData.rating)
      });

      alert("Mobile Updated Successfully!");
      navigate("/mobiles");

    } catch (error) {
      console.log(error);
      alert("Failed to update mobile");
    }
  }

  return (
    <div className="form-container">

      <h2>Edit Mobile</h2>

      <form onSubmit={handleSubmit}>

        <input
          type="text"
          name="name"
          placeholder="Mobile Name"
          value={formData.name}
          onChange={handleChange}
          required
        />

        <input
          type="text"
          name="brand"
          placeholder="Brand"
          value={formData.brand}
          onChange={handleChange}
          required
        />

        <input
          type="number"
          name="price"
          placeholder="Price"
          value={formData.price}
          onChange={handleChange}
          required
        />

        <input
          type="number"
          name="rating"
          placeholder="Rating"
          step="0.1"
          value={formData.rating}
          onChange={handleChange}
          required
        />

        <input
          type="text"
          name="image"
          placeholder="Image URL"
          value={formData.image}
          onChange={handleChange}
          required
        />

        <textarea
          name="description"
          placeholder="Description"
          value={formData.description}
          onChange={handleChange}
          required
        />

        <input
          type="text"
          name="processor"
          placeholder="Processor"
          value={formData.processor}
          onChange={handleChange}
        />

        <input
          type="text"
          name="ram"
          placeholder="RAM"
          value={formData.ram}
          onChange={handleChange}
        />

        <input
          type="text"
          name="storage"
          placeholder="Storage"
          value={formData.storage}
          onChange={handleChange}
        />

        <input
          type="text"
          name="display"
          placeholder="Display"
          value={formData.display}
          onChange={handleChange}
        />

        <input
          type="text"
          name="battery"
          placeholder="Battery"
          value={formData.battery}
          onChange={handleChange}
        />

        <input
          type="text"
          name="camera"
          placeholder="Camera"
          value={formData.camera}
          onChange={handleChange}
        />

        <input
          type="text"
          name="os"
          placeholder="Operating System"
          value={formData.os}
          onChange={handleChange}
        />

        <button type="submit" className="submit-btn">
          Update Mobile
        </button>

      </form>
    </div>
  );
}

export default EditMobile;