import { Stack, Input, Textarea, Button, Flex } from "@chakra-ui/react";
import React from "react";

type TextInputsProps = {};

const TextInputs: React.FC<TextInputsProps> = () => {
  return (
    <Stack spacing={3} width="100%">
      <Input
        name="title"
        // value={}
        // onChange={}
        fontSize="10pt"
        borderRadius={4}
        placeholder="Title"
        _placeholder={{ color: "gray.500" }}
        _focus={{
          outline: "none",
          bg: "white",
          border: "1px solid",
          borderColor: "black",
        }}
      />
      <Textarea
        name="body"
        fontSize="10pt"
        borderRadius={4}
        height="100px"
        placeholder="Text (optional)"
        _placeholder={{ color: "gray.500" }}
        _focus={{
          outline: "none",
          bg: "white",
          border: "1px solid",
          borderColor: "black",
        }}
      />
      <Flex justify="flex-end">
        <Button
          height="34px"
          padding="0px 30px"
          disabled={false}
          onClick={() => {}}
        >
          Post
        </Button>
      </Flex>
    </Stack>
  );
};
export default TextInputs;
