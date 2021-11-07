import { Link, Text } from "@chakra-ui/layout";
import * as React from "react";
import {
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription,
} from "@chakra-ui/alert";
import { Button } from "@chakra-ui/button";

//change status to change color- use "info, error, success, warning"
//change display to "hide" or "flex"

const AlertBanner = () => {
  return (
    <Alert
      position="absolute"
      height='60px'
      top="89px"
      maxW="7xl"
      borderTopRadius={{xl:'10px', lg:0}}
      display="flex"
      bg="#00000070"
    >
      <AlertIcon color='#fff' />
      <Text color='#fff'>New wallet update 🎉 </Text>
      <Link>
        <Button size="sm" position="absolute" right='12px' top="8px" bg="#00000080" color='#fff' className='rgb' marginTop='5px'>
          Download
        </Button>
      </Link>
    </Alert>
  );
};

export default AlertBanner;
