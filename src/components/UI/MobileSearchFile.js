
const MobileSearchFile = ({
  brand,
  setBrand,
  seria,
  setSeria,
  year,
  setYear,
  model,
  setModel,
  price,
  setPrice,
  findBrand,
  findModel,
  findYear,
  priceOptions,
  handleSubmit,
  showFilters,
  toggleFilters,
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

      <div className="input-group desktop-only">
        <label>Seria</label>
        <select value={seria} onChange={(e) => setSeria(e.target.value)}>
          {findModel.map((option, index) => (
            <option key={index} value={option}>
              {option}
            </option>
          ))}
        </select>
      </div>
      <div className="divider"></div>

      <div className="input-group desktop-only">
        <label>Year</label>
        <select value={year} onChange={(e) => setYear(e.target.value)}>
          {findYear.map((option, index) => (
            <option key={index} value={option}>
              {option}
            </option>
          ))}
        </select>
      </div>

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
      <IoIosArrowDown className="arrow-icon" onClick={toggleFilters} />

      <SearchFilter
        isVisible={showFilters}
        top="100%"
        left="5%"
        usePosition={true}
      />
    </form>
  );
};

export default MobileSearchFile;
