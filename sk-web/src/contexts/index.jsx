import { AuthProvider } from "src/contexts/Auth";
import { AppProvider } from "./App";
import { AxiosProvider } from "./Axios";
import { DataProvider } from "./Data";
import { TranslateProvider } from "./Translate";
import { UiProvider } from "./UI/ui";

const Contexts = ({ children }) => {
  return (
    <TranslateProvider>
      <AuthProvider>
        <AxiosProvider>
          <AppProvider>
            <DataProvider>
              <UiProvider>{children}</UiProvider>
            </DataProvider>
          </AppProvider>
        </AxiosProvider>
      </AuthProvider>
    </TranslateProvider>
  );
};

export default Contexts;
