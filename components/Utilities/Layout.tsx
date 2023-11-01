import styles from './style.module.css';
import { motion } from 'framer-motion';

const anim = {
    initial: {
        opacity: 0
    },
    open: {
        opacity: 1
    },
    exit: {
        opacity: 0
    }
}

export default function Layout({ menuIsActive }: { menuIsActive: boolean }) {
    return (
        <motion.div
            className={styles.menu}
            variants={anim}
            initial="initial"
            animate={menuIsActive ? "open" : "closed"}
        >
            <p>Home</p>
            <p>About</p>
            <p>Contact</p>
        </motion.div>
    )
}