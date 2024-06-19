import { useState } from "react";
import { Container, Heading, VStack, FormControl, FormLabel, Input, Button, Select, HStack, Box, Text } from "@chakra-ui/react";

const FlightSearch = () => {
  const [departureCity, setDepartureCity] = useState("");
  const [destinationCity, setDestinationCity] = useState("");
  const [departureDate, setDepartureDate] = useState("");
  const [returnDate, setReturnDate] = useState("");
  const [passengers, setPassengers] = useState(1);
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = () => {
    // Mock search results
    const results = [
      { id: 1, airline: "Airline A", price: "$200", duration: "3h 45m" },
      { id: 2, airline: "Airline B", price: "$250", duration: "4h 15m" },
    ];
    setSearchResults(results);
  };

  return (
    <Container centerContent maxW="container.md" py={8}>
      <VStack spacing={4} width="100%">
        <Heading as="h1" size="xl">Search Flights</Heading>
        <FormControl id="departure-city">
          <FormLabel>Departure City</FormLabel>
          <Input type="text" value={departureCity} onChange={(e) => setDepartureCity(e.target.value)} />
        </FormControl>
        <FormControl id="destination-city">
          <FormLabel>Destination City</FormLabel>
          <Input type="text" value={destinationCity} onChange={(e) => setDestinationCity(e.target.value)} />
        </FormControl>
        <FormControl id="departure-date">
          <FormLabel>Departure Date</FormLabel>
          <Input type="date" value={departureDate} onChange={(e) => setDepartureDate(e.target.value)} />
        </FormControl>
        <FormControl id="return-date">
          <FormLabel>Return Date</FormLabel>
          <Input type="date" value={returnDate} onChange={(e) => setReturnDate(e.target.value)} />
        </FormControl>
        <FormControl id="passengers">
          <FormLabel>Passengers</FormLabel>
          <Select value={passengers} onChange={(e) => setPassengers(e.target.value)}>
            {[...Array(10).keys()].map((num) => (
              <option key={num + 1} value={num + 1}>{num + 1}</option>
            ))}
          </Select>
        </FormControl>
        <Button colorScheme="teal" size="lg" onClick={handleSearch}>Search</Button>
      </VStack>
      {searchResults.length > 0 && (
        <Box mt={8} width="100%">
          <Heading as="h2" size="lg" mb={4}>Search Results</Heading>
          {searchResults.map((result) => (
            <Box key={result.id} p={4} borderWidth="1px" borderRadius="md" mb={4}>
              <HStack justifyContent="space-between">
                <Text>{result.airline}</Text>
                <Text>{result.price}</Text>
                <Text>{result.duration}</Text>
              </HStack>
            </Box>
          ))}
        </Box>
      )}
    </Container>
  );
};

export default FlightSearch;