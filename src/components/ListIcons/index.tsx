"use client"
import { allIconsSorted } from '@/utils/icons'
import Link from 'next/link'
import React, { useState } from 'react'
import { BvIcon } from 'bevi-icon'

type Variants = 'solid' | 'duo' | 'dark' | 'light'

const ListIcons = () => {
  const [variantState, setVariantState] = useState<Variants>('solid')
  const variants = ['solid', 'duo', 'dark', 'light']
  
  // Agrupa os ícones por letra inicial
  const groupedIcons = allIconsSorted.reduce((acc, icon) => {
    const firstLetter = icon.charAt(0).toUpperCase();
    if (!acc[firstLetter]) {
      acc[firstLetter] = [];
    }
    acc[firstLetter].push(icon);
    return acc;
  }, {} as Record<string, string[]>);

  return (
    <div>
      <div className='w-100 ds-flex-end gap-xs'>
        {variants.map((variant, index) => (
          <button 
            key={`${variant}-${index}`} 
            type='button' 
            onClick={() => setVariantState(variant as Variants)}
          >
            {variant}
          </button>
        ))}
      </div>

      <div className='p-block-10'>
        {Object.entries(groupedIcons).map(([letter, icons]) => (
          <section key={letter}>
            <h3 id={letter}>{letter}</h3>
            <div className='ds-grid grid-tpl-col-06'>
              {icons.map((icon, index) => (
                <Link 
                  key={`${letter}-${index}`} 
                  href={`/icons/${icon}`} 
                  scroll={false} 
                  className='ds-flex-center p-block-04 p-inline-02'
                >
                  <BvIcon 
                    name={icon} 
                    variant={variantState} 
                    size={4} 
                    className={`color-${variantState === 'light' ? 'primary-02' : 'primary-01'}`} 
                  />
                </Link>
              ))}
            </div>
          </section>
        ))}
      </div>
    </div>
  )
}

export default ListIcons