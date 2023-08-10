// Built-in Libraries
// Third-party Libraries
import {Box, ChakraProvider} from '@chakra-ui/react'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

// Component
import Header from './components/Header';

// Pages
import Index from './pages/Index';
import Detail from './pages/Videos/Detail';
import Search from './pages/Search';

function App() {
  return (
    <ChakraProvider>
      <Router>
        <Box minW="full" bg="gray.800" color="white">
          <Header />
          <Box px="4" pb="4">
            <Switch>
              <Route path="/search" component={Search} />
              <Route path="/detail" component={Detail} />
              <Route path="/" component={Index} />
            </Switch>
          </Box>
        </Box>
      </Router>
    </ChakraProvider>
  )
}

export default App
