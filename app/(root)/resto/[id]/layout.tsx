import { DetailProvider } from "@/hooks/useDetails";

export default function RootLayout({ children }: {children: React.ReactNode }) {
    return <DetailProvider>{children}</DetailProvider>
}