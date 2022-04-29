import Theme from "../../components/Theme";
import * as C from './styles';
import { useNavigate } from "react-router-dom"; 
import { useForm, FormActions } from "../../contexts/FormContexts";
import { ChangeEvent, useEffect } from "react";

export const FormStep1 = () => {
  const navigate = useNavigate();
  const { state, dispatch } = useForm();

  const handleNameChange = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch({
      type: FormActions.setName,
      payload: e.target.value
    })
  }

  // passo atual
  useEffect(() => {
    dispatch({
      type: FormActions.setCurrentStep,
      payload: 1
    })
  }, []) 

  const handleNextStep = () => {
    if(state.name !== '') {
      navigate({pathname: '/step2'})  
    } else {
      alert('Preencha os dados')
    }
  }

  return (
    <Theme>
      <C.Container>
        <p>Passo 1/3</p>
        <h1>Vamos começar com o seu nome</h1>
        <p>Preencha o campo abaixo com seu nome completo</p>

        <hr />

        <label>
          Seu nome completo: 
          <input
            value={state.name}
            onChange={handleNameChange}
            type="text" 
            autoFocus 
          />
        </label>

        <button onClick={handleNextStep}>Próximo</button>
      </C.Container>
    </Theme>
  )
};

