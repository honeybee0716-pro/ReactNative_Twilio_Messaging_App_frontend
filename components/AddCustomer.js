import React from "react";
import { Box } from "native-base";
import { Ionicons } from "@expo/vector-icons";

const AddCustomer = () => {
  return (
    <Box
      bg="rgba(93, 176, 117, 1)"
      justifyContent="center"
      alignItems="center"
      width={55}
      height={55}
      borderRadius="full"
      borderColor="rgba(54, 63, 59, 0.3)"
      borderWidth={2}>
      <Ionicons name="md-person-add-outline" size={28} color="white" />
    </Box>
  );
};
export default AddCustomer;
