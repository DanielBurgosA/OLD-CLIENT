import {
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription,
} from "@chakra-ui/react";
export default function NoResult() {
  return (
    <div>
      <Alert
        status="error"
        variant="subtle"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        textAlign="center"
        height="200px"
      >
        <AlertIcon boxSize="40px" mr={0} />
        <AlertTitle mt={4} mb={1} fontSize="lg">
          There was an error processing your request
        </AlertTitle>
        <AlertDescription maxWidth="sm">
          Error: the entered project was not found, please verify that the data
          entered is correct.
        </AlertDescription>
      </Alert>
    </div>
  );
}
