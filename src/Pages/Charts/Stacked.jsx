import React from 'react';
import { Stacked as StackedChart } from "../../Components";
import { ChartsHeader } from '../../Components';

export const Stacked = () => {
  return (
    <div className="m-4 md:m-10 mt-24 p-10 bg-white dark:bg-secondary-dark-bg rounded-3xl">
      <ChartsHeader category="Stacked" title="Budget & Expense" />
      <div className='w-full'>
        <StackedChart />
      </div>
    </div>
  )
}
