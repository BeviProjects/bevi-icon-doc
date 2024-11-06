import React, { useState } from 'react'
import { Variants } from '@/types/icons'
import { BvIcon } from 'bevi-icon'
import './styles.css'

type SwitchVariantProps = {
  state: Variants
  setState: (state: Variants) => void
}

export const SwitchVariant = ({state, setState}:SwitchVariantProps) => {
  const variants = ['solid', 'duo', 'dark', 'light']

  return (
    <div className='ds-flex-end gap-xs'>
      {variants.map((variant, index) => (
        <button 
          key={`${variant}-${index}`} 
          type='button'
          data-state={state === variant ? 'active' : 'inactive'}
          onClick={() => setState(variant as Variants)}
          className='btn-switch-variant p-block-02 p-inline-04'
        >
          <BvIcon 
            name='cube' 
            size={1.5} 
            variant={variant} 
            className={`color-${variant === 'light' ? 'primary-02' : 'primary-01'}`}/>
          {variant}
        </button>
      ))}
    </div>
  )
}
