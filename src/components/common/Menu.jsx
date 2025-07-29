import { Link, useLocation } from "react-router";
// import "../../css/header.css";
import Logo from "./Logo.jsx";
import { useEffect, useState } from "react";
import Products from "../../mockData/products.json";
import SearchResultCard from "./SearchResultCard.jsx";

function Menu() {
  const [cartItem, setCartItem] = useState("");
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [search, setSearch] = useState("");
  // const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const location = useLocation();
  useEffect(() => {
    const updateCartCount = () => {
      const cart = JSON.parse(localStorage.getItem("cart")) || [];
      setCartItem(cart.length);
    };
    updateCartCount();
    window.addEventListener("cartUpdated", updateCartCount);
    return () => {
      window.removeEventListener("cartUpdated", updateCartCount);
    };
  }, []);

  const handleSearch = () => {
    console.log("Search clicked");
    setIsSearchOpen((prev) => !prev);
  };

  const handleSearchInput = (e) => {
    setSearch(e.target.value.toLowerCase());
    // setSearchQuery(e.target.value);
    const results = Products?.products?.filter((product) =>
      product.title.toLowerCase().includes(e.target.value.toLowerCase())
    );
    setSearchResults(results);
  };

  const handleCloseSearch = () => {
    setIsSearchOpen(false);
    setSearch("");
    setSearchResults([]);
  };
  useEffect(() => {
    setIsSearchOpen(false);
    setSearch("");
    setSearchResults([]);
  }, [location]);

  console.log("searchResults", searchResults);

  return (
    <header>
      <div className="container position-relative">
        <div className="row">
          <div className="col-12 position-relative">
            <nav className="navbar navbar-expand-lg sticky-top custom_nav">
              <div className="container-fluid">
                <Logo />
                <button
                  className="navbar-toggler"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#navbarContent"
                >
                  <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarContent">
                  <ul className="navbar-nav ms-auto header_menu mb-2 mb-lg-0">
                    <li className="nav-item">
                      <Link className="nav-link active" to="/">
                        Home
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link" to="">
                        Product
                      </Link>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="/product">
                        Shop
                      </a>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link" to="/about">
                        About
                      </Link>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="#">
                        Contact
                      </a>
                    </li>
                  </ul>
                </div>
                <ul className="navbar-nav align-items-center ms-3 header-icon">
                  <li className="nav-item d-flex">
                    <button
                      onClick={handleSearch}
                      className="icon-btn search-button"
                      type="submit"
                    >
                      <i className="fa-solid fa-magnifying-glass"></i>
                    </button>
                    <Link to="/cart" className="nav-link">
                      <button className="icon-btn position-relative">
                        <i className="fa-solid fa-cart-shopping"></i>
                        <span
                          className="badge bg-primary rounded-pill cart-badge"
                          id="cartCount"
                        >
                          {cartItem}
                        </span>
                      </button>
                    </Link>
                  </li>
                </ul>
              </div>
            </nav>
          </div>
        </div>
        {isSearchOpen && (
          <div className="searchMain">
            <div className="searchWrap">
              <div className="container">
                <div className="row">
                  <div className="inputWrap">
                    <div className="mb-3 position-relative">
                      <input
                        type="text"
                        onChange={handleSearchInput}
                        value={search}
                        placeholder="Search"
                        class="form-control"
                        id="searchField"
                      />
                      <div className="crossSearch" onClick={handleCloseSearch}>
                        <i class="fa-regular fa-circle-xmark"></i>
                      </div>
                    </div>
                  </div>
                  <div className="col-12">
                    <ul
                      className="searchResult"
                      style={{ overflow: "auto", maxHeight: "400px" }}
                    >
                      {searchResults.length > 0 ? (
                        searchResults?.map((product) => (
                          <SearchResultCard
                            key={product.id}
                            data={product}
                            onClick={handleCloseSearch}
                          />
                        ))
                      ) : (
                        <li className="text-center">No results found</li>
                      )}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
export default Menu;
