/* eslint-disable react/prop-types */

import { MantineReactTable, MRT_GlobalFilterTextInput, MRT_ToggleFiltersButton } from 'mantine-react-table';
import { Flex} from '@mantine/core'; // Import Menu, Button
import { formateDate } from "../../utils/formateDate"; // Import formatDate function

const Appointment = ({ appointments }) => {
    const columns = [
        { id: 'name', header: 'Name', accessorFn: (item) => `${item.user.name} (${item.user.email})`, align: 'left' },
        { id: 'gender', header: 'Gender', accessorFn: (item) => item.user.gender, align: 'left' },
        { id: 'payment', header: 'Payment', accessorFn: (item) => item.isPaid ? 'Paid' : 'Unpaid', align: 'left' },
        { id: 'price', header: 'Price', accessorFn: (item) => item.ticketPrice, align: 'left' },
        { id: 'bookedOn', header: 'Booked On', accessorFn: (item) => formateDate(item.createdAt), align: 'left' },
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
                <Flex p="md" justify="space-between">
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
