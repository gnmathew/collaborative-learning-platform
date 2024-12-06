import { useState, useEffect } from 'react'
import { getAdminApi } from '../api'
import toast from 'react-hot-toast'

export const useMaterials = () => {
  const [materials, setMaterials] = useState([]);
  const token = localStorage.getItem('token');
  const adminApiUrl = getAdminApi(token);
  const [errors, setErrors] = useState({});

  const errorFields = ['title', 'description', 'url'];

  const fetchMaterials = async () => {
    const resp = await adminApiUrl.get('/materials');

    setMaterials(resp.data.data);
  };

  const createMaterial = async (material) => {
    try {
      const resp = await adminApiUrl.post('/materials', { material });

      if (resp.data.status ===200 ) {
        const materialData = resp.data.material;

        setMaterials((prev) => [...prev, materialData]);
        toast.success('A material resource created successfully');
        setErrors({});

        return true;

      } else {
        const formErrors = {};

        errorFields.forEach((field) => {
          if (resp.data.error[field]?.[0]) {
            formErrors[field] = resp.data.error[field][0];
          }
        });
        setErrors(formErrors);
        toast.error('Error: Form could not be submitted');

        return false;
      }
    } catch (error) {
      toast.error(error.message || 'An unexpected error occurred.');

      return false;
    }
  };

  const updateMaterial = async (id, updatedMaterial, batchName) => {
    try {
      const resp = await adminApiUrl.put(`/materials/${id}`, {material: updatedMaterial });

      if (resp.data.status === 200 ) {

        setMaterials((prev) =>
          prev.map((m) =>
            (m.id === id ? { ...c, attributes: { ...updatedMaterial, batch_name: batchName } } : m )
          )
        );
        toast.success('A resource material updated successfully');
        setErrors({});

        return true;

      } else {
        const formErrors = {};

        errorFields.forEach((field) => {
          if (resp.data.error[field]?.[0]) {
            formErrors[field] = resp.data.error[field][0];
          }
        });
        setErrors(formErrors);
        toast.error('Error: Failed to update form');

        return false;
      }

    } catch (error) {
      toast.error(error.message || 'An unexpected error occurred.');

      return false;
    }
  };

  const deleteMaterial = async (id) => {
    try {
      const resp = await adminApiUrl.delete(`/materials/${id}`);

      if (resp.data.status === 200) {

        setMaterials((prev) => prev.filter((m) => m.id !== id));
        toast.success(resp.data.message)
      } else {
        toast.error(resp.data.error[0])
      }
    } catch (error) {
      toast.error(error.message || 'An unexpected error occurred.')
    }
  };

  useEffect(() => {
    fetchMaterials();
  }, []);

  return {
    materials, setMaterials, createMaterial,
    updateMaterial, deleteMaterial, errors, setErrors
  };
};