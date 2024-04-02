import "./popup.css";

const Popup = ({ form, handleEditChange, handleUpdate, handleCancel }) => {
  return (
    <div className="popup-container">
      <div className="popup-overlay"></div>
      <div className="popup-panel">
        <div className="popup-content">
          <h2 className="popup-title">Edit User</h2>
          <form onSubmit={handleUpdate}>
            <div className="popup-input">
              <label htmlFor="name">Name: </label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Enter your name"
                autoComplete="name"
                required
                value={form.name}
                onChange={handleEditChange}
              />
            </div>
            <div className="popup-input">
              <label htmlFor="email">Email: </label>
              <input
                type="text"
                id="email"
                name="email"
                placeholder="Enter your email"
                autoComplete="email"
                required
                value={form.email}
                onChange={handleEditChange}
              />
            </div>
            <div className="popup-input">
              <label htmlFor="phoneNum">Phone Number: </label>
              <input
                type="tel"
                id="phoneNum"
                name="phoneNum"
                placeholder="Enter your phone number"
                required
                value={form.phoneNum}
                onChange={handleEditChange}
              />
            </div>
            <div className="popup-input">
              <label htmlFor="dateOfBirth">Date of Birth: </label>
              <input
                type="date"
                id="dateOfBirth"
                name="dateOfBirth"
                required
                value={form.dateOfBirth}
                onChange={handleEditChange}
              />
            </div>
            <div className="popup-input">
              <label htmlFor="address">Address: </label>
              <input
                type="text"
                id="city"
                name="city"
                placeholder="Enter your city"
                required
                value={form.city}
                onChange={handleEditChange}
              />
              <input
                type="text"
                id="district"
                name="district"
                placeholder="Enter your district"
                required
                value={form.district}
                onChange={handleEditChange}
              />
              <select
                name="province"
                id="province"
                required
                value={form.province}
                onChange={handleEditChange}
              >
                <option> Select Province </option>
                <option value="Koshi">Koshi</option>
                <option value="Madhesh">Madhesh</option>
                <option value="Bagmati">Bagmati</option>
                <option value="Gandaki">Gandaki</option>
                <option value="Lumbini">Lumbini</option>
                <option value="Karnali">Karnali</option>
                <option value="Sudurpaschim">Sudurpaschim</option>
              </select>
              <input
                type="text"
                id="country"
                name="country"
                value="Nepal"
                autoComplete="country"
                readOnly
                onChange={handleEditChange}
              />
            </div>
            <div className="popup-input">
              <button type="submit" className="popup-update-button">
                Update
              </button>
              <button
                type="button"
                onClick={handleCancel}
                className="popup-cancel-button"
              >
                Cancel
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Popup;
