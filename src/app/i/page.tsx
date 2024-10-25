import { Dashboard } from 'components/pages/dashboard/Dashboard'
import { Metadata } from 'next'
import React from 'react'

import { NO_INDEX_PAGE } from '@/constants/seo.constants'
import { Statistics } from './Statistics'

export const metadata: Metadata = {
	title: 'Dashboard',
	...NO_INDEX_PAGE
}

const DashboardPage = () => {
	return <div>
		<Dashboard />

		<Statistics/>
	</div>
}

export default DashboardPage
