import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import toast from "react-hot-toast";
import "./profile.css"; // Import the CSS file
import Table from "../Components/Table/Table";
import Popup from "../Components/Popup/Popup";

const Profile = () => {
  const [allFormData, setAllFormData] = useState([]);
  const [selectedKey, setSelectedKey] = useState(null);
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const [updatedFormData, setUpdatedFormData] = useState(null);

  const handleEdit = (key) => {
    setSelectedKey(key);

    setUpdatedFormData(allFormData.find((data) => data.key === key));

    setIsPopupOpen(true);
  };

  const handleEditChange = (e) => {
    setUpdatedFormData((prev) => {
      return { ...prev, [e.target.name]: e.target.value };
    });
  };
  const handleUpdate = (e) => {
    e.preventDefault();

    const indexToUpdate = allFormData.findIndex(
      (data) => data.key === selectedKey
    );

    if (indexToUpdate !== -1) {
      const updatedFormDataArray = [...allFormData];
      updatedFormDataArray[indexToUpdate] = updatedFormData;
      localStorage.setItem(selectedKey, JSON.stringify(updatedFormData));
      setAllFormData(updatedFormDataArray);
      setIsPopupOpen(false);
      toast.success("User Updated Successfully");
    }
  };

  const handleCancel = () => {
    setIsPopupOpen(false);
  };

  const handleDelete = (key) => {
    localStorage.removeItem(key);
    const updatedFormDataArray = allFormData.filter((data) => data.key !== key);
    setAllFormData(updatedFormDataArray);
    toast.success("User Deleted Successfully");
  };

  useEffect(() => {
    const keys = Object.keys(localStorage);
    const formDataArray = keys.map((key) => {
      return { ...JSON.parse(localStorage.getItem(key)), key };
    });
    const filteredFormDataArray = formDataArray.filter(
      (data) => data.name !== undefined
    );
    setAllFormData(filteredFormDataArray);
  }, []);

  return (
    <div className="container">
      <div className="flex">
        <Link
          to="/"
          className="text-lg"
        >
          Home
        </Link>
      </div>
      <Table
        formDataArray={allFormData}
        handleEdit={handleEdit}
        handleDelete={handleDelete}
      />

      {isPopupOpen && (
        <Popup
          form={updatedFormData || allFormData}
          handleEditChange={handleEditChange}
          handleCancel={handleCancel}
          handleUpdate={handleUpdate}
        />
      )}
    </div>
  );
};

export default Profile;
