import styles from "./Layout.module.css";

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <div className="flex min-h-screen bg-color-secondary">
            <div className="m-auto bg-color-accent rounded-md w-3/5 h-5/6 grid md:grid-cols-2 shadow-lg">
                <div className={styles.imgStyle}>
                    <div className={styles.cartoonImg}></div>
                    <div className={styles.itemOne}></div>
                    <div className={styles.itemTwo}></div>
                </div>
                <div className="flex flex-col justify-evenly">
                    <div className="text-center py-10">{children}</div>
                </div>
            </div>
        </div>
    )
}