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

  useEffect(() => {
    fetchBatches();
  }, []);

  return { batches, setBatches };
}