import React, { useState, useRef } from 'react';
import { Box, Button, Popover, FormControl, Input, HStack, Select, CheckIcon, Text } from 'native-base';

// Main Popover Example Component
const PopoverExample = () => {
  return (
    <Box w="100%" alignItems="center">
      <HStack space={8} wrap="wrap" justifyContent="center">
        <Box alignItems="center">
          <Text fontSize="2xl" mb="4">Basic Popover</Text>
          <BasicPopover />
        </Box>

        <Box alignItems="center">
          <Text fontSize="2xl" mb="4">Popover Position</Text>
          <PopoverPosition />
        </Box>
      </HStack>
    </Box>
  );
};

// 1. Basic Popover Example
const BasicPopover = () => {
  return (
    <Popover trigger={(triggerProps) => {
      return <Button {...triggerProps} colorScheme="danger">Delete Customer</Button>;
    }}>
      <Popover.Content accessibilityLabel="Delete Customer" w="56">
        <Popover.Arrow />
        <Popover.CloseButton />
        <Popover.Header>Delete Customer</Popover.Header>
        <Popover.Body>
          This will remove all data relating to Alex. This action cannot be reversed. Deleted data can not be recovered.
        </Popover.Body>
        <Popover.Footer justifyContent="flex-end">
          <Button.Group space={2}>
            <Button colorScheme="coolGray" variant="ghost">Cancel</Button>
            <Button colorScheme="danger">Delete</Button>
          </Button.Group>
        </Popover.Footer>
      </Popover.Content>
    </Popover>
  );
};


// 3. Popover Position Example
const PopoverPosition = () => {
  const [position, setPosition] = useState("auto");
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Box w="100%" alignItems="center">
      <HStack space={6} wrap="wrap" justifyContent="center" w="100%">
        <Popover
          placement={position === "auto" ? undefined : position}
          trigger={(triggerProps) => {
            return (
              <Button
                colorScheme="danger"
                alignSelf="center"
                {...triggerProps}
                onPress={() => setIsOpen(true)}
              >
                Delete Customer
              </Button>
            );
          }}
          isOpen={isOpen}
          onClose={() => setIsOpen(!isOpen)}
        >
          <Popover.Content w="56">
            <Popover.Arrow />
            <Popover.CloseButton onPress={() => setIsOpen(false)} />
            <Popover.Header>Delete Customer</Popover.Header>
            <Popover.Body>
              This will remove all data relating to Alex. This action cannot be reversed. Deleted data can not be recovered.
            </Popover.Body>
            <Popover.Footer justifyContent="flex-end">
              <Button.Group space={2}>
                <Button colorScheme="coolGray" variant="ghost" onPress={() => setIsOpen(false)}>Cancel</Button>
                <Button colorScheme="danger" onPress={() => setIsOpen(false)}>Delete</Button>
              </Button.Group>
            </Popover.Footer>
          </Popover.Content>
        </Popover>

        <Select
          selectedValue={position}
          mx={{ base: 0, md: "auto" }}
          accessibilityLabel="Select a position for Popover"
          onValueChange={(nextValue) => setPosition(nextValue)}
          _selectedItem={{ bg: "cyan.600", endIcon: <CheckIcon size={4} /> }}
        >
          <Select.Item label="auto" value="auto" />
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
      </HStack>
    </Box>
  );
};

export default PopoverExample;
