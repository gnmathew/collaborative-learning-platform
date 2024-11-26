import React, { createContext, useContext } from 'react';
import { useClients } from '../../../hooks/useClients';

const ClientsContext = createContext();

export const ClientsProvider = ({ children }) => {

  const {
    students, setStudents, teachers, setTeachers, createClient,
    updateClient, deleteClient, errors, setErrors
  } = useClients();

  return (
    <ClientsContext.Provider
      value={{
        students,
        setStudents,
        teachers,
        setTeachers,
        createClient,
        updateClient,
        deleteClient,
        errors,
        setErrors
      }}
    >
      {children}
    </ClientsContext.Provider>
  );
};

export const useClientsContext = () => useContext(ClientsContext)