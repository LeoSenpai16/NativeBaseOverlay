import React from 'react';
import { Box, Menu, Pressable, HamburgerIcon, Divider, Button, VStack, Select, CheckIcon, Heading } from 'native-base';

const CustomMenu = () => {
  const [position, setPosition] = React.useState("auto"); // Estado para almacenar la posición seleccionada

  return (
    <Box w="100%" alignItems="center">
      {/* Contenedor para los menús alineados horizontalmente */}
      <Box flexDirection="row" justifyContent="space-around" w="100%" alignItems="center">
        
        {/* Ejemplo 1: Menú simple */}
        <Box>
          <Heading mb={4} size="md">
            Simple Menu
          </Heading>
          <Menu
            w="190"
            trigger={(triggerProps) => {
              return (
                <Pressable accessibilityLabel="More options menu" {...triggerProps}>
                  <HamburgerIcon />
                </Pressable>
              );
            }}
          >
            <Menu.Item>Arial</Menu.Item>
            <Menu.Item>Nunito Sans</Menu.Item>
            <Menu.Item>Roboto</Menu.Item>
            <Menu.Item>Poppins</Menu.Item>
            <Menu.Item>SF Pro</Menu.Item>
            <Menu.Item>Helvetica</Menu.Item>
            <Menu.Item isDisabled>Sofia</Menu.Item>
            <Menu.Item>Cookie</Menu.Item>
          </Menu>
        </Box>

        {/* Separación entre los menús */}
        <Divider orientation="vertical" my={6} h="60%" />

        {/* Ejemplo 2: Menú con grupos */}
        <Box>
          <Heading mb={4} size="md">
            Grouped Menu
          </Heading>
          <Menu
            w="190"
            trigger={(triggerProps) => {
              return (
                <Pressable accessibilityLabel="Grouped options menu" {...triggerProps}>
                  <HamburgerIcon />
                </Pressable>
              );
            }}
          >
            {/* Grupo de opciones gratuitas */}
            <Menu.Group title="Free">
              <Menu.Item>Arial</Menu.Item>
              <Menu.Item>Nunito Sans</Menu.Item>
              <Menu.Item>Roboto</Menu.Item>
            </Menu.Group>
            {/* Divisor entre los grupos */}
            <Divider mt="3" w="100%" />
            {/* Grupo de opciones de pago */}
            <Menu.Group title="Paid">
              <Menu.Item>SF Pro</Menu.Item>
              <Menu.Item>Helvetica</Menu.Item>
            </Menu.Group>
          </Menu>
        </Box>

        {/* Separación entre los menús */}
        <Divider orientation="vertical" my={6} h="60%" />

        {/* Ejemplo 3: Menú con opciones seleccionables (radio y checkbox) */}
        <Box>
          <Heading mb={4} size="md">
            Option Menu
          </Heading>
          <Menu
            closeOnSelect={false}
            w="190"
            onOpen={() => console.log("opened")}
            onClose={() => console.log("closed")}
            trigger={(triggerProps) => {
              return (
                <Pressable {...triggerProps}>
                  <HamburgerIcon />
                </Pressable>
              );
            }}
          >
            {/* Grupo de opciones con radio buttons */}
            <Menu.OptionGroup defaultValue="Arial" title="Free" type="radio">
              <Menu.ItemOption value="Arial">Arial</Menu.ItemOption>
              <Menu.ItemOption value="Nunito Sans">Nunito Sans</Menu.ItemOption>
              <Menu.ItemOption value="Roboto">Roboto</Menu.ItemOption>
            </Menu.OptionGroup>
            <Divider mt="3" w="100%" />
            {/* Grupo de opciones con checkboxes */}
            <Menu.OptionGroup title="Paid" type="checkbox">
              <Menu.ItemOption value="SF Pro">SF Pro</Menu.ItemOption>
              <Menu.ItemOption value="Helvetica">Helvetica</Menu.ItemOption>
            </Menu.OptionGroup>
          </Menu>
        </Box>
      </Box>

      {/* Ejemplo 4: Menú con Posicionamiento (Alineado al centro abajo de los otros) */}
      <Box mt={10}>
        <Heading mb={4} size="md">
          Positioned Menu
        </Heading>
        <VStack space={6} alignSelf="center" w="80%" alignItems="center">
          <Menu
            w="160"
            shouldOverlapWithTrigger={false} // Evita que se superpongan
            placement={position} // Utiliza la posición seleccionada en el select
            trigger={(triggerProps) => {
              return (
                <Button alignSelf="center" variant="solid" {...triggerProps}>
                  Menu
                </Button>
              );
            }}
          >
            {/* Opciones del menú */}
            <Menu.Item>Arial</Menu.Item>
            <Menu.Item>Nunito Sans</Menu.Item>
            <Menu.Item>Roboto</Menu.Item>
          </Menu>

          {/* Selector de posición para el menú */}
          <Select
            selectedValue={position}
            mx={{ base: 0, md: "auto" }}
            onValueChange={(nextValue) => setPosition(nextValue)} // Cambia la posición del menú
            _selectedItem={{ bg: "cyan.600", endIcon: <CheckIcon size={4} /> }}
            accessibilityLabel="Select a position for Menu"
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
        </VStack>
      </Box>
    </Box>
  );
};

export default CustomMenu;
