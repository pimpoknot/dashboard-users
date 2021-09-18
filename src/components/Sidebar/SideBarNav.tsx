import { Stack, Box, Text} from '@chakra-ui/react'
import { RiContactsLine, RiDashboardLine, RiGitMergeLine, RiInputMethodLine } from 'react-icons/ri'
import { NavSection } from './NavSection'
import { NavLink } from './NavLink'

export function SideBarNav () {
    return (
        <Stack spacing="12" align="flex-start">
                <NavSection title="GERAL">
                    <NavLink icon={RiDashboardLine} href="/dashboard">Dashboard</NavLink>
                    <NavLink icon={RiContactsLine } href="/users">Usuários</NavLink>
                </NavSection>
                <Box>
                    <Text fontWeight="bold" color="gray.400" fontSize="small">Automação</Text>
                    <Stack spacing="4" mt="8" align="stretch">
                        <NavSection title="AUTOMAÇÃO">
                            <NavLink icon={RiInputMethodLine} href="/forms">Formulários</NavLink>
                            <NavLink icon={RiGitMergeLine} href="/automation">Automação</NavLink>
                        </NavSection>
                    </Stack>
                </Box>
            </Stack>
    )
}