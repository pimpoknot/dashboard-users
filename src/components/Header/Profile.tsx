import { Flex, Box, Text, Avatar } from '@chakra-ui/react'


interface ProfileProps {
    showProfileData: boolean;
}
export function Profile({ showProfileData = true }: ProfileProps) {
    return (
        <Flex align="center">
            {showProfileData && (
                <Box mr="4" textAlign="right">
                    <Text>Marcos Maverick</Text>
                    <Text color="gray.300" fontSize="small">marquinhopimpo@gmail.com</Text>
                </Box>
            )}
            <Avatar size="md" name="Marcos Maverick" src="https://avatars.githubusercontent.com/u/61391392?v=4" />
        </Flex>
    )
}