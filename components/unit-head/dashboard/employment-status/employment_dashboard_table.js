import React from 'react'
import Link from 'next/link'
import { useTable, useGroupBy, useExpanded, useSortBy, useFilters, usePagination } from 'react-table'
import ReactHTMLTableToExcel from 'react-html-table-to-excel';

// default search box filter
function DefaultColumnFilter({
  column: { filterValue, preFilteredRows, setFilter },
}) {
  const count = preFilteredRows.length

  return (
    <input className = "form-control col-md-12"
      value={filterValue || ''}
      onChange={e => {
        setFilter(e.target.value || undefined) // Set undefined to remove the filter entirely
      }}
      placeholder={`Search ${count} records...`}
    />
  )
}

// This is a custom filter UI for selecting
// a unique option from a list
function SelectColumnFilter({
  column: { filterValue, setFilter, preFilteredRows, id },
}) {
  // Calculate the options for filtering
  // using the preFilteredRows
  const options = React.useMemo(() => {
    const options = new Set()
    preFilteredRows.forEach(row => {
      options.add(row.values[id])
    })
    return [...options.values()]
  }, [id, preFilteredRows])

  // Render a multi-select box
  return (
    <select className = "form-control col-md-12"
      value={filterValue}
      onChange={e => {
        setFilter(e.target.value || undefined)
      }}
    >
      <option value="">All</option>
      {options.map((option, i) => (
        <option key={i} value={option}>
          {option}
        </option>
      ))}
    </select>
  )
}

