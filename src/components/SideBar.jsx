import { BsPlus, BsFillLightningFill, BsGearFill } from 'react-icons/bs';
import { FaFire, FaPoo } from 'react-icons/fa';

const SideBar = () => {
  return (
    <div
      className='fixed top-0 left-0 h-screen w-16 flex flex-col
                  bg-fuchsia-900 dark:bg-gray-900 shadow-lg'
    >
      <SideBarIcon icon={<FaFire size='28' />} popText={'fire'} />
      <hr className='sidebar-hr' />
      <SideBarIcon icon={<BsPlus size='32' />} popText={'plus'} />
      <SideBarIcon icon={<BsFillLightningFill size='20' />} popText={'light'} />
      <SideBarIcon icon={<FaPoo size='20' />} popText={''} />
      <SideBarIcon icon={<BsGearFill size='22' />} popText={''} />
    </div>
  );
};

const SideBarIcon = ({ icon, popText }) => (
  <div className='sidebar-icon group'>
    {icon}
    <span class='sidebar-tooltip group-hover:scale-100'>{popText}</span>
  </div>
);

export default SideBar;
