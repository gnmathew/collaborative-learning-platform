import React from "react";
import DeleteClientModal from "../../DeleteClientModal"
import EditClientModal from "../../Edit/EditClientModal";
import { useClientsContext } from "../../ClientsContext";

const TeachersList = ({ selectedTab, handleChange, handleDestroy, location }) => {
  const { teachers } = useClientsContext();

  if (teachers.length === 0) {
    return (
      <tr>
        <td colSpan="3" className="text-center">No Data Available</td>
      </tr>
    );
  }

  return (
    <>
      {teachers.map(teacher => {

        return (
          <tr className="table-light" key={teacher.id}>
            <td>{teacher.attributes.id_number}</td>
            <td>{teacher.attributes.username}</td>
            <td>{teacher.attributes.email}</td>
            {location.pathname !== "/" && (
              <td>
                <EditClientModal
                  {...teacher}
                  selectedTab={selectedTab}
                  handleChange={handleChange}
                />
                <DeleteClientModal
                  {...teacher}
                  handleDestroy={handleDestroy}
                />
              </td>
            )}
          </tr>
        );
      })}
    </>
  );
}

export default TeachersList;