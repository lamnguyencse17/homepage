import { Box } from "@chakra-ui/react";
import { m } from "framer-motion";

const AnimatedPage = ({ children }: { children: JSX.Element }) => {
  return (
    <Box
      as={m.div}
      key="works"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      height="100%"
      width="100%"
    >
      {children}
    </Box>
  );
};

export default AnimatedPage;
