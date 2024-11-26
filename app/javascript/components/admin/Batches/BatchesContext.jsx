import React, { createContext, useContext } from 'react';
import { useBatches } from '../../../hooks/useBatches';

const BatchesContext = createContext();

export const BatchesProvider = ({ children }) => {

  const {
    batches, setBatches, createBatch,
    updateBatch, deleteBatch, errors, setErrors
  } = useBatches();

  return (
    <BatchesContext.Provider
      value={{
        batches,
        setBatches,
        createBatch,
        updateBatch,
        deleteBatch,
        errors,
        setErrors,
      }}
    >
      {children}
    </BatchesContext.Provider>
  );
};

export const useBatchesContext = () => useContext(BatchesContext);