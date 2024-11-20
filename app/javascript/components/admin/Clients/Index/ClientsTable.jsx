import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import StudentsTable from "./Students/StudentsTable"
import TeachersTable from './Teachers/TeachersTable'
import NewClientModal from '../New/NewClientModal'
import { BsPlusCircleFill } from "react-icons/bs"
import { useClients } from '../../../../hooks/useClients'
import { useBatches } from '../../../../hooks/useBatches'
import { closeModal } from '../../../../utils/modalUtils'

const MainContainer = styled.div`
  margin-top: 5%;
  display: flex;
  justify-content: center;
  text-align: center;
  gap: 40px;
`

const TabBtn = styled.button`
  color: white;

  &.active {
    color: inherit;
  }
`

const ClientsTable = () => {
  const [selectedTab, setSelectedTab] = useState('students');
  const [formData, setFormData] = useState({})
  const { batches, setBatches } = useBatches();
  const {
    students, setStudents,
    createClient, teachers,
    setTeachers, updateClient,
    deleteClient, errors, setErrors
  } = useClients();

  useEffect(() => {
    setFormData((prev) => ({
      ...prev,
      role: selectedTab === 'students' ? 'student' : 'teacher',
    }));
    setErrors({});
  }, [selectedTab]);

  const handleChange = (e, setState) => {
    e.preventDefault()

    setState((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const isSuccess = await createClient(formData);

    if (isSuccess) {
      setFormData({role: formData.role });
      closeModal();
    }
  };

  const handleDestroy = async (id) => {
    await deleteClient(id, formData);
  };

  const handleTabChange = (tab) => {
    setSelectedTab(tab);
  }

  return(
    <>
      <MainContainer>
        <div className="card text-center">
          <div className="card-header bg-dark text-light">
            <ul className="nav nav-tabs card-header-tabs">
              <li className="nav-item">
                <TabBtn
                  className={`nav-link ${selectedTab === 'students' ? 'active' : ''}`}
                  onClick={() => handleTabChange('students')}
                >
                  Students
                </TabBtn>
              </li>
              <li className="nav-item">
                <TabBtn
                  className={`nav-link ${selectedTab === 'teachers' ? 'active' : ''}`}
                  onClick={() => handleTabChange('teachers')}
                >
                  Teachers
                </TabBtn>
              </li>
              <li className="nav-item ms-auto">
                <button
                  type="button"
                  className="btn btn-success btn-sm"
                  onClick={() => setErrors({})}
                  data-bs-toggle="modal"
                  data-bs-target="#exampleModal"
                >
                  <BsPlusCircleFill style={{ marginRight: '5px', marginBottom: '5px' }} />
                  Add User
                </button>
              </li>
            </ul>
          </div>
          <div className="card-body">
            {selectedTab === 'students' && (
              <StudentsTable
              students={students}
              setStudents={setStudents}
              selectedTab={selectedTab}
              handleChange={handleChange}
              batches={batches}
              updateClient={updateClient}
              handleDestroy={handleDestroy}
              errors={errors}
              setErrors={setErrors}
              />
            )}
            {selectedTab === 'teachers' && (
              <TeachersTable
                teachers={teachers}
                setTeachers={setTeachers}
                selectedTab={selectedTab}
                handleChange={handleChange}
                batches={batches}
                updateClient={updateClient}
                handleDestroy={handleDestroy}
                errors={errors}
                setErrors={setErrors}
              />
            )}
          </div>
        </div>
        <div>
          <NewClientModal
          handleChange={handleChange}
          setFormData={setFormData}
          formData={formData}
          handleSubmit={handleSubmit}
          selectedTab={selectedTab}
          batches={batches}
          errors={errors}
          />
        </div>
      </MainContainer>
    </>
  );
}

export default ClientsTable;