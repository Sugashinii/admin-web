import React from 'react';
import AdminLayout from '../layouts/adminlayout';
import OrdersTable from '../components/orders-table';
import '../styles/orders.css';

const OrdersPage = () => {
  return (
    <AdminLayout>
      <div className="orders-content">
        <h2 className="orders-heading">Orders List</h2>
        <OrdersTable />
      </div>
    </AdminLayout>
  );
};

export default OrdersPage;
