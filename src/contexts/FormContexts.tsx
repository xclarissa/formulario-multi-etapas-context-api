import { createContext, useContext, useReducer } from 'react';

interface IProviderProps {
  children: React.ReactNode;
}

interface IState {
  currentStep: number;
  name: string;
  level: 0 | 1;
  email: string;
  github: string;
}

interface IAction {
  type: FormActions;
  payload: any;
}

interface IContext {
  state: IState;
  dispatch: (action: IAction) => void
}

const initialData: IState = {
  currentStep: 0,
  name: '',
  level: 0,
  email: '',
  github: ''
}

export const FormContext = createContext<IContext | undefined>(undefined);

//Reducer
export enum FormActions {
  setCurrentStep,
  setName,
  setLevel,
  setEmail,
  setGithub
}


const formReducer = (state: IState, action: IAction) => {
  switch(action.type) {
    case FormActions.setCurrentStep:
      return { ...state, currentStep: action.payload }
    case FormActions.setName:
      return { ...state, name: action.payload }
    case FormActions.setLevel:
      return { ...state, level: action.payload }
    case FormActions.setEmail:
      return { ...state, email: action.payload }
    case FormActions.setGithub:
      return { ...state, github: action.payload }
    default:
      return state;
  }
}

//Provider
export const FormProvider = ({ children }: IProviderProps) => {
  //state = dados, dispatch = função usada para executar ações 
  const [state, dispatch] = useReducer(formReducer, initialData) //dois parametros (o reducer e os dados iniciais)
  const value = { state, dispatch }
  return(
    <FormContext.Provider value={value}>
      {children}
    </FormContext.Provider>
  )
};

// context hook
export const useForm = () => {
  const context = useContext(FormContext)
  if(context === undefined) {
    throw new Error('useForm precisa ser usado dentro do FormProvider')
  }
  return context;
}
