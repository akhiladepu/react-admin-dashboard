import React from 'react';
import { ChartComponent, SeriesCollectionDirective, SeriesDirective, Inject, Legend, Category, Tooltip, ColumnSeries, DataLabel } from "@syncfusion/ej2-react-charts";
import { barCustomSeries, barPrimaryYAxis, barPrimaryXAxis } from '../../Data/dummy';
import { ChartsHeader } from '../../Components';

export const Bar = () => {

  return (
    <div className='m-4 md:m-10 mt-24 p-10 bg-white dark:bg-secondary-dark-bg rounded-3xl'>
      <ChartsHeader category="Bar" title="Olympic Medal Counts - RIO" />
      <div className='w-full'>
        <ChartComponent
          id='bar-chart'
          primaryXAxis={barPrimaryXAxis}
          primaryYAxis={barPrimaryYAxis}
          chartArea={{ border: { width: 0 } }}
          tooltip={{ enable: true }}
          // background={currentMode === 'Dark' ? '#33373E' : '#fff'}
          legendSettings={{ background: 'white' }}
        >
          <Inject services={[Legend, Category, Tooltip, ColumnSeries, DataLabel]} />
          <SeriesCollectionDirective>
            {barCustomSeries.map((item, index) => (<SeriesDirective key={index} {...item} />))}
          </SeriesCollectionDirective>
        </ChartComponent>
      </div>
    </div>
  )
}