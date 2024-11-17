import React, { useContext, useEffect, useState } from 'react';
import { MdDelete } from "react-icons/md";
import { FaUserEdit } from "react-icons/fa";
import Context from '../context';
import SummeryApi from '../common';
import { toast } from 'react-toastify'

const ShowData = () => {
  const { show, data } = useContext(Context);
  const [editMode, setEditMode] = useState(false);
  const [editData, setEditData] = useState({ name: '', email: '', password: '', contact: '', role: '' });
  const [editId, setEditId] = useState(null);

  useEffect(() => {
    show();
  }, []);




  const deleteData = async (id) => {
    const response = await fetch(`${SummeryApi.delete.url}/${id}`, {
      method: SummeryApi.delete.method
    });
    const json = await response.json();
    if (json.success) {
      toast.success(json.message)
    }
    show();
  };



  const openEditForm = (item) => {
    setEditData(item);
    setEditId(item._id);
    setEditMode(true);
  };



  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditData({ ...editData, [name]: value });
  };





  const updateData = async (e) => {
    e.preventDefault()
    const response = await fetch(`${SummeryApi.update.url}`, {
      method: SummeryApi.update.method,
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify({ id: editId, ...editData })
    });
    const json = await response.json();
    if (json.success) {
      toast.success(json.message)
    }
    setEditMode(false);
    show();
  };

  return (
    <>

      {/* this is edite form */}
      {editMode && (
        <div className="fixed inset-0 bg-gray-500 bg-opacity-75 flex justify-center items-center">
          <div className="bg-white p-8 rounded">
            <h2 className="text-2xl font-bold mb-4">Edit Data</h2>
            <form onSubmit={updateData}>
              <div className="mb-4">
                <label className="block text-gray-700">Name</label>
                <input
                  type="text"
                  name="name"
                  value={editData.name}
                  onChange={handleInputChange}
                  className="w-full p-2 border border-gray-300 rounded"
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700">Email</label>
                <input
                  type="email"
                  name="email"
                  value={editData.email}
                  onChange={handleInputChange}
                  className="w-full p-2 border border-gray-300 rounded"
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700">Password</label>
                <input
                  type="password"
                  name="password"
                  value={editData.password}
                  onChange={handleInputChange}
                  className="w-full p-2 border border-gray-300 rounded"
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700">Contact</label>
                <input
                  type="text"
                  name="contact"
                  value={editData.contact}
                  onChange={handleInputChange}
                  className="w-full p-2 border border-gray-300 rounded"
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700">Role</label>
                <input
                  type="text"
                  name="role"
                  value={editData.role}
                  onChange={handleInputChange}
                  className="w-full p-2 border border-gray-300 rounded"
                />
              </div>
              <div className="flex justify-end">
                <button type="button" onClick={() => setEditMode(false)} className="mr-4 px-4 py-2 bg-gray-500 text-white rounded">Cancel</button>
                <button type="submit" className="px-4 py-2 bg-blue-500 text-white rounded">Save</button>
              </div>
            </form>
          </div>
        </div>
      )}




      <div className="flex justify-center mt-20">
        <div className="overflow-x-auto w-full max-w-5xl">
          <table className="min-w-full bg-white border border-gray-200">
            <thead>
              <tr>
                <th className="py-2 px-4 border-b">Name</th>
                <th className="py-2 px-4 border-b">Email</th>
                <th className="py-2 px-4 border-b">Password</th>
                <th className="py-2 px-4 border-b">Contact</th>
                <th className="py-2 px-4 border-b">Role</th>
                <th className="py-2 px-4 border-b">Delete</th>
                <th className="py-2 px-4 border-b">Edit</th>
              </tr>
            </thead>
            <tbody>
              {data.map((item, index) => (
                <tr key={index} className="hover:bg-gray-100">
                  <td className="py-2 px-4 border-b">{item.name}</td>
                  <td className="py-2 px-4 border-b">{item.email}</td>
                  <td className="py-2 px-4 border-b">{item.password}</td>
                  <td className="py-2 px-4 border-b">{item.contact}</td>
                  <td className="py-2 px-4 border-b">{item.role}</td>
                  <td className="py-2 px-4 border-b hover:bg-red-500 flex text-center justify-center text-2xl" onClick={() => deleteData(item._id)}><MdDelete /></td>
                  <td className="py-2 px-4 border-b hover:bg-blue-500  text-center justify-center text-2xl" onClick={() => openEditForm(item)}><FaUserEdit /></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default ShowData;