// the table markup
function Table ({columns, data}){
 const defaultColumn = React.useMemo(
    () => ({
      // Let's set up our default Filter UI
      Filter: DefaultColumnFilter,
    }),
    []
  )

   const {
     getTableProps,
     getTableBodyProps,
     headerGroups,
     footerGroups,
     prepareRow,
     page,
     rows, 

    canPreviousPage,
    canNextPage,
    pageOptions,
    pageCount,
    gotoPage,
    nextPage,
    previousPage,
    setPageSize,
    state: { pageIndex, pageSize, groupBy, expanded },
   } = useTable({ columns, data, defaultColumn, initialState: { pageIndex: 0 } }, useFilters, useGroupBy, useSortBy, useExpanded, usePagination)

 return(
<div>
    <br />
    <ReactHTMLTableToExcel
				id="test-table-xls-button"
				className="btn btn-primary mb-2"
				table="employmentTable"
				filename="employment"
				buttonText="Download as XLS"/>
    <br />
   <table className = "table table-striped" {...getTableProps()} id="employmentTable">
       <thead>
         {headerGroups.map(headerGroup => (
           <tr {...headerGroup.getHeaderGroupProps()}>
             {headerGroup.headers.map(column => (
               <th
		// sorting function
                 {...column.getHeaderProps(column.getSortByToggleProps())}
                 >
                 {column.render('Header')}
		 <span>
                    {column.isSorted
                      ? column.isSortedDesc
                        ? '(Descending Order)'
                        : '(Ascending Order)'
                      : ' (click to sort)'}
                  </span>
		  <div>{column.canFilter ? column.render('Filter') : null}</div>
               </th>
             ))}
           </tr>
         ))}
       </thead>
       <tbody {...getTableBodyProps()}>
         {page.map((row, i) => {
            prepareRow(row)
            return (
              <tr {...row.getRowProps()}>
                {row.cells.map(cell => {
                  return (
                    <td
                      // For educational purposes, let's color the
                      // cell depending on what type it is given
                      // from the useGroupBy hook
                      {...cell.getCellProps()}
                      style={{
                        background: cell.isGrouped
                          ? '#0aff0082'
                          : cell.isAggregated
                          ? '#ffa50078'
                          : cell.isPlaceholder
                          ? '#ff000042'
                          : 'white',
                      }}
                    >
                      {cell.isGrouped ? (
                        // If it's a grouped cell, add an expander and row count
                        <>
                          <span {...row.getToggleRowExpandedProps()}>
                            {row.isExpanded ? '👇' : '👉'}
                          </span>{' '}
                          {cell.render('Cell')} ({row.subRows.length})
                        </>
                      ) : cell.isAggregated ? (
                        // If the cell is aggregated, use the Aggregated
                        // renderer for cell
                        cell.render('Aggregated')
                      ) : cell.isPlaceholder ? null : ( // For cells with repeated values, render null
                        // Otherwise, just render the regular cell
                        cell.render('Cell')
                      )}
                    </td>
                  )
                })}
              </tr>
            )
          })}
       </tbody>
	<tfoot>
        {footerGroups.map(group => (
          <tr {...group.getFooterGroupProps()}>
            {group.headers.map(column => (
              <td 
		{...column.getFooterProps()}>
		{column.canGroupBy ? (
                    // If the column can be grouped, let's add a toggle
                    <span {...column.getGroupByToggleProps()}>
                      {column.isGrouped ? 'Click to Ungroup ' : 'Click to Group'}
                    </span>
                  ) : null}
		
		{column.render('Footer')}
	      </td>
            ))}
          </tr>
        ))}
      </tfoot>
     </table>

	
     <div className="pagination">
        <button onClick={() => gotoPage(0)} disabled={!canPreviousPage}>
          {'<<'}
        </button>{' '}
        <button onClick={() => previousPage()} disabled={!canPreviousPage}>
          {'<'}
        </button>{' '}
        <button onClick={() => nextPage()} disabled={!canNextPage}>
          {'>'}
        </button>{' '}
        <button onClick={() => gotoPage(pageCount - 1)} disabled={!canNextPage}>
          {'>>'}
        </button>{' '}
        <span>
          Page{' '}
          <strong>
            {pageIndex + 1} of {pageOptions.length}
          </strong>{' '}
        </span>
        <span>
          | Go to page:{' '}
          <input
            type="number"
            defaultValue={pageIndex + 1}
            onChange={e => {
              const page = e.target.value ? Number(e.target.value) - 1 : 0
              gotoPage(page)
            }}
            style={{ width: '100px' }}
          />
        </span>{' '}
        <select
          value={pageSize}
          onChange={e => {
            setPageSize(Number(e.target.value))
          }}
        >
          {[10, 20, 30, 40, 50].map(pageSize => (
            <option key={pageSize} value={pageSize}>
              Show {pageSize}
            </option>
          ))}
        </select>
      </div>
      <style jsx>{`
		table{
			display: block;
			overflow: x;
			white-space: nowrap;
		}
	`}</style>
</div>
 )
  
}
 

// configure columns, populate cells, render table
 function EmploymentAnalyticsTable(props) {
   const data = props.data
 
   const columns = React.useMemo(
     () => [
       {
         Header: 'Name of Faculty',
	 Footer: '',
         accessor: 'col1', // accessor is the "key" in the data,
	 aggregate: 'count',
         Aggregated: ({ value }) => `${value} Names`,
	 Filter: DefaultColumnFilter
       },
       {
         Header: 'Position',
	 Footer: '',
         accessor: 'col2',
	 aggregate: 'count',
         Aggregated: ({ value }) => `${value} Entries`,
	 Filter: SelectColumnFilter
       },
       {
         Header: 'Status',
	 Footer: '',
         accessor: 'col3',
	 aggregate: 'count',
         Aggregated: ({ value }) => `${value} Entries`,
	 Filter: SelectColumnFilter
       },
       {
         Header: 'Category',
	 Footer: '',
         accessor: 'col4',
	 aggregate: 'count',
         Aggregated: ({ value }) => `${value} Entries`,
	 Filter: SelectColumnFilter
       },
       {
         Header: 'Start Date',
   Footer: '',
         accessor: 'col5',
   aggregate: 'count',
         Aggregated: ({ value }) => `${value} Entries`,
   Filter: SelectColumnFilter
       }
     ],
     []
   )
 
   return (
     <Table columns={columns} data={data} /> 
   )
 }

export default EmploymentAnalyticsTable
