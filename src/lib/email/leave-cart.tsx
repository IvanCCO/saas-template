import { Box, Flex } from '@chakra-ui/react';

import { ColorModeButton } from '@/components/ui/color-mode';

export const LeaveCart = () => {
  return (
    <Flex as="header" width="full" align="center">
      <Box marginLeft="auto">
        <ColorModeButton />
      </Box>
    </Flex>
  );
};
