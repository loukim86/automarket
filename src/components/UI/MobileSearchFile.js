
const MobileSearchFile = ({brand,
    setBrand,
    model,
    setModel,
    price,
    setPrice,
    findBrand,
    findModel,
    priceOptions,
    handleSubmit,
   }) => {
  return (
    <form className="search-panel" onSubmit={handleSubmit}>
      <div className="input-group">
        <label className="brand-label">Brand</label>
        <select value={brand} onChange={(e) => setBrand(e.target.value)}>
          {findBrand.map((option, index) => (
            <option key={index} value={option}>
              {option}
            </option>
          ))}
        </select>
      </div>
      <div className="divider"></div>
      <div className="input-group mobile-only">
        <select value={model} onChange={(e) => setModel(e.target.value)}>
          {findModel.map((option, index) => (
            <option key={index} value={option}>
              {option}
            </option>
          ))}
        </select>
      </div>
      <div className="input-group mobile-only">
        <select value={price} onChange={(e) => setPrice(e.target.value)}>
          {priceOptions.map((option, index) => (
            <option key={index} value={option}>
              {option}
            </option>
          ))}
        </select>
      </div>
      <button type="submit" className="btn-search">
        Search
      </button>
    </form>
  );
};

export default MobileSearchFile;
