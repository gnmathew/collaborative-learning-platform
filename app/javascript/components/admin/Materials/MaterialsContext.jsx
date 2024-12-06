import React, { createContext, useContext } from 'react';
import { useMaterials } from '../../../hooks/useMaterials';

const MaterialsContext = createContext();

export const MaterialsProvider = ({ children }) => {

  const {
    materials, setMaterials, createMaterial,
    updateMaterial, deleteMaterial, errors, setErrors
  } = useMaterials();

  return (
    <MaterialsContext.Provider
      value={{
        materials,
        setMaterials,
        createMaterial,
        updateMaterial,
        deleteMaterial,
        errors,
        setErrors
      }}
    >
      {children}
    </MaterialsContext.Provider>
  );
};

export const useMaterialsContext = () => useContext(MaterialsContext);