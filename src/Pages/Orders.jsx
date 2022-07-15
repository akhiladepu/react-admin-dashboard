import React from 'react'
import { GridComponent, columnsDirective, ColumnDirective, Resize, Sort, ContextMenu, Filter, Page, ExcelExport, PdfExport, Edit, Inject } from "@syncfusion/ej2-react-grids";
import { ordersData, contextMenuItems, ordersGrid } from "../Data/dummy"
import { Header } from "../Components";

export const Orders = () => {
  return (
    <div className='m-2 md:m-10 p-2 md:p-10 bg-white rounded-3xl'>
      <Header category="Page" title="Orders" />
    </div>
  )
}
