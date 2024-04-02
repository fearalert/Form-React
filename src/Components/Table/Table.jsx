import { useState, useEffect } from "react";
import "./table.css";

const Table = ({ formDataArray, handleEdit, handleDelete }) => {
  const [sortOrder, setSortOrder] = useState("asc");
  const [sortedData, setSortedData] = useState([]);

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

  return (
    <div className="table-container">
      <h1 className="table-title">Users Data</h1>
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
          </tr>
        </thead>
        <tbody>
          {sortedData.map((data, index) => (
            <tr key={index}>
              <td>{data.name}</td>
              <td>{data.email}</td>
              <td>{data.phoneNum}</td>
              <td>{data.dateOfBirth}</td>
              <td>{data.city}</td>
              <td>{data.district}</td>
              <td>{data.province}</td>
              <td>{data.country}</td>
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
