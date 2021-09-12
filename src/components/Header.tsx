import { Flex, Text, Input, Icon, HStack,Box, Avatar } from '@chakra-ui/react'
import { RiNotificationLine, RiSearchLine, RiUserAddFill, RiUserAddLine } from 'react-icons/ri'


export function Header() {
    return (
        <Flex as="header" w="100%" maxWidth={1480} h="20" mx="auto" mt="4" px="6" align="center">
            <Text fontSize="3xl" fontWeight="bold" letterSpacing="tight" w="64">DashGo <Text as="span" color="pink.500" ml="1">.</Text></Text>
            <Flex as="label" flex="1" py="4" px="8" ml="6" maxWidth="400" alignSelf="center" color="gray.200" position="relative" bg="gray.800" borderRadius="full">
                <Input color="gray.50" px="4" mr="4" variant="unstyled" placeholder="Buscar na plataforma" _placeholder={ {color: 'gray.400'} }/>
                <Icon as={RiSearchLine}  fontSize="20" cursor="pointer"/>
            </Flex>
            <Flex align="center" ml="auto">
                <HStack spacing="4" mx="8" pr="8" py="1" color="gray.300" borderRightWidth={1} borderColor="gray.700">
                    <Icon  as={RiNotificationLine} fontSize="20"/>
                    <Icon  as={RiUserAddLine} fontSize="20"/>
                </HStack>
                <Flex align="center">
                    <Box mr="4" textAlign="right">
                        <Text>Marcos Maverick</Text>
                        <Text color="gray.300"fontSize="small">marquinhopimpo@gmail.com</Text>
                    </Box>
                    <Avatar size="md" name="Marcos Maverick"  src="https://avatars.githubusercontent.com/u/61391392?v=4"/>
                </Flex>
            </Flex>
        </Flex>
    )
}