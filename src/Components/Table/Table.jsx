import { useState, useEffect } from "react";
import "./table.css";

const Table = ({ formDataArray, handleEdit, handleDelete }) => {
  const [sortOrder, setSortOrder] = useState("asc");
  const [sortedData, setSortedData] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const sortedArray = [...formDataArray].sort((a, b) => {
      const nameA = (a.name || "").toUpperCase();
      const nameB = (b.name || "").toUpperCase();
      return sortOrder === "asc"
        ? nameA.localeCompare(nameB)
        : nameB.localeCompare(nameA);
    });

    setSortedData(sortedArray);
  }, [formDataArray, sortOrder]);

  const toggleSortOrder = () => {
    setSortOrder((prev) => (prev === "asc" ? "desc" : "asc"));
  };
  const getSortIcon = () => {
    return sortOrder === "asc" ? "▲" : "▼";
  };

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  const filteredData = sortedData.filter((data) =>
    data.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="table-container">
      <div className="table-header">
        <h1 className="table-title">Users Data</h1>
        <div className="search-bar">
          <input
            type="text"
            placeholder="Search by name..."
            value={searchTerm}
            onChange={handleSearch}
          />
        </div>
      </div>
      <table className="table">
        <thead>
          <tr>
            <th className="sortable" onClick={toggleSortOrder}>
              Name {getSortIcon()}
            </th>
            <th>Email</th>
            <th>Phone Number</th>
            <th>Date of Birth</th>
            <th colSpan={4}>Address</th>
            <th>Picture</th>
            <th>Action</th>
          </tr>
          <tr>
            <th></th>
            <th></th>
            <th></th>
            <th></th>
            <th>City</th>
            <th>District</th>
            <th>Province</th>
            <th>Country</th>
            <th></th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {filteredData.map((data, index) => (
            <tr key={index}>
              <td>{data.name}</td>
              <td>{data.email}</td>
              <td>{data.phoneNum}</td>
              <td>{data.dateOfBirth}</td>
              <td>{data.city}</td>
              <td>{data.district}</td>
              <td>{data.province}</td>
              <td>{data.country}</td>
              <td>{data.profilePicture}</td>
              <td>
                <div className="action-buttons">
                  <button
                    type="button"
                    onClick={() => handleEdit(data.key)}
                    className="edit-button"
                  >
                    Edit
                  </button>
                  <button
                    type="button"
                    onClick={() => handleDelete(data.key)}
                    className="delete-button"
                  >
                    Delete
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
