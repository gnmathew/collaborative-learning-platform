import React from "react";
import EditClientModal from "../../Edit/EditClientModal";
import DeleteClientModal from "../../DeleteClientModal";
import { BsCircleFill } from "react-icons/bs";

const StudentsList = ({ students, setStudents, selectedTab, handleDestroy }) => {
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
          <tr className="table-dark" key={student.id}>
            <td className="px-5">{student.attributes.id_number}</td>
            <td className="px-2">
              <BsCircleFill style={{ color: statusColor, marginLeft: '4px' }} />
            </td>
            <td className="px-5">{student.attributes.username}</td>
            <td className="px-5">{student.attributes.email}</td>
            <td className="px-5">{student.attributes.batch_name}</td>
            <td className="px-5">
              <EditClientModal
                {...student}
                selectedTab={selectedTab}
                setStudents={setStudents}
              />
              <DeleteClientModal
                {...student}
                handleDestroy={handleDestroy}
              />
            </td>
          </tr>
        );
      })}
    </>
  );
};

export default StudentsList;
