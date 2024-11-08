import React from "react";
import DeleteClientModal from "../../DeleteClientModal"
import EditClientModal from "../../Edit/EditClientModal";

const TeachersList = ({ teachers, setTeachers, selectedTab, handleDestroy }) => {

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
          <tr className="table-dark" key={teacher.id}>
            <td className="px-5">{teacher.attributes.id_number}</td>
            <td className="px-5">{teacher.attributes.username}</td>
            <td className="px-5">{teacher.attributes.email}</td>
            <td className="px-5">
              <EditClientModal
                {...teacher}
                selectedTab={selectedTab}
                setTeachers={setTeachers}
              />
              <DeleteClientModal
                {...teacher}
                handleDestroy={handleDestroy}
              />
            </td>
          </tr>
        );
      })}
    </>
  );
}

export default TeachersList;