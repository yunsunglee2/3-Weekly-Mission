import { AuthProvider } from "./authProvider"

export function Providers({children}) {
    return (
        <AuthProvider>
            {children}
        </AuthProvider>
    )
}