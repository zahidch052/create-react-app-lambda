import React from 'react';
import './Table.css';
const TableComponent = ({ children }) => {

  return (
    <div className="row d-flex justify-content-center mt-3 customScrollbar" style={{ overflow: "auto", }}>
      <div className="col-12">
        <table className="table table-responsive">
          {children}
        </table>
      </div>
    </div>
  )

}

export default TableComponent;