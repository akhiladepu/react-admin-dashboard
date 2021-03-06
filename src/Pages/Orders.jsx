import React from 'react';
import { GridComponent, ColumnDirective, Resize, Sort, ContextMenu, Filter, Page, ExcelExport, PdfExport, Edit, Inject, ColumnsDirective } from "@syncfusion/ej2-react-grids";
import { ordersData, contextMenuItems, ordersGrid } from "../Data/dummy"
import { Header } from "../Components";
import { useStateContext } from '../Contexts/ContextProvider';

export const Orders = () => {
  const { currentMode, currentColor } = useStateContext();
  return (
    <div className='m-2 md:m-10 p-2 md:p-10 bg-white  rounded-3xl'>
      {/* dark:bg-secondary-dark-bg */}
      <Header category="Page" title="Orders" />
      <GridComponent
        id="grid-component"
        dataSource={ordersData}
        allowPaging
        allowSorting
      >
        <ColumnsDirective
        >
          {ordersGrid.map((item, index) => (
            <ColumnDirective key={index} {...item}
              customAttributes={{ class: currentMode === 'Dark' ? 'secondary-dark-color' : "normal" }} />
          ))}
        </ColumnsDirective>
        <Inject services={[Resize, Sort, ContextMenu, Filter, Page, ExcelExport, Edit, PdfExport]} />
      </GridComponent>
    </div>
  )
}
