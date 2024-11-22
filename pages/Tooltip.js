import React, { useState } from 'react';
import { Box, Button, Center, Tooltip, Select, CheckIcon, HStack, VStack, Text } from 'native-base';

// Basic Tooltip Example
const BasicTooltip = () => {
  return (
    <Center>
      <Tooltip label="Click here to read more" openDelay={500}>
        <Button>More</Button>
      </Tooltip>
    </Center>
  );
};

// Tooltip Position Example
const TooltipPosition = () => {
  const [position, setPosition] = useState("top left");

  return (
    <VStack space={6} alignSelf="flex-start" w="100%">
      <Tooltip label={position} placement={position}>
        <Button alignSelf="center">ToolTip</Button>
      </Tooltip>

      <Select
        selectedValue={position}
        mx={{ base: 0, md: "auto" }}
        accessibilityLabel="Select a position for Tooltip"
        onValueChange={(nextValue) => setPosition(nextValue)}
        _selectedItem={{ bg: "cyan.600", endIcon: <CheckIcon size={4} /> }}
      >
        <Select.Item label="Top Left" value="top left" />
        <Select.Item label="Top" value="top" />
        <Select.Item label="Top Right" value="top right" />
        <Select.Item label="Right Top" value="right top" />
        <Select.Item label="Right" value="right" />
        <Select.Item label="Right Bottom" value="right bottom" />
        <Select.Item label="Bottom Left" value="bottom left" />
        <Select.Item label="Bottom" value="bottom" />
        <Select.Item label="Bottom Right" value="bottom right" />
        <Select.Item label="Left Top" value="left top" />
        <Select.Item label="Left" value="left" />
        <Select.Item label="Left Bottom" value="left bottom" />
      </Select>
    </VStack>
  );
};

// Customizing Tooltip Example
const CustomTooltip = () => {
  return (
    <Center>
      <Tooltip label="Click here to read more" openDelay={500} bg="indigo.500" _text={{ color: "#fff" }}>
        <Button>More</Button>
      </Tooltip>
    </Center>
  );
};

// Main Tooltip Example Component
const TooltipExample = () => {
  return (
    <Box w="100%" alignItems="center">
      <HStack space={8} justifyContent="center" wrap="wrap" w="100%">
        <Box alignItems="center">
          <Text fontSize="2xl" mb="4">Basic Tooltip</Text>
          <BasicTooltip />
        </Box>

        <Box alignItems="center">
          <Text fontSize="2xl" mb="4">Tooltip Position</Text>
          <TooltipPosition />
        </Box>

        <Box alignItems="center">
          <Text fontSize="2xl" mb="4">Custom Tooltip</Text>
          <CustomTooltip />
        </Box>
      </HStack>
    </Box>
  );
};

export default TooltipExample;
