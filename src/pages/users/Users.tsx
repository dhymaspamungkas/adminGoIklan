import { useState } from "react"; // Impor useState
import "./users.scss";
import DataTable from "../../components/datatable/DataTable";
import { GridColDef } from "@mui/x-data-grid";
import Add from "../../components/add/Add";
import { useQuery } from "@tanstack/react-query";

const columns: GridColDef[] = [
  { field: "id", headerName: "ID", width: 90 },
  {
    field: "img",
    headerName: "Avatar",
    width: 100,
    renderCell: (params) => {
      return <img src={params.row.img || "/noavatar.png"} alt="" />;
    },
  },
  {
    field: "firstName",
    type: "string",
    headerName: "First name",
    width: 150,
  },
  {
    field: "lastName",
    type: "string",
    headerName: "Last name",
    width: 150,
  },
  {
    field: "email",
    type: "string",
    headerName: "Email",
    width: 200,
  },
  {
    field: "phone",
    type: "string",
    headerName: "Phone",
    width: 200,
  },
  {
    field: "createdAt",
    headerName: "Created At",
    width: 200,
    type:"string",
  },
  {
    field: "verified",
    headerName: "Verified",
    width: 150,
    type: "string",
  },
];

const Users = () => {
  const [open, setOpen] = useState(false)

  const { isLoading, data,  isError, error  } = useQuery({
    queryKey: ["allusers"],
    queryFn: () =>
      fetch("http://localhost:8800/api/users").then(
        (res) => res.json(),
      ),
  })

  return (
    <div className="users">
      <div className="info">
        <h1>Users</h1>
        <button onClick={() => setOpen(true)}>Add New User</button>
      </div>
      {isLoading ? (
        "Loading..." 
      ) : 
        isError ? (
      `Error: ${error.message}`
        ) : (
        <DataTable slug="users" columns={columns} rows={data} />
      )}
      
      {open && <Add slug="user" columns={columns} setOpen={setOpen} />}
    </div>
  )
}

export default Users;
