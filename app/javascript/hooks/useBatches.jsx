import { useState, useEffect } from 'react'
import { getAdminApi } from '../api'

export const useBatches = () => {
  const [batches, setBatches] = useState([]);
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
    try {
      const resp = await adminApiUrl.post('/batches', {batch: batch});
      const batchData = resp.data.data;
      setBatches((prev) => [ ...prev, batchData ]);
    } catch (error) {
      console.log(error)
    }
  };

  const updateBatch = async (id, updatedBatch) => {
    try{
      await adminApiUrl.put(`/batches/${id}`, { batch: updatedBatch } );
      setBatches((prev) =>
        prev.map((c) =>
        (c.id === id ? { ...c, attributes: { ...updatedBatch } } : c )
      ));
    } catch (error) {
      console.log(error)
    }
  }

  const deleteBatch = async (id) => {
    try {
      const response = await adminApiUrl.delete(`/batches/${id}`);
      setBatches((prev) => prev.filter((b) => b.id !== id));
    } catch (error) {
      console.log(error)
    }
  };

  useEffect(() => {
    fetchBatches();
  }, []);

  return {
    batches, setBatches, createBatch,
    updateBatch, deleteBatch
  }
}