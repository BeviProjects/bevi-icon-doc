'use client'
import Link from 'next/link'
import React, { ReactNode } from 'react'
import './styles.css'

type ModalProps = {
  children: ReactNode
  closeHref: string
}

export const Modal = ({children, closeHref}: ModalProps) => {
  return (
    <aside className='modal ps-fixed ds-flex-end inset-00 z-index-08'>
      <Link href={closeHref} className='modal-close ps-absolute inset-00 z-index-01' />
      <div className="bv-container-md ps-relative z-index-02">
        <div className="modal-content p-block-16 p-inline-10 bgc-primary-03">
          <div className='w-100 ds-flex-end'>
            <Link href={closeHref}>
              Close
            </Link>
          </div>
          {children}
        </div>
      </div>
    </aside>
  )
}
