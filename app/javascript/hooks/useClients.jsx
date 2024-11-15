import { useState, useEffect } from 'react'
import { getAdminApi } from '../api'

export const useClients = () => {
  const [students, setStudents] = useState([]);
  const [teachers, setTeachers] = useState([]);
  const token = localStorage.getItem('token');
  const adminApiUrl = getAdminApi(token);

  const fetchClients = async () => {
    const resp = await adminApiUrl.get('/clients');
    setTeachers(resp.data.teachers.data);
    setStudents(resp.data.students.data);
  };

  const createClient = async (client) => {
    const resp = await adminApiUrl.post('/clients', { client: client });
    const clientData = resp.data.data;
    const setState = client.role === 'student' ? setStudents : setTeachers;
    setState((prev) => [...prev, clientData]);
  };

  const updateClient = async (id, updatedClient) => {
    await adminApiUrl.put(`/clients/${id}`, { client: updatedClient} );
    const setState = updatedClient.role === 'student' ? setStudents : setTeachers;
    setState((prev) =>
      prev.map((c) =>
        (c.id === id ? { ...c, attributes: { ...updatedClient } } : c )
      )
    );
  };

  const deleteClient = async (id, client) => {
    await adminApiUrl.delete(`/clients/${id}`);
    const setState = client.role === 'student' ? setStudents : setTeachers;
    setState((prev) => prev.filter((c) => c.id !== id));
  };

  useEffect(() => {
    fetchClients();
  }, []);

  return {
    students, setStudents, createClient, teachers,
    setTeachers, updateClient, deleteClient
  };
};
