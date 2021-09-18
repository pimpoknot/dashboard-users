import { Flex,  Button, Stack, } from '@chakra-ui/react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { Input } from '../components/Form/Input';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';


type SignInFormData = {
  email: string;
  password: string;
}


const signInFormSchema = yup.object().shape({
  email: yup.string().required('E-mail obrigatorio').email('E-mail invalido'),
  password: yup.string().required('Senha obrigatoria'),
})

export default function Home() {

  const { register, handleSubmit, formState } = useForm({
    resolver: yupResolver(signInFormSchema)
  })

  const  handleSignIn: SubmitHandler<SignInFormData> = async (value, event) => {
    
    await new Promise(resolve => setTimeout(resolve, 2000))
    console.log(value)

    const { errors } = formState

  }
  return (

    <Flex w="100vw" h="100vh" align="center" justify="center">
      <Flex as="form" width="100%" maxWidth={360} bg="gray.800" p="8" borderRadius={8} flexDir="column" onSubmit={handleSubmit(handleSignIn)}>

        <Stack spacing="4">
          <Input type="email" name="email" label="Email"  {...register('email')} error={formState.errors.email}/>
          <Input type="password" name="password" label="Senha" error={formState.errors.password} {...register('password')}  />
          

        </Stack>
        <Button
          size="lg"
          type="submit"
          mt="6"
          colorScheme="pink"
          required
          isLoading={formState.isSubmitting}
        >
          Entrar
        </Button>
      </Flex>
    </Flex>

  )
}


