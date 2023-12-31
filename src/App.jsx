// Built-in Libraries
// Third-party Libraries
import {Box, ChakraProvider} from '@chakra-ui/react'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

// Pages
import Index from './pages/Index';
import Detail from './pages/Videos/Detail';
import Search from './pages/Search';
import NotFoundPage from './pages/Error/404';

function App() {
  return (
    <ChakraProvider>
      <Router>
        <Box minW="full" bg="gray.800" color="white">
          <Box px="4">
            <Switch>
              <Route path="/search" component={Search} />
              <Route path="/videos/:id" component={Detail} />
              <Route exact path="/" component={Index} />
              <Route component={NotFoundPage} />
            </Switch>
          </Box>
        </Box>
      </Router>
    </ChakraProvider>
  )
}

export default App
