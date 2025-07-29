import React, { useEffect, useState } from "react";
import "../css/product-listing.css";
import Products from "../mockData/products.json";
import ProductCard from "../components/common/ProductCard";
import { handleAddToCart } from "../utils/addToCart";
import { ToastContainer } from "react-toastify";
import { useNavigate } from "react-router";

const Shop = () => {
  const searchParams = new URLSearchParams(location.search);
  const categorySlug = searchParams.get("category");
  // Filter state
  const [selectedCategories, setSelectedCategories] = useState(
    categorySlug ? [categorySlug] : []
  );
  const [selectedTypes, setSelectedTypes] = useState([]);
  const [selectedAvailability, setSelectedAvailability] = useState([]);

  // Pagination state
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 8;
  const navigate = useNavigate();

  console.log("categoryId", categorySlug);

  // // Filter handlers
  const handleCategoryChange = (slug) => {
    setSelectedCategories((prev) =>
      prev.includes(slug) ? prev.filter((c) => c !== slug) : [...prev, slug]
    );
    setCurrentPage(1);
  };

  const categoryMap = new Map();

  Products.products.forEach((product) => {
    const category = product.category;
    if (category && !categoryMap.has(category.slug)) {
      categoryMap.set(category.slug, category.name);
    }
  });

  const uniqueCategories = Array.from(categoryMap.entries()).map(
    ([slug, name]) => ({
      slug,
      name,
    })
  );

  const handleTypeChange = (type) => {
    setSelectedTypes((prev) =>
      prev.includes(type) ? prev.filter((t) => t !== type) : [...prev, type]
    );
    setCurrentPage(1);
  };
  const uniqueTypeValues = Array.from(
    new Set(Products.products.map((product) => product.type))
  );

  //sTOCK FILTER
  const handleAvailabilityChange = (avail) => {
    setSelectedAvailability((prev) =>
      prev.includes(avail) ? prev.filter((a) => a !== avail) : [...prev, avail]
    );
    setCurrentPage(1);
  };

  const uniqueStockValues = Array.from(
    new Set(Products.products.map((product) => product.stock))
  );

  // Filter products
  const filteredProducts = Products.products.filter((product) => {
    const productSlug = product.category?.slug;
    const matchCategory =
      (selectedCategories.length === 0 &&
        (!categorySlug || categorySlug === productSlug)) ||
      selectedCategories.includes(productSlug);

    const matchType =
      selectedTypes.length === 0 || selectedTypes.includes(product.type);

    const matchAvailability =
      selectedAvailability.length === 0 ||
      selectedAvailability.includes(product.stock);

    return matchCategory && matchType && matchAvailability;
  });

  // Pagination logic
  const totalPages = Math.ceil(filteredProducts.length / productsPerPage);
  const paginatedProducts = filteredProducts.slice(
    (currentPage - 1) * productsPerPage,
    currentPage * productsPerPage
  );

  const handlePageChange = (page) => setCurrentPage(page);
  useEffect(() => {
    if (selectedCategories.length === 0) {
      // Remove ?category=... from URL
      navigate("/product", { replace: true });
    }
  }, [selectedCategories, navigate]);

  return (
    <section className="product-listing">
      <div className="">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h3 className="mx-auto text-center">All collection </h3>
            </div>
          </div>
        </div>
        <div className="container">
          <ToastContainer position="bottom-right" />
          <div className="row g-4">
            {/* FILTERS */}
            <div className="col-md-2">
              <div className="filter-wrapper bg-white">
                <span>Filter By :-</span>
                {/* Availability */}
                <div className="filter-wrap">
                  <div className="avai-wrap p-2">
                    <div className="heading d-flex justify-content-between align-items-center">
                      <h6 className="text-uppercase">Availability</h6>
                    </div>
                    {uniqueStockValues.map((availability) => (
                      <div
                        className="d-flex justify-content-between mt-2"
                        key={availability}
                      >
                        <div className="form-check">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            checked={selectedAvailability.includes(
                              availability
                            )}
                            onChange={() =>
                              handleAvailabilityChange(availability)
                            }
                            id={`availability-${availability}`}
                          />
                          <label
                            className="form-check-label"
                            htmlFor={`availability-${availability}`}
                          >
                            {availability}
                          </label>
                        </div>
                        {/* <span>(count)</span> */}
                      </div>
                    ))}
                  </div>
                  {/* Category */}
                  <div className="category-wrap p-2">
                    <div className="heading d-flex justify-content-between align-items-center">
                      <h6 className="text-uppercase">category</h6>
                    </div>
                    {uniqueCategories.map(({ slug, name }) => (
                      <div
                        className="d-flex justify-content-between mt-2"
                        key={slug}
                      >
                        <div className="form-check">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            checked={selectedCategories.includes(slug)}
                            onChange={() => handleCategoryChange(slug)}
                            id={`category-${slug}`}
                          />
                          <label
                            className="form-check-label"
                            htmlFor={`category-${slug}`}
                          >
                            {name}
                          </label>
                        </div>
                      </div>
                    ))}
                  </div>
                  {/* Type */}
                  <div className="type-wrap p-2 mb-2">
                    <div className="heading d-flex justify-content-between align-items-center">
                      <h6 className="text-uppercase">Type</h6>
                    </div>
                    {uniqueTypeValues.map((t) => (
                      <div
                        className="d-flex justify-content-between mt-2"
                        key={t}
                      >
                        <div className="form-check">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            checked={selectedTypes.includes(t)}
                            onChange={() => handleTypeChange(t)}
                            id={`type-${t}`}
                          />
                          <label
                            className="form-check-label"
                            htmlFor={`type-${t}`}
                          >
                            {t}
                          </label>
                        </div>
                        {/* <span>(count)</span> */}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            {/* PRODUCTS */}
            <div className="col-md-10">
              <div className="product-list-grid">
                {paginatedProducts.length === 0 ? (
                  <div className="text-center w-100 py-5">
                    <h4>No products found.</h4>
                  </div>
                ) : (
                  paginatedProducts.map((product) => (
                    <ProductCard
                      key={product.id}
                      onClick={() => handleAddToCart(product, 1)}
                      product={product}
                    />
                  ))
                )}
              </div>
              {/* PAGINATION */}
              {totalPages > 1 && (
                <nav className="mt-4">
                  <ul className="pagination justify-content-center">
                    {Array.from({ length: totalPages }, (_, i) => (
                      <li
                        key={i + 1}
                        className={`page-item${
                          currentPage === i + 1 ? " active" : ""
                        }`}
                      >
                        <button
                          className="page-link"
                          onClick={() => handlePageChange(i + 1)}
                        >
                          {i + 1}
                        </button>
                      </li>
                    ))}
                  </ul>
                </nav>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Shop;
