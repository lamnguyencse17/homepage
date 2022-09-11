import { useCallback, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  FormErrorMessage,
  FormLabel,
  FormControl,
  Input,
  Button,
  Textarea,
  Flex,
  Box,
  Heading,
  useToast,
} from "@chakra-ui/react";
import {
  GoogleReCaptchaProvider,
  GoogleReCaptcha,
} from "react-google-recaptcha-v3";
import {
  ContactFormInputs,
  ContactFormSchema,
} from "../libs/validations/contact";
import Head from "next/head";
import axios from "axios";

const Contact = () => {
  const [token, setToken] = useState<string | null>(null);
  const [refreshReCaptcha, setRefreshReCaptcha] = useState(false);
  const {
    handleSubmit,
    register,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormInputs>({
    resolver: zodResolver(ContactFormSchema),
  });
  const toast = useToast();
  const onVerify = useCallback((token: string) => {
    setToken(token);
  }, []);

  const onSubmit: SubmitHandler<ContactFormInputs> = async (values) => {
    try {
      const { data, status } = await axios.post<{ message: string }>(
        "/api/contact",
        {
          ...values,
          token,
        }
      );
      if (status === 200) {
        toast({
          title: data.message,
          status: "success",
          duration: 5000,
          isClosable: true,
        });
      } else {
        toast({
          title: data.message,
          status: "error",
          duration: 5000,
          isClosable: true,
        });
      }
    } catch (err) {
      toast({
        title: "Something went wrong",
        status: "error",
        duration: 5000,
        isClosable: true,
      });
    }

    setRefreshReCaptcha((r) => !r);
  };

  if (!process.env.NEXT_PUBLIC_CAPTCHA) {
    return <></>;
  }

  return (
    <>
      <Head>
        <title>Nguyen Quang Lam - Contact</title>
      </Head>
      <Flex
        height="100%"
        width="100%"
        direction="column"
        gap={2}
        padding="5"
        paddingTop="10rem"
        alignItems="center"
        overflowY="auto"
      >
        <Heading>Contact</Heading>
        <GoogleReCaptchaProvider reCaptchaKey={process.env.NEXT_PUBLIC_CAPTCHA}>
          <GoogleReCaptcha
            onVerify={onVerify}
            refreshReCaptcha={refreshReCaptcha}
          />
          <Box width="100%">
            <form onSubmit={handleSubmit(onSubmit)}>
              <Flex direction="column" alignItems="center">
                <FormControl
                  isInvalid={
                    !!errors.name || !!errors.content || !!errors.email
                  }
                >
                  <FormLabel htmlFor="name">Name</FormLabel>
                  <Input id="name" placeholder="name" {...register("name")} />
                  <FormErrorMessage>
                    {errors.name && errors.name.message}
                  </FormErrorMessage>
                  <FormLabel htmlFor="email">Email</FormLabel>
                  <Input
                    id="email"
                    placeholder="email"
                    {...register("email")}
                  />
                  <FormErrorMessage>
                    {errors.email && errors.email.message}
                  </FormErrorMessage>
                  <FormLabel htmlFor="content">Content</FormLabel>
                  <Textarea
                    id="content"
                    placeholder="content"
                    {...register("content")}
                  />
                  <FormErrorMessage>
                    {errors.content && errors.content.message}
                  </FormErrorMessage>
                </FormControl>
                <Button
                  mt={4}
                  marginX="auto"
                  colorScheme="pink"
                  isLoading={isSubmitting}
                  type="submit"
                >
                  Submit
                </Button>
              </Flex>
            </form>
          </Box>
        </GoogleReCaptchaProvider>
      </Flex>
    </>
  );
};

export default Contact;
