import { AuthProvider } from "./authProvider";
import FoldersProvider from "./foldersProvider";

export function Providers({ children }) {
  return (
    <AuthProvider>
      <FoldersProvider>{children}</FoldersProvider>
    </AuthProvider>
  );
}
