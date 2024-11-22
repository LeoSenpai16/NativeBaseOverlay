import React, { useState, useRef } from 'react';
import { Button, Modal, FormControl, Input, VStack, HStack, Text, Radio, ScrollView, Center, Stack } from 'native-base';

const ModalExample = () => {
  return (
    <Center>
      <VStack space={8}>
        <Text fontSize="2xl" mb="4">Basic Modal</Text>
        <BasicModal />
        <Text fontSize="2xl" mb="4">Multiple Modals</Text>
        <MultipleModals />
        <Text fontSize="2xl" mb="4">Modal Sizes</Text>
        <ModalSizes />
        <Text fontSize="2xl" mb="4">Initial and Final Focus Ref</Text>
        <ModalFocusRef />
        <Text fontSize="2xl" mb="4">Modal with Avoid Keyboard</Text>
        <ModalAvoidKeyboard />
        <Text fontSize="2xl" mb="4">Modal Placement</Text>
        <ModalPlacement />
        <Text fontSize="2xl" mb="4">Custom Backdrop Modal</Text>
        <CustomBackdropModal />
      </VStack>
    </Center>
  );
};

// 1. Basic Modal Example
const BasicModal = () => {
  const [showModal, setShowModal] = useState(false);
  return (
    <>
      <Button onPress={() => setShowModal(true)}>Open Modal</Button>
      <Modal isOpen={showModal} onClose={() => setShowModal(false)}>
        <Modal.Content maxWidth="400px">
          <Modal.CloseButton />
          <Modal.Header>Contact Us</Modal.Header>
          <Modal.Body>
            <FormControl>
              <FormControl.Label>Name</FormControl.Label>
              <Input />
            </FormControl>
            <FormControl mt="3">
              <FormControl.Label>Email</FormControl.Label>
              <Input />
            </FormControl>
          </Modal.Body>
          <Modal.Footer>
            <Button.Group space={2}>
              <Button variant="ghost" colorScheme="blueGray" onPress={() => setShowModal(false)}>
                Cancel
              </Button>
              <Button onPress={() => setShowModal(false)}>Save</Button>
            </Button.Group>
          </Modal.Footer>
        </Modal.Content>
      </Modal>
    </>
  );
};

// 2. Multiple Modals Example
const MultipleModals = () => {
  const [showModal, setShowModal] = useState(false);
  const [showModal2, setShowModal2] = useState(false);
  const [showModal3, setShowModal3] = useState(false);

  return (
    <>
      <Button onPress={() => setShowModal(true)}>Open Modal</Button>
      <Modal isOpen={showModal} onClose={() => setShowModal(false)} size="lg">
        <Modal.Content maxWidth="350">
          <Modal.CloseButton />
          <Modal.Header>Order</Modal.Header>
          <Modal.Body>
            <VStack space={3}>
              <HStack alignItems="center" justifyContent="space-between">
                <Text fontWeight="medium">Sub Total</Text>
                <Text color="blueGray.400">$298.77</Text>
              </HStack>
              <HStack alignItems="center" justifyContent="space-between">
                <Text fontWeight="medium">Tax</Text>
                <Text color="blueGray.400">$38.84</Text>
              </HStack>
              <HStack alignItems="center" justifyContent="space-between">
                <Text fontWeight="medium">Total Amount</Text>
                <Text color="green.500">$337.61</Text>
              </HStack>
            </VStack>
          </Modal.Body>
          <Modal.Footer>
            <Button flex="1" onPress={() => setShowModal2(true)}>Continue</Button>
          </Modal.Footer>
        </Modal.Content>
      </Modal>

      <Modal isOpen={showModal2} onClose={() => setShowModal2(false)} size="lg">
        <Modal.Content maxWidth="350">
          <Modal.CloseButton />
          <Modal.Header>Select Address</Modal.Header>
          <Modal.Body>
            <Radio.Group defaultValue="address1" name="address" size="sm">
              <VStack space={3}>
                <Radio value="address1">4140 Parker Rd. Allentown, New Mexico 31134</Radio>
                <Radio value="address2">6391 Elign St. Celina, Delaware 10299</Radio>
              </VStack>
            </Radio.Group>
          </Modal.Body>
          <Modal.Footer>
            <Button flex="1" onPress={() => setShowModal3(true)}>Continue</Button>
          </Modal.Footer>
        </Modal.Content>
      </Modal>

      <Modal isOpen={showModal3} size="lg" onClose={() => setShowModal3(false)}>
        <Modal.Content maxWidth="350">
          <Modal.CloseButton />
          <Modal.Header>Payment Options</Modal.Header>
          <Modal.Body>
            <Radio.Group name="payment" size="sm">
              <VStack space={3}>
                <Radio value="payment1">Cash on delivery</Radio>
                <Radio value="payment2">Credit/ Debit/ ATM Card</Radio>
                <Radio value="payment3">UPI</Radio>
              </VStack>
            </Radio.Group>
          </Modal.Body>
          <Modal.Footer>
            <Button flex="1" onPress={() => {setShowModal(false); setShowModal2(false); setShowModal3(false);}}>
              Checkout
            </Button>
          </Modal.Footer>
        </Modal.Content>
      </Modal>
    </>
  );
};

// 3. Modal Sizes Example
const ModalSizes = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [size, setSize] = useState("md");

  const handleSizeClick = newSize => {
    setSize(newSize);
    setModalVisible(!modalVisible);
  };

  return (
    <>
      <Modal isOpen={modalVisible} onClose={setModalVisible} size={size}>
        <Modal.Content maxH="212">
          <Modal.CloseButton />
          <Modal.Header>Return Policy</Modal.Header>
          <Modal.Body>
            <Text>
              Create a 'Return Request' under “My Orders” section of App/Website. Follow the screens that come up after tapping on the 'Return’ button.
            </Text>
          </Modal.Body>
          <Modal.Footer>
            <Button.Group space={2}>
              <Button variant="ghost" colorScheme="blueGray" onPress={() => setModalVisible(false)}>Cancel</Button>
              <Button onPress={() => setModalVisible(false)}>Save</Button>
            </Button.Group>
          </Modal.Footer>
        </Modal.Content>
      </Modal>
      <Center>
        <VStack space={4}>
          {["xs", "sm", "md", "lg", "xl", "full"].map(size => {
            return <Button onPress={() => handleSizeClick(size)} key={size}>{`Open ${size} Modal`}</Button>;
          })}
        </VStack>
      </Center>
    </>
  );
};

// 4. Initial and Final Focus Ref Example
const ModalFocusRef = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const initialRef = useRef(null);
  const finalRef = useRef(null);

  return (
    <>
      <Modal isOpen={modalVisible} onClose={() => setModalVisible(false)} initialFocusRef={initialRef} finalFocusRef={finalRef}>
        <Modal.Content>
          <Modal.CloseButton />
          <Modal.Header>Contact Us</Modal.Header>
          <Modal.Body>
            <FormControl>
              <FormControl.Label>Name</FormControl.Label>
              <Input ref={initialRef} />
            </FormControl>
            <FormControl mt="3">
              <FormControl.Label>Email</FormControl.Label>
              <Input />
            </FormControl>
          </Modal.Body>
          <Modal.Footer>
            <Button.Group space={2}>
              <Button variant="ghost" colorScheme="blueGray" onPress={() => setModalVisible(false)}>Cancel</Button>
              <Button onPress={() => setModalVisible(false)}>Save</Button>
            </Button.Group>
          </Modal.Footer>
        </Modal.Content>
      </Modal>
      <HStack space="4" justifyContent="center" alignItems="center">
        <Button onPress={() => setModalVisible(!modalVisible)}>Open Modal</Button>
        <Input w="32" ref={finalRef} placeholder="Enter the OTP" />
      </HStack>
    </>
  );
};

// 5. Modal with Avoid Keyboard Example
const ModalAvoidKeyboard = () => {
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <>
      <Modal isOpen={modalVisible} onClose={() => setModalVisible(false)} avoidKeyboard justifyContent="flex-end" bottom="4" size="lg">
        <Modal.Content>
          <Modal.CloseButton />
          <Modal.Header>Forgot Password?</Modal.Header>
          <Modal.Body>
            <Text>Enter email address and we'll send a link to reset your password.</Text>
            <FormControl mt="3">
              <FormControl.Label>Email</FormControl.Label>
              <Input />
            </FormControl>
          </Modal.Body>
          <Modal.Footer>
            <Button flex="1" onPress={() => setModalVisible(false)}>
              Send Reset Link
            </Button>
          </Modal.Footer>
        </Modal.Content>
      </Modal>
      <Button onPress={() => setModalVisible(true)}>Forgot Password?</Button>
    </>
  );
};

// 6. Modal Placement Example
const ModalPlacement = () => {
    const [placement, setPlacement] = useState(undefined);
  const [open, setOpen] = useState(false);
  const openModal = placement => {
    setOpen(true);
    setPlacement(placement);
  };

  return <>
      <Stack direction={{
      base: "column",
      md: "row"
    }} space={2}>
        <Button onPress={() => openModal("top")}>Top</Button>
        <Button onPress={() => openModal("bottom")}>Bottom</Button>
        <Button onPress={() => openModal("center")}>Center</Button>
        <Button onPress={() => openModal("left")}>Left</Button>
        <Button onPress={() => openModal("right")}>Right</Button>
      </Stack>
      <Modal isOpen={open} onClose={() => setOpen(false)} safeAreaTop={true}>
        <Modal.Content maxWidth="350" {...styles[placement]}>
          <Modal.CloseButton />
          <Modal.Header>Contact Us</Modal.Header>
          <Modal.Body>
            <FormControl>
              <FormControl.Label>Name</FormControl.Label>
              <Input />
            </FormControl>
            <FormControl mt="3">
              <FormControl.Label>Email</FormControl.Label>
              <Input />
            </FormControl>
          </Modal.Body>
          <Modal.Footer>
            <Button.Group space={2}>
              <Button variant="ghost" colorScheme="blueGray" onPress={() => {
              setOpen(false);
            }}>
                Cancel
              </Button>
              <Button onPress={() => {
              setOpen(false);
            }}>
                Save
              </Button>
            </Button.Group>
          </Modal.Footer>
        </Modal.Content>
      </Modal>
    </>;
};

const styles = {
  top: {
    marginBottom: "auto",
    marginTop: 0
  },
  bottom: {
    marginBottom: 0,
    marginTop: "auto"
  },
  left: {
    marginLeft: 0,
    marginRight: "auto"
  },
  right: {
    marginLeft: "auto",
    marginRight: 0
  },
  center: {}
};

// 7. Custom Backdrop Modal Example
const CustomBackdropModal = () => {
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <>
      <Modal isOpen={modalVisible} onClose={() => setModalVisible(false)} avoidKeyboard backdrop>
        <Modal.Content>
          <Modal.CloseButton />
          <Modal.Header>Custom Modal</Modal.Header>
          <Modal.Body>
            <Text>This modal has a custom backdrop</Text>
          </Modal.Body>
          <Modal.Footer>
            <Button onPress={() => setModalVisible(false)}>Close</Button>
          </Modal.Footer>
        </Modal.Content>
      </Modal>
      <Button onPress={() => setModalVisible(true)}>Open Custom Modal</Button>
    </>
  );
};

export default ModalExample;
