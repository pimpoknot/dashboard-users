import { Box, Drawer, DrawerOverlay, DrawerContent, useBreakpointValue, DrawerCloseButton, DrawerHeader, DrawerBody } from '@chakra-ui/react'
import { useSidebarDrawer } from '../../context/SidebarDrawerContext'

import { SideBarNav } from './SideBarNav'

export function Sidebar() {

    const { isOpen, onClose } = useSidebarDrawer()

    const isFloatingSidebar = useBreakpointValue({
        base: true,
        lg: false
    })

    if (isFloatingSidebar) {
        return (
            <Drawer isOpen={isOpen} placement="left" onClose={ onClose }>
                <DrawerOverlay>
                    <DrawerContent bg="gray.800" p="4">
                        <DrawerCloseButton mt="6" />
                        <DrawerHeader>Navegação</DrawerHeader>

                        <DrawerBody>
                            <SideBarNav />
                        </DrawerBody>
                    </DrawerContent>
                </DrawerOverlay>
            </Drawer>
        )
    }
    return (
        <Box as="aside" w="64" mr="8">
            <SideBarNav />
        </Box>
    )
}