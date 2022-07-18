import React from 'react';
import { ChartComponent, SeriesCollectionDirective, SeriesDirective, Inject, Legend, Category, StackingColumnSeries, Tooltip } from '@syncfusion/ej2-react-charts';
import { stackedCustomSeries, stackedPrimaryXAxis, stackedPrimaryYAxis } from "../../Data/dummy";
import { useStateContext } from '../../Contexts/ContextProvider';

export const Stacked = ({ width, height }) => {
  const { currentMode, currentColor } = useStateContext();

  return (<ChartComponent
    width={width}
    height={height}
    id="stacked-chart" //need to specify as of data "charts"
    primaryXAxis={stackedPrimaryXAxis}
    primaryYAxis={stackedPrimaryYAxis}
    chartArea={{
      border: { width: 0 }
    }}
    tooltip={{
      enable: true
    }}
    legendSettings={{
      background: "white"
    }}
    background={currentMode === 'Dark' ? '#33373E' : '#fff'}
  >
    <Inject services={[Legend, Category, StackingColumnSeries, Tooltip]} />
    <SeriesCollectionDirective>
      {stackedCustomSeries.map((item, index) => <SeriesDirective key={index} {...item} fill={index === 0 ? currentColor : item.fill} />)}
    </SeriesCollectionDirective>
  </ChartComponent>);
}
