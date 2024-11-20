import { useState, useEffect } from 'react'
import { getAdminApi } from '../api'
import toast from "react-hot-toast";

export const useBatches = () => {
  const [batches, setBatches] = useState([]);
  const errorFields = ['name'];
  const [errors, setErrors] = useState({});
  const token = localStorage.getItem('token');
  const adminApiUrl = getAdminApi(token);

  const fetchBatches = async () => {
    try {
      const resp = await adminApiUrl.get('/batches');
      setBatches(resp.data.data);
    } catch (error) {
      console.error("Error fetching batches:", error);
    }
  };

  const createBatch = async (batch) => {
    console.log('this is the batch',  batch)
    try {
      const resp = await adminApiUrl.post('/batches', {batch: batch });
      const batchData = resp.data.batch;
      console.log('the response:', resp);

      if (resp.data.status === 200) {
        setBatches((prev) => [ ...prev, batchData ]);
        toast.success('Batch created successfully!');
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

  const updateBatch = async (id, updatedBatch) => {
    try{
      const resp = await adminApiUrl.put(`/batches/${id}`, { batch: updatedBatch } );

      if (resp.data.status === 200) {
        setBatches((prev) =>
          prev.map((c) =>
          (c.id === id ? { ...c, attributes: { ...updatedBatch } } : c )
        ));
        toast.success('Batch updated successfully');
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
      console.log('this is the error!', error);
      toast.error(error.message || 'An unexpected error occurred.');

      return false;
    }
  }

  const deleteBatch = async (id) => {
    try {
      const resp = await adminApiUrl.delete(`/batches/${id}`);

      if (resp.data.status === 200) {
        setBatches((prev) => prev.filter((b) => b.id !== id));
        toast.success(resp.data.message);
      } else {
        toast.error(resp.data.error[0]);
      }
    } catch (error) {
      toast.error(error.message || 'An unexpected error occurred.');
    }
  };

  useEffect(() => {
    fetchBatches();
  }, []);

  return {
    batches, setBatches, createBatch,
    updateBatch, deleteBatch, errors, setErrors
  };
};