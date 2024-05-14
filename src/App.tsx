import { LocalizationContextProvider } from "./context/_LocalizationContext.tsx"
import { AppRouter } from "./router/AppRouter.tsx"
import { StyleProvider } from "./styles/StyleProvider/StyleProvider.tsx"

function App() {
  return (
    <StyleProvider>                   <LocalizationContextProvider>
        <AppRouter />
                              </LocalizationContextProvider>
    </StyleProvider>
  )
}

export default App
