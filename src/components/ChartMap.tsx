import React from 'react'
import SidebarMenu from './SidebarMenu'
import LeafletMap from './LeafletMap'
import LineGraph from './LineGraph'

function ChartMap() {
    return (
        <div className="flex h-screen">
            <SidebarMenu />
            <div className="container mx-auto overflow-auto">
                <div className='mb-10'>
                <LineGraph/>
                </div>
                <div>
                <LeafletMap/>
                </div>
            </div>
        </div>
    )
}

export default ChartMap;