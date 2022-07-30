import { AuthProvider } from "src/contexts/Auth";
import { AppProvider } from "./App";
import { AxiosProvider } from "./Axios";
import { DataProvider } from "./Data";
import { UiProvider } from "./UI/ui";

const Contexts = ({ children }) => {
  return (
    <AuthProvider>
      <AxiosProvider>
        <AppProvider>
          <DataProvider>
            <UiProvider>{children}</UiProvider>
          </DataProvider>
        </AppProvider>
      </AxiosProvider>
    </AuthProvider>
  );
};

export default Contexts;
