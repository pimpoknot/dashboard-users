import { Flex, Box, Text, Avatar } from '@chakra-ui/react'

export function Profile() {
    return (
        <Flex align="center">
            <Box mr="4" textAlign="right">
                <Text>Marcos Maverick</Text>
                <Text color="gray.300" fontSize="small">marquinhopimpo@gmail.com</Text>
            </Box>
            <Avatar size="md" name="Marcos Maverick" src="https://avatars.githubusercontent.com/u/61391392?v=4" />
        </Flex>
    )
}