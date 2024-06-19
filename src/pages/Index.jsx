import { Container, Text, VStack, Heading, Box, Button, Image, HStack } from "@chakra-ui/react";
import { FaPlane, FaHotel, FaCar } from "react-icons/fa";

const Index = () => {
  return (
    <Container centerContent maxW="container.xl" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center" p={4}>
      <VStack spacing={8}>
        <Heading as="h1" size="2xl" textAlign="center">
          Explore the World with Us
        </Heading>
        <Text fontSize="lg" textAlign="center">
          Find the best deals on flights, hotels, and car rentals for your next adventure.
        </Text>
        <HStack spacing={8}>
          <Box textAlign="center">
            <Button leftIcon={<FaPlane />} colorScheme="teal" size="lg">
              Flights
            </Button>
          </Box>
          <Box textAlign="center">
            <Button leftIcon={<FaHotel />} colorScheme="teal" size="lg">
              Hotels
            </Button>
          </Box>
          <Box textAlign="center">
            <Button leftIcon={<FaCar />} colorScheme="teal" size="lg">
              Car Rentals
            </Button>
          </Box>
        </HStack>
        <Box boxSize="lg">
          <Image src="/images/travel.jpg" alt="Travel" borderRadius="md" />
        </Box>
      </VStack>
    </Container>
  );
};

export default Index;