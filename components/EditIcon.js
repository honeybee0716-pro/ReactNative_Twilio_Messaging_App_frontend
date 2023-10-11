import React from "react";
import { Image, Box } from "native-base";

const EditIcon = () => {

  return (<Box bg="rgba(93, 176, 117, 1)" justifyContent="center" alignItems="center" width={9} height={9} borderRadius="full">
     <Image size={6} source={require("../assets/images/edit.png")} alt="Alternate Text" />
  </Box>
   
  );
};
export default EditIcon;

