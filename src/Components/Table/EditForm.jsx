import React, { useState } from 'react';

const EditForm = ({ record, onSubmit, onCancel }) => {
  const [editedRecord, setEditedRecord] = useState(record);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditedRecord({
      ...editedRecord,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(editedRecord);
  };

  return (
    <div>
      <h2>Edit Record</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name:</label>
          <input
            type="text"
            name="name"
            value={editedRecord.name}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Email:</label>
          <input
            type="email"
            name="email"
            value={editedRecord.email}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Phone Number:</label>
          <input
            type="tel"
            name="phoneNumber"
            value={editedRecord.phoneNumber}
            onChange={handleChange}
          />
        </div>
        <div>
          <button type="submit">Save</button>
          <button type="button" onClick={onCancel}>Cancel</button>
        </div>
      </form>
    </div>
  );
};

export default EditForm;
