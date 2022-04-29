import { useState } from 'react'
import { Container, Area, Header, Form } from './App.styles'
import { useForm } from "react-hook-form";
import { FormData } from './types/FormData'
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Alert from '@mui/material/Alert';

const App = () => {
  const { register, setValue, handleSubmit, formState: { errors } } = useForm<FormData>();
  const [data, setData] = useState<FormData>();
  const [alert, setAlert] = useState<boolean>(false)

  const handleSubmitForm = (data: FormData) => {
    setData(data)
    setAlert(true)
    console.log(data)
  }

  return (
    <Container>
      <Area>
        <Header>Teste Front-end Plataforma</Header>
        <Form onSubmit={handleSubmit(handleSubmitForm)}>
          <TextField {...register("nome", { required: true })} label="Nome" variant="outlined" className='input'/>
          {errors.nome && <span className='required'>O campo Nome é obrigatório</span>}

          <TextField {...register("dataInicial", { required: true })} label="Data inicial" variant="outlined" className='input'/>
          {errors.dataInicial && <span className='required'>O campo Data inicial é obrigatório</span>}

          <TextField {...register("dataFinal", { required: true })} label="Data final" variant="outlined" className='input'/>
          {errors.dataFinal && <span className='required'>O campo Data final é obrigatório</span>}

          <TextField {...register("infosPropriedade.id", { required: true })} label="ID propriedade" variant="outlined" className='input'/>
          {errors.infosPropriedade && <span className='required'>O campo ID propriedade é obrigatório</span>}

          <TextField {...register("infosPropriedade.nome", { required: true })} label="Nome propriedade" variant="outlined" className='input'/>
          {errors.infosPropriedade && <span className='required'>O campo Nome propriedade é obrigatório</span>}

          <TextField {...register("cnpj", { required: true })} label="CNPJ" variant="outlined" className='input'/>
          {errors.cnpj && <span className='required'>O campo CNPJ é obrigatório</span>}

          <TextField {...register("laboratorio.id", { required: true })} label="ID laboratório" variant="outlined" className='input'/>
          {errors.laboratorio && <span className='required'>O campo ID laboratório é obrigatório</span>}

          <TextField {...register("laboratorio.nome", { required: true })} label="Nome laboratório" variant="outlined" className='input'/>
          {errors.laboratorio && <span className='required'>O campo Nome laboratório é obrigatório</span>}

          <TextField {...register("observacoes", { required: true })} label="Observações" variant="outlined" className='input'/>
          {errors.observacoes && <span className='required'>O campo Observações é obrigatório</span>}
          <br/>
          <Button type="submit" variant="contained" className='button'>Enviar</Button>
        </Form>
        {alert && <><br /><Alert onClose={() => {setAlert(false)}} severity="success">Enviado com sucesso!</Alert></>}
      </Area>
    </Container>
  )
}

export default App