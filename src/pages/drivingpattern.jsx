import React from 'react'
import BarGraph from '@/components/DrivingPattern/Graph';
import Layout from '@/components/common/Layout';
const DrivingPattern = () => {
  return (
    <Layout>
      <div className='px-15 py-12'>
        {/* dsfj */}
        <BarGraph values={[]} labels={[]} />
      </div>

    </Layout>
  )
}

export default DrivingPattern