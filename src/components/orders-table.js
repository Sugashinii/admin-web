import React from 'react';
import {
  useReactTable,
  getCoreRowModel,
  flexRender,
  createColumnHelper,
} from '@tanstack/react-table';
import '../styles/orders.css';

const columnHelper = createColumnHelper();

const columns = [
  columnHelper.accessor('id', {
    header: 'Order ID',
    cell: info => info.getValue(),
  }),
  columnHelper.accessor('customer', {
    header: 'Customer',
    cell: info => info.getValue(),
  }),
  columnHelper.accessor('item', {
    header: 'Item',
    cell: info => info.getValue(),
  }),
  columnHelper.accessor('status', {
    header: 'Status',
    cell: info => (
      <span
        className={`status-badge ${
          info.getValue() === 'Delivered' ? 'delivered' : 'pending'
        }`}
      >
        {info.getValue()}
      </span>
    ),
  }),
];

const data = [
  { id: 'ORD001', customer: 'Body Soda', item: 'Hay beauty lipstick', status: 'Delivered' },
  { id: 'ORD002', customer: 'Bullet Pandi', item: 'Carmesi razor', status: 'Pending' },
  { id: 'ORD003', customer: 'Alert Aarumugam', item: 'PAC eyeliner combo', status: 'Delivered' },
  { id: 'ORD004', customer: 'Kaipulla', item: 'Fay Sunscreen', status: 'Pending' },
];

const OrdersTable = () => {
  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  return (
    <div className="orders-table">
      <table>
        <thead>
          {table.getHeaderGroups().map(headerGroup => (
            <tr key={headerGroup.id}>
              {headerGroup.headers.map(header => (
                <th key={header.id}>
                  {flexRender(header.column.columnDef.header, header.getContext())}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody>
          {table.getRowModel().rows.map(row => (
            <tr key={row.id}>
              {row.getVisibleCells().map(cell => (
                <td key={cell.id}>
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default OrdersTable;
