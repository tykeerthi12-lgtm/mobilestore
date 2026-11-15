import { useState } from "react";
import api from "../services/api";
import { useNavigate } from "react-router-dom";

function AddMobile() {

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

  function handleChange(e) {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  }

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      await api.post("/mobiles", {
        ...formData,
        price: Number(formData.price),
        rating: Number(formData.rating)
      });

      alert("Mobile Added Successfully!");
      navigate("/mobiles");

    } catch (error) {
      console.log(error);
      alert("Failed to add mobile");
    }
  }

  return (
    <div className="form-container">

      <h2>Add New Mobile</h2>

      <form onSubmit={handleSubmit}>

        <input type="text" name="name"
          placeholder="Mobile Name"
          onChange={handleChange} required />

        <input type="text" name="brand"
          placeholder="Brand"
          onChange={handleChange} required />

        <input type="number" name="price"
          placeholder="Price"
          onChange={handleChange} required />

        <input type="number" name="rating"
          placeholder="Rating"
          step="0.1" min="0" max="5"
          onChange={handleChange} required />

        <input type="text" name="image"
          placeholder="Image URL"
          onChange={handleChange} required />

        <textarea name="description"
          placeholder="Description"
          onChange={handleChange} required />

        <input type="text" name="processor"
          placeholder="Processor"
          onChange={handleChange} />

        <input type="text" name="ram"
          placeholder="RAM (e.g. 8GB)"
          onChange={handleChange} />

        <input type="text" name="storage"
          placeholder="Storage (e.g. 128GB)"
          onChange={handleChange} />

        <input type="text" name="display"
          placeholder="Display"
          onChange={handleChange} />

        <input type="text" name="battery"
          placeholder="Battery"
          onChange={handleChange} />

        <input type="text" name="camera"
          placeholder="Camera"
          onChange={handleChange} />

        <input type="text" name="os"
          placeholder="Operating System"
          onChange={handleChange} />

        <button type="submit" className="submit-btn">
          Add Mobile
        </button>

      </form>
    </div>
  );
}

export default AddMobile;