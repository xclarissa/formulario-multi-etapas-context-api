import { FormProvider } from './contexts/FormContexts'
import { Router } from './router'

function App() {
  
  return (
    <FormProvider>
      <Router />
    </FormProvider>
  )
}

export default App
