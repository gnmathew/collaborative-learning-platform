import React from 'react';
import ClientsTable from '../Clients/Index/ClientsTable';

const ClientsTableDashboard = () => {
  return(
    <div className="mb-4">
      <div className="card-body">
        <ClientsTable/>
      </div>
    </div>
  );
};

export default ClientsTableDashboard;