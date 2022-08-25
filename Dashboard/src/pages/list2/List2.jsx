import "./list2.scss"
import Sidebar from "../../components/sidebar/Sidebar"
import Navbar from "../../components/navbar/Navbar"
import Datatable2 from "../../components/datatable2/Datatable2"

const List2 = () => {
  return (
    <div className="list2">
      <Sidebar/>
      <div className="listContainer">
        <Navbar/>
        <Datatable2/>
      </div>
    </div>
  )
}

export default List2