import { useEffect, useState } from "react";
import api from "../services/api";
import MobileCard from "../components/MobileCard";
import "./Mobiles.css";

function Mobiles() {
  const [mobiles, setMobiles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");
  const [budget, setBudget] = useState("All");
  const [sort, setSort] = useState("");

  // FETCH MOBILES
  useEffect(() => {
    getMobiles();
  }, []);

  async function getMobiles() {
    try {
      setLoading(true);
      setError("");

      const response = await api.get("/mobiles");

      // Check API response
      const data = response.data;

      if (Array.isArray(data)) {
        setMobiles(data);
      } else if (Array.isArray(data.mobiles)) {
        setMobiles(data.mobiles);
      } else {
        throw new Error("Invalid mobile data received from server");
      }

    } catch (error) {
      console.error("Error fetching mobiles:", error);

      setError(
        "Unable to load smartphones. Please try again."
      );

    } finally {
      setLoading(false);
    }
  }

  // DELETE MOBILE
  async function deleteMobile(id) {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this smartphone?"
    );

    if (!confirmDelete) return;

    try {
      await api.delete("/mobiles/" + id);

      setMobiles((previousMobiles) =>
        previousMobiles.filter(
          (mobile) => mobile.id !== id
        )
      );

      alert("Smartphone deleted successfully!");

    } catch (error) {
      console.error("Error deleting mobile:", error);

      alert(
        "Unable to delete smartphone. Please try again."
      );
    }
  }

  // SEARCH AND FILTER
  const filteredMobiles = mobiles.filter((mobile) => {
    const matchesSearch = (mobile.name || "")
      .toLowerCase()
      .includes(search.toLowerCase());

    const matchesCategory =
      category === "All" ||
      (mobile.brand || "").toLowerCase() ===
        category.toLowerCase();

    const price = Number(mobile.price);

    const matchesBudget =
      budget === "All" ||
      (budget === "Low" && price < 15000) ||
      (budget === "Medium" &&
        price >= 15000 &&
        price <= 30000) ||
      (budget === "High" && price > 30000);

    return (
      matchesSearch &&
      matchesCategory &&
      matchesBudget
    );
  });

  // PRICE SORTING
  const sortedMobiles = [...filteredMobiles].sort(
    (a, b) => {
      if (sort === "high") {
        return Number(b.price) - Number(a.price);
      }

      if (sort === "low") {
        return Number(a.price) - Number(b.price);
      }

      return 0;
    }
  );

  return (
    <div className="mobiles-page">

      {/* PAGE HEADER */}
      <section className="mobiles-header">

        <p className="mobiles-eyebrow">
          EXPLORE OUR COLLECTION
        </p>

        <h1>Latest Smartphones</h1>

        <p>
          Discover premium smartphones with beautiful
          designs, powerful performance and innovative
          technology.
        </p>

      </section>

      {/* MOBILE COLLECTION */}
      <section className="mobiles-collection">

        <div className="mobiles-heading">

          <div>
            <h2>Our Smartphones</h2>

            <p>
              Find the perfect smartphone for your lifestyle.
            </p>
          </div>

          {!loading && !error && (
            <span className="mobile-count">
              {sortedMobiles.length} Products
            </span>
          )}

        </div>

        {/* SEARCH AND FILTERS */}
        <div className="filters">

          {/* SEARCH */}
          <input
            type="text"
            placeholder="Search Mobile"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />

          {/* BRAND FILTER */}
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            <option value="All">All Brands</option>
            <option value="Samsung">Samsung</option>
            <option value="Apple">Apple</option>
            <option value="Vivo">Vivo</option>
            <option value="Oppo">Oppo</option>
            <option value="Realme">Realme</option>
          </select>

          {/* BUDGET FILTER */}
          <select
            value={budget}
            onChange={(e) => setBudget(e.target.value)}
          >
            <option value="All">All Budgets</option>
            <option value="Low">Low</option>
            <option value="Medium">Medium</option>
            <option value="High">High</option>
          </select>

          {/* PRICE SORTING */}
          <select
            value={sort}
            onChange={(e) => setSort(e.target.value)}
          >
            <option value="">Sort Price</option>
            <option value="high">High To Low</option>
            <option value="low">Low To High</option>
          </select>

        </div>

        {/* LOADING */}
        {loading && (
          <p className="mobiles-message">
            Loading smartphones...
          </p>
        )}

        {/* ERROR */}
        {!loading && error && (
          <div className="mobiles-message error-message">
            <p>{error}</p>

            <button onClick={getMobiles}>
              Try Again
            </button>
          </div>
        )}

        {/* EMPTY MOBILE LIST */}
        {!loading &&
          !error &&
          mobiles.length === 0 && (
            <p className="mobiles-message">
              No smartphones available at the moment.
            </p>
          )}

        {/* NO FILTER RESULTS */}
        {!loading &&
          !error &&
          mobiles.length > 0 &&
          sortedMobiles.length === 0 && (
            <p className="mobiles-message">
              No matching smartphones found.
            </p>
          )}

        {/* MOBILE CARDS */}
        {!loading &&
          !error &&
          sortedMobiles.length > 0 && (
            <div className="mobiles">

              {sortedMobiles.map((mobile) => (
                <MobileCard
                  key={mobile.id}
                  mobile={mobile}
                  onDelete={deleteMobile}
                />
              ))}

            </div>
          )}

      </section>
    </div>
  );
}

export default Mobiles;