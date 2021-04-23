import Tables from '../views/ui/Tables/Tables.vue'
import Table from '../views/ui/Tables/Table.vue'
import TuiGrid from '../views/ui/Tables/TuiGrid'
//import VGTable from '../views/ui/Tables/VGTableV1.vue'
import VGTable from '../views/ui/Tables/VGTableV2.vue'
import StyledTablePage from '../views/ui/Tables/Styled.vue'
import TableElement from '../views/ui/Tables/TableElement.vue'
import V2TablePage from '../views/ui/Tables/V2TablePage.vue'

import layouts from '../layout'

export default {
	path: '/tables',
	name: 'tables',
	component: Tables,
	meta: {
		auth: true,
		layout: layouts.navLeft
	},
	children: [
		{
			path: 'simple-table',
			name: 'simple-table',
			component: Table,
			meta: {
				auth: true,
				layout: layouts.navLeft,
				searchable: true,
				tags: ['simple']
			}
		},
		{
			path: 'tui-grid',
			name: 'tui-grid',
			component: TuiGrid,
			meta: {
				auth: true,
				layout: layouts.navLeft,
				searchable: true,
				title: 'TUI Grid',
				tags: ['advanced']
			}
		},
		{
			path: 'styled-table',
			name: 'styled-table',
			component: StyledTablePage,
			meta: {
				auth: true,
				layout: layouts.navLeft,
				searchable: true,
				title: 'Element Styled Table',
				tags: ['advanced']
			}
		},
		{
			path: 'vgtable',
			name: 'vgtable',
			component: VGTable,
			meta: {
				auth: true,
				layout: layouts.navLeft,
				searchable: true,
				title: 'Vue Good Table',
				tags: ['advanced']
			}
		},
		{
			path: 'table-element',
			name: 'table-element',
			component: TableElement,
			meta: {
				auth: true,
				layout: layouts.navLeft,
				searchable: true,
				title: 'Element UI Table',
				tags: ['advanced']
			}
		},
		{
			path: 'v2table',
			name: 'v2table',
			component: V2TablePage,
			meta: {
				auth: true,
				layout: layouts.navLeft,
				searchable: true,
				title: 'V2 Table',
				tags: ['advanced']
			}
		}
	]
}

