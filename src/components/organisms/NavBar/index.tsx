"use client"

import React, { FC, useState } from 'react';
import { NavBarProps } from './types';
import NavButton from '@/components/molecules/NavButton';
import { NavButtonCategory } from '@/components/molecules/NavButton/types';
import { initialNavStates } from './types';

const NavBar: FC<NavBarProps> = () => {

  const [ navStates , navStatesUpdate ] = useState(initialNavStates);

  const handleClick = (categoryPressed: NavButtonCategory) => {

    navStatesUpdate((previousState) => {
      const newNavStates = [...previousState]
      for (const i in newNavStates) {
        if (newNavStates[i].category === categoryPressed) {
          newNavStates[i].isActive = true;
        } else {
          newNavStates[i].isActive = false;
        }
      }

      return newNavStates;
    })
  }

  const categoryNavButtons = initialNavStates.map((categoryState) => {

    const category = categoryState.category;

    return (
      <NavButton category={category}
                 notificationCount={categoryState.notificationCount}
                 isActive={categoryState.isActive}
                 onClick={() => handleClick(category)}
                 key={category}
                 />
    );
  });

  return (
    <aside className='flex fixed items-center min-h-screen 
                      flex-col py-[7rem] w-[7rem] bg-sidebar
                      [&>*]:m-4 overflow-hidden z-10 '>
        { categoryNavButtons }
    </aside>
  );
};

export default NavBar;