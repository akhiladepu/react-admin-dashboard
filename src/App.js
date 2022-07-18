import React, { useRef } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { FiSettings } from "react-icons/fi";
import { AiOutlineMenu, AiOutlineArrowLeft } from 'react-icons/ai';
import { TooltipComponent } from "@syncfusion/ej2-react-popups";
import { Navbar, Footer, Sidebar, ThemeSettings } from "./Components";
import { Ecommerce, Orders, Calendar, Employees, Stacked, Pyramid, Customers, Kanban, Area, Line, Bar, Pie, Financial, ColorPicker, ColorMapping, Editor } from "./Pages"
import "./App.css";
import { useStateContext } from './Contexts/ContextProvider';

const NavButton = ({ title, customFunction, icon, color, dotColor }) => {
  // , tooltipRef
  return (
    <TooltipComponent content={title} position="BottomCenter" closeDelay={0.5}>
      {/* id="menuTooltip"  */}
      {/* ref={tooltipRef} */}
      {/* animation={{ open: { effect: 'FadeIn', duration: 50, delay: 0 }, close: { effect: 'FadeOut', duration: 50, delay: 0 } }} */}
      <button type="button" onClick={customFunction} style={{ color }} className='relative text-xl rounded-full p-3 hover:bg-light-gray hover:dark:bg-secondary-dark-bg'>
        <span style={{ background: dotColor }} className='absolute inline-flex rounded-full h-2 w-2 right-2 top-2' />
        {icon}
      </button>
    </TooltipComponent>
  )
};

function App() {
  // const tooltipRef = useRef(null);
  const { activeMenu, themeSettings, setThemeSettings, currentColor, currentMode, setActiveMenu } = useStateContext();
  return (
    <div className={currentMode === 'Dark' ? 'dark' : ''}>
      <BrowserRouter>
        <div className="flex relative dark:bg-main-dark-bg">
          <div className="fixed right-4 bottom-4" style={{ zIndex: '1000' }}>
            <TooltipComponent content="Settings" position="Top">
              <button type="button" className="text-3xl p-3 hover:drop-shadow-xl hover:bg-light-gray text-white" style={{ background: currentColor, borderRadius: '50%' }} onClick={() => { setThemeSettings(true) }}>
                <FiSettings />
              </button>
            </TooltipComponent>
          </div>
          <>
            {
              activeMenu ?
                (
                  <div className="w-72 fixed sidebar dark:bg-secondary-dark-bg bg-white">
                    <Sidebar />
                  </div>
                ) :
                (
                  <div className="w-0 dark:bg-secondary-dark-bg">
                    <Sidebar />
                  </div>
                )
            }
            <div className={`flex fixed sidebar top-2 ${activeMenu ? 'left-[18rem]' : 'left-2'} bg-none rounded-full`} >
              {/*  ${activeMenu ? 'left-[18rem]' : 'left-2'} */}
              <NavButton title="Menu" customFunction={() => {
                setActiveMenu((prevActiveMenu) => !prevActiveMenu);
                // document.getElementsByClassName('e-popup-open').classList.add('hidden');
                // console.log(document.getElementByrole('menuTooltip_3_content').style('class', 'hidden'));
                // tooltipRef.current.destroy();
                // tooltipRef.current.refresh();
                // Finally read the documentation, closeDelay parameter for tooltip is worked
              }} color={currentColor} icon={activeMenu ? <AiOutlineArrowLeft /> : <AiOutlineMenu />} />
              {/* tooltipRef={tooltipRef} */}
            </div>
          </>
          <div className={`dark:bg-main-dark-bg bg-main-bg min-h-screen w-full ${activeMenu ? 'md:ml-72' : 'flex-2'}`}>
            <div className="fixed md:static bg-main-bg dark:bg-main-dark-bg navbar w-full">
              <Navbar />
            </div>
            <div>
              {themeSettings && <ThemeSettings />}
              <Routes>
                {/* Routes for dashboard */}
                <Route path="/" element={<Ecommerce />} />
                <Route path="/ecommerce" element={<Ecommerce />} />
                {/* Routes for pages */}
                <Route path="/orders" element={<Orders />} />
                <Route path="/employees" element={<Employees />} />
                <Route path="/customers" element={<Customers />} />
                {/* Routes for Apps */}
                <Route path="/kanban" element={<Kanban />} />
                <Route path="/editor" element={<Editor />} />
                <Route path="/calendar" element={<Calendar />} />
                <Route path="/color-picker" element={<ColorPicker />} />
                {/* Routes for Charts */}
                <Route path="/line" element={<Line />} />
                <Route path="/area" element={<Area />} />
                <Route path="/bar" element={<Bar />} />
                <Route path="/pie" element={<Pie />} />
                <Route path="/financial" element={<Financial />} />
                <Route path="/color-mapping" element={<ColorMapping />} />
                <Route path="/pyramid" element={<Pyramid />} />
                <Route path="/stacked" element={<Stacked />} />
              </Routes>
            </div>
          </div>
        </div>
      </BrowserRouter >
    </div >
  );
}

export default App;