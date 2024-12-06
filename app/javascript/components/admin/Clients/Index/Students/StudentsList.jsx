import React from "react";
import EditClientModal from "../../Edit/EditClientModal";
import DeleteClientModal from "../../DeleteClientModal";
import { BsCircleFill } from "react-icons/bs";
import { useClientsContext } from "../../ClientsContext";

const StudentsList = ({ selectedTab, handleDestroy, handleChange, location }) => {
  const { students } = useClientsContext();

  if (students.length === 0) {
    return (
      <tr>
        <td colSpan="3" className="text-center">No Data Available</td>
      </tr>
    );
  }

  return (
    <>
      {students.map(student => {
        const statusColor = student.attributes.status === 'active' ? 'lightGreen' : 'grey';

        return (
          <tr className="table-light" key={student.id}>
            <td>{student.attributes.id_number}</td>
            <td>
              <BsCircleFill style={{ color: statusColor, marginLeft: '4px' }} />
            </td>
            <td>{student.attributes.full_name}</td>
            <td>{student.attributes.username}</td>
            <td>{student.attributes.email}</td>
            <td>{student.attributes.batch_name}</td>
            {location.pathname !== "/" && (
              <td>
                <EditClientModal
                  {...student}
                  selectedTab={selectedTab}
                  handleChange={handleChange}
                />
                <DeleteClientModal
                  {...student}
                  handleDestroy={handleDestroy}
                />
              </td>
            )}
          </tr>
        );
      })}
    </>
  );
};

export default StudentsList;
