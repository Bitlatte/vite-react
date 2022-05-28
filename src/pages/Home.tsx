import { VStack } from '@chakra-ui/react'
import { Navbar } from '../components/Navbar'


export const Home = () => {
    return (
        <VStack align={'end'} mx={7} my={3}>
            <Navbar />
        </VStack>
    )
}