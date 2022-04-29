import Theme from '../../components/Theme';
import * as C from './styles';
import { Link, useNavigate } from 'react-router-dom';
import { useForm, FormActions } from '../../contexts/FormContexts';
import { ChangeEvent, useEffect } from 'react';

export const FormStep3 = () => {
  const navigate = useNavigate();
  const { state, dispatch } = useForm();

  const handleEmailChange = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch({
      type: FormActions.setEmail,
      payload: e.target.value
    });
  };

  const handleGithubChange = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch({
      type: FormActions.setGithub,
      payload: e.target.value
    });
  };

  // passo atual
  useEffect(() => {
    if (state.name === '') {
      navigate({ pathname: '/' });
    } else {
      dispatch({
        type: FormActions.setCurrentStep,
        payload: 3
      });
    }
  }, []);

  const handleNextStep = () => {
    if(state.email !== '' && state.github !== '') {
      console.log(state)
    } else {
      alert('Preencha os dados')
    }
  };

  return (
    <Theme>
      <C.Container>
        <p>Passo 3/3</p>
        <h1>Massa, {state.name}. Onde te achamos ? </h1>

        <hr />

        <label>
          Qual seu e-mail?
          <input type="email" value={state.email} onChange={handleEmailChange} />
        </label>

        <label>
          Qual seu Github?
          <input type="url" value={state.github} onChange={handleGithubChange} />
        </label>

        <Link to="/step2" className="backButton">
          {' '}
          Voltar{' '}
        </Link>
        <button onClick={handleNextStep}>Finalizar Cadastro</button>
      </C.Container>
    </Theme>
  );
};
