/* eslint-disable react/prop-types */

import { MantineReactTable, MRT_GlobalFilterTextInput, MRT_ToggleFiltersButton } from 'mantine-react-table';
import { Box, Flex } from '@mantine/core'; // Import Menu, Button
import { formateDate } from "../../utils/formateDate"; // Import formatDate function

const Appointment = ({ appointments }) => {
    const columns = [
        {
            id: 'name',
            header: 'Name',
            accessorFn: (item) => item.user.name,
            align: 'center'
        },
        {
            id: 'email',
            header: 'Email',
            accessorFn: (item) => item.user.email,
            align: 'center'
        },
        {
            id: 'gender',
            header: 'Gender',
            accessorFn: (item) => item.user.gender,
            align: 'center'
        },
        {
            id: 'payment',
            header: 'Payment',
            align: 'center',
            Cell: ({ cell }) => (
                <Box
                    sx={(theme) => ({
                        backgroundColor: cell.row.original.isPaid ? theme.colors.green[6] : theme.colors.red[6], // Green for paid, red for unpaid
                        color: '#fff',
                        padding: '4px',
                        borderRadius: '4px',
                        maxWidth: '9ch',
                        textAlign: 'center',
                        fontWeight: 'bold'
                    })}
                >
                    {cell.row.original.isPaid ? 'Paid' : 'Unpaid'}
                </Box>
            ),
        },
        {
            id: 'price',
            header: 'Price',
            accessorFn: (item) => `₹ ${item.ticketPrice}`, // Prepend ₹ to the ticket price
            align: 'center'
        },
        {
            id: 'bookedOn',
            header: 'Booked On',
            accessorFn: (item) => formateDate(item.createdAt),
            align: 'center'
        },
    ];

    return (
        <MantineReactTable
            columns={columns}
            data={appointments}
            pagination
            itemsPerPage={10}
            itemsPerPageOptions={[10, 20, 50]}
            enableColumnFilterModes={true}
            enableColumnOrdering={true}
            enableFacetedValues={true}
            enableGrouping={true}
            enablePinning={true}
            enableRowActions={false} // Disable row actions for now
            enableRowSelection={false} // Disable row selection for now
            initialState={{
                showColumnFilters: true,
                showGlobalFilter: true,
            }}
            paginationDisplayMode="pages"
            positionToolbarAlertBanner="bottom"
            mantinePaginationProps={{
                radius: 'xl',
                size: 'lg',
            }}
            mantineSearchTextInputProps={{
                placeholder: 'Search',
            }}
            renderTopToolbar={({ table }) => (
                <Flex p="md" justify="space-between" >
                    <Flex gap="xs">
                        <MRT_GlobalFilterTextInput table={table} />
                        <MRT_ToggleFiltersButton table={table} />
                    </Flex>
                </Flex>
            )}
        />
    );
};

export default Appointment;
