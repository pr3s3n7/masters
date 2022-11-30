import {AppProps} from "next/app";
import "./global.scss"
import Layout from "../components/Layout";
import Store from "../store/Store";
import {createContext} from "react";

interface State {
    store: Store
}

const store = new Store()

export const Context = createContext<State>({
    store
})

const App = ({ Component, pageProps }: AppProps) => {
    return <Context.Provider value={{store}}>
        <Layout>
            <Component {...pageProps} />
        </Layout>
    </Context.Provider>
        // Do ColorMode state in mobx storage!
}

export default App
