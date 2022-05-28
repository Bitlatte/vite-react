import {
    Button,
    Drawer,
    DrawerBody,
    DrawerCloseButton,
    DrawerContent,
    DrawerFooter,
    DrawerHeader,
    DrawerOverlay,
    Flex,
    useDisclosure
} from '@chakra-ui/react'

import { FaHome } from 'react-icons/fa'
import { BiMenu } from 'react-icons/bi'

export const Navbar = () => {
    const { isOpen, onOpen, onClose } = useDisclosure()

    return (
        <>
            <Button onClick={onOpen} size={'sm'}>
                <BiMenu fontSize={'25px'} />
            </Button>
            <Drawer isOpen={isOpen} placement={'right'} onClose={onClose}>
                <DrawerOverlay />
                <DrawerContent>
                    <DrawerCloseButton />
                    <DrawerHeader>Bitlatte.io</DrawerHeader>
                    <DrawerBody>
                        <Flex direction={'column'}>
                            <Button leftIcon={<FaHome />}>Home</Button>
                        </Flex>
                    </DrawerBody>
                    <DrawerFooter>

                    </DrawerFooter>
                </DrawerContent>
            </Drawer>
        </>
    )
}