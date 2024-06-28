import React from "react";
import MiniDrawer from "../admin/MiniDrawer";
import Dasboard from "../admin/Componets/Dasboard";
import { Route, Routes } from "react-router-dom";
import ProductAdmin from "../admin/Componets/ProductAdmin";
import Blog from "../admin/Componets/Blog";
import Discount from "../admin/Componets/Discount";

function Admin() {
  return (
    <div>
      <MiniDrawer>
        <Routes>
          <Route>
            <Route path="/" element={<Dasboard />} />
          </Route>
          <Route path="product" element={<ProductAdmin />} />
          <Route path="blog" element={<Blog />} />
          <Route path="discount" element={<Discount />} />
        </Routes>
      </MiniDrawer>
    </div>
  );
}

export default Admin;

