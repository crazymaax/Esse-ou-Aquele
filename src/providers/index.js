import { CatProvider } from "./cat";

const Providers = ({ children }) => {
    return (
        <CatProvider>
            {children}
        </CatProvider>
    );
};
export default Providers;