import { Metadata } from 'next'
import React from 'react'

import { NO_INDEX_PAGE } from '@/constants/seo.constants'

export const metadata: Metadata = {
	title: 'Dashboard',
	...NO_INDEX_PAGE
}

const Dashboard = () => {
	return <div>Dashboard</div>
}

export default Dashboard
