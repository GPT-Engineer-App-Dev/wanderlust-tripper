import { Container, Heading, VStack, Box, Text, HStack, Button } from "@chakra-ui/react";
import { useLocation, useNavigate } from "react-router-dom";

const BookingConfirmation = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { flightDetails, passengerInfo } = location.state || {};

  if (!flightDetails || !passengerInfo) {
    return (
      <Container centerContent maxW="container.md" py={8}>
        <Heading as="h1" size="xl">No Booking Details</Heading>
        <Text mt={4}>No booking details found. Please go back and select a flight.</Text>
        <Button mt={4} colorScheme="teal" onClick={() => navigate("/flight-search")}>Go to Flight Search</Button>
      </Container>
    );
  }

  return (
    <Container centerContent maxW="container.md" py={8}>
      <VStack spacing={4} width="100%">
        <Heading as="h1" size="xl">Booking Confirmation</Heading>
        <Box p={4} borderWidth="1px" borderRadius="md" width="100%">
          <Heading as="h2" size="md" mb={4}>Flight Details</Heading>
          <Text><strong>Airline:</strong> {flightDetails.airline}</Text>
          <Text><strong>Price:</strong> {flightDetails.price}</Text>
          <Text><strong>Duration:</strong> {flightDetails.duration}</Text>
        </Box>
        <Box p={4} borderWidth="1px" borderRadius="md" width="100%">
          <Heading as="h2" size="md" mb={4}>Passenger Information</Heading>
          <Text><strong>Name:</strong> {passengerInfo.name}</Text>
          <Text><strong>Email:</strong> {passengerInfo.email}</Text>
          <Text><strong>Passengers:</strong> {passengerInfo.passengers}</Text>
        </Box>
        <Box p={4} borderWidth="1px" borderRadius="md" width="100%">
          <Heading as="h2" size="md" mb={4}>Confirmation</Heading>
          <Text>Your booking has been confirmed. Thank you for choosing our service!</Text>
        </Box>
        <Button colorScheme="teal" onClick={() => navigate("/")}>Go to Home</Button>
      </VStack>
    </Container>
  );
};

export default BookingConfirmation;