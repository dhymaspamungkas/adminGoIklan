import { GridColDef } from "@mui/x-data-grid";
import Add from "../../components/add/Add";
import Datatable from "../../components/datatable/DataTable";
import "./products.scss"
import { useState } from "react";
import { products } from "../../data";


const columns: GridColDef[] = [
  { field: "id", headerName: "ID", width: 90 },
  {
    field: "img",
    headerName: "Image",
    width: 100,
    renderCell: (params) => {
      return <img src={params.row.img} alt="" />;
    },
  },
  {
    field: "title",
    type: "string",
    headerName: "Title",
    width: 250,
  },
  {
    field: "color",
    type: "string",
    headerName: "Color",
    width: 150,
  },
  {
    field: "price",
    type: "string",
    headerName: "Price",
    width: 200,
  },
  {
    field: "producer",
    type: "string",
    headerName: "Producer",
    width: 200,
  },
  {
    field: "createdAt",
    headerName: "Created At",
    width: 200,
    type:"string",
  },
  {
    field: "inStock",
    headerName: "In Stock",
    width: 150,
    type: "boolean",
  },
];


const Products = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className="products">
      <div className="info">
        <h1>Products</h1>
        <button onClick={() => setOpen(true)}>Add New Products</button>
      </div>
      <Datatable slug="products" columns={columns} rows={products} />
      {open && <Add slug="product" columns={columns} setOpen={setOpen} />}
    </div>
  )
}

export default Products