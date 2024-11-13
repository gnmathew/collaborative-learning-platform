import React, { useState, useEffect } from 'react'
import axios from 'axios'
import styled from 'styled-components'
import StudentsTable from "./Students/StudentsTable"
import TeachersTable from './Teachers/TeachersTable'
import NewClientModal from '../New/NewClientModal'
import { BsPlusCircleFill } from "react-icons/bs";

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
  const [teachers, setTeachers] = useState([])
  const [students, setStudents] = useState([])
  const [newClient, setNewClient] = useState({})
  const [selectedTab, setSelectedTab] = useState('students');
  const token = localStorage.getItem('token');

  useEffect(() =>{
    axios.get('/api/v1/admin/clients', {
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
    .then((resp) => {
      setTeachers(resp.data.teachers.data);
      setStudents(resp.data.students.data);
    })
    .catch( err => console.log(err))
  }, [])

  useEffect(() => {

    setNewClient((currentClient) => ({
      ...currentClient,
      role: selectedTab === 'students' ? 'student' : 'teacher',
    }));
  }, [selectedTab]);

  const handleChangeNew = (e) => {
    e.preventDefault()

    setNewClient((currentClient) => ({
      ...currentClient,
      [e.target.name]: e.target.value
    }))
  }

  const submitNewForm = (e) => {
    e.preventDefault()

    const csrfToken =document.querySelector('[name=csrf-token]').content
    axios.defaults.headers.common['X-CSRF-TOKEN'] = csrfToken

    axios.post('/api/v1/admin/clients',
      { client: newClient },
      {
        headers: {
          Authorization: `Bearer ${token}`
        }
      }
    )
    .then( resp => {
      const clientData = resp.data.data

      setNewClient({});

      if (newClient.role === 'student') {
        setStudents((currentStudents) => [...currentStudents, clientData]);
      } else {
        setTeachers((currentTeachers) => [...currentTeachers, clientData]);
      }

    })
    .catch( error => {console.error("Error submitting form:", error)})
  }

  const handleTabChange = (tab) => {
    setSelectedTab(tab);
  };

  const handleDestroy = async (id) => {
    try {
      await axios.delete(`/api/v1/admin/clients/${id}`,
        {
          headers: {
            Authorization: `Bearer ${token}`
          }
        }
      );

      if (newClient.role === 'student') {
        setStudents(students.filter((s) => s.id !== id));
      } else {
        setTeachers(teachers.filter((t) => t.id !== id));
      }
    } catch (error) {
      console.error("Error deleting the post:", error);
    }
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
              handleDestroy={handleDestroy}
              />
            )}
            {selectedTab === 'teachers' && (
              <TeachersTable
                teachers={teachers}
                setTeachers={setTeachers}
                selectedTab={selectedTab}
                handleDestroy={handleDestroy}
              />
            )}
          </div>
        </div>
        <div>
          <NewClientModal
          handleChangeNew={handleChangeNew}
          submitNewForm={submitNewForm}
          newClient={newClient}
          selectedTab={selectedTab}
          />
        </div>
      </MainContainer>
    </>
  );
}

export default ClientsTable;