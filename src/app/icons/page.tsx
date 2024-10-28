import React from 'react'
import { iconsByVersion } from "@/utils/icons";
import Link from 'next/link';
import ListIcons from '@/components/ListIcons';

const Icons = () => {
  return (
    <main className='ds-flex flow-col-nw gap-lg p-block-16'>
      <section>
        <div className="bv-container-md">
          <h1>Hello World</h1>
        </div>
      </section>
      {/* <section>
        <div className="bv-container-md">
          <div className="ds-flex flow-col-nw gap-xs">
            {icons.map((version, index) => version.icons.map((icon, index) => (
              <Link key={index} href={`/icons/${icon.name}`} scroll={false}>
                {icon.name}
              </Link>
            )))}
          </div>
        </div>
      </section> */}
      <section>
        <div className="bv-container-md">
          <ListIcons />
        </div>
      </section>
    </main>
  )
}

export default Icons