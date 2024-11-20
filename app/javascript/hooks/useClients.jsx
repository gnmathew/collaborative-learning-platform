import { useState, useEffect } from 'react'
import { getAdminApi } from '../api'
import toast from 'react-hot-toast'

export const useClients = () => {
  const [students, setStudents] = useState([]);
  const [teachers, setTeachers] = useState([]);
  const errorFields = [
    'email', 'username', 'password',
    'batch_id', 'role', 'full_name'
  ];
  const [errors, setErrors] = useState({});
  const token = localStorage.getItem('token');
  const adminApiUrl = getAdminApi(token);

  const fetchClients = async () => {
    const resp = await adminApiUrl.get('/clients');

    setTeachers(resp.data.teachers.data);
    setStudents(resp.data.students.data);
  };

  const createClient = async (client) => {
    try {
      const resp = await adminApiUrl.post('/clients', { client });

      if (resp.data.status === 200) {
        const clientData = resp.data.client;
        const setState = client.role === 'student' ? setStudents : setTeachers;

        setState((prev) => [...prev, clientData]);
        toast.success('User created successfully');
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

  const updateClient = async (id, updatedClient, batchName) => {
    try {
      const resp = await adminApiUrl.put(`/clients/${id}`, { client: updatedClient} );

      if (resp.data.status === 200) {
        const setState = updatedClient.role === 'student' ? setStudents : setTeachers;

        setState((prev) =>
          prev.map((c) =>
            (c.id === id ? { ...c, attributes: { ...updatedClient, batch_name: batchName } } : c )
          )
        );
        toast.success('User updated successfully');
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

  const deleteClient = async (id, client) => {
    try {
      const resp = await adminApiUrl.delete(`/clients/${id}`);

      if (resp.data.status === 200) {
        const setState = client.role === 'student' ? setStudents : setTeachers;

        setState((prev) => prev.filter((c) => c.id !== id));
        toast.success(resp.data.message)
      } else {
        toast.error(resp.data.error[0])
      }
    } catch (error) {
      toast.error(error.message || 'An unexpected error occurred.')
    }
  };

  useEffect(() => {
    fetchClients();
  }, []);

  return {
    students, setStudents, createClient, teachers,
    setTeachers, updateClient, deleteClient, errors,
    setErrors
  };
};
