import React, { useState, useEffect } from 'react'
import { useLocation } from "react-router-dom";
import styled from 'styled-components'
import StudentsTable from "./Students/StudentsTable"
import TeachersTable from './Teachers/TeachersTable'
import NewClientModal from '../New/NewClientModal'
import ViewTableBtn from '../../../ui/buttons/ViewTableBtn';
import { BsPlusCircleFill } from "react-icons/bs"
import { closeModal } from '../../../../utils/modalUtils'
import { useClientsContext } from '../ClientsContext'

const MainContainer = styled.div`
  max-width: 1780px;
  margin: auto;
  margin-top: 2%;
  text-align: center;
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
  const { createClient, deleteClient, setErrors } = useClientsContext();
  const location = useLocation();

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
          <div className="card-header text-light">
            <ul className="nav nav-tabs card-header-tabs">
              <li className="nav-item">
                <TabBtn
                  className={`nav-link ${selectedTab === 'students' ? 'active' : 'text-muted'}`}
                  onClick={() => handleTabChange('students')}
                >
                  Students
                </TabBtn>
              </li>
              <li className="nav-item">
                <TabBtn
                  className={`nav-link ${selectedTab === 'teachers' ? 'active' : 'text-muted'}`}
                  onClick={() => handleTabChange('teachers')}
                >
                  Teachers
                </TabBtn>
              </li>
              <li className="nav-item ms-auto">
              {location.pathname !== "/" ? (
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
              ) : (
                <ViewTableBtn path={"/koda-board/admin/clients"}/>
              )}
              </li>
            </ul>
          </div>
          <div className="card-body">
            {selectedTab === 'students' && (
              <StudentsTable
              selectedTab={selectedTab}
              handleChange={handleChange}
              handleDestroy={handleDestroy}
              location={location}
              />
            )}
            {selectedTab === 'teachers' && (
              <TeachersTable
                selectedTab={selectedTab}
                handleChange={handleChange}
                handleDestroy={handleDestroy}
                location={location}
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
          />
        </div>
      </MainContainer>
    </>
  );
}

export default ClientsTable;