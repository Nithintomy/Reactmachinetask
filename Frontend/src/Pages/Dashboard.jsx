import React from 'react'
import GraphComponent from '../components/GraphComponent'
import PieChartComponent from '../components/PieChartComponent'
import TableComponent from '../components/TableComponent'
import SideBar from '../components/SideBar'
import Navbar from '../components/Navbar'
import Profile from '../components/Profile'
import Pagination from '../components/Pagination'

function Dashboard() {
  return (
    <div className="flex flex-col sm:flex-row">
      <div className="flex-shrink-0 w-56">
        <SideBar />
      </div>
      <div className="flex-grow flex flex-col p-4  bg-blue-100 md:p-8">
        <Navbar />
        <div className="flex flex-col sm:flex-row mt-14 p-5">
          <GraphComponent />
          <PieChartComponent />
        </div>
        <div className="flex flex-col sm:flex-row p-5">
          <TableComponent />
          <Profile />
        </div>
        <Pagination />
      </div>
    </div>
  );
}

export default Dashboard
