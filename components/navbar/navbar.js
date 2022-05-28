import React from "react";
import Link from "next/link";
import styles from './navbar.module.css'

const Navbar = () => {
    return ( 
        <nav className={styles.navbar}>
            <Link href="/">
                <a> Home </a>
            </Link>
            <Link href="add">
                <a> Add (Post) </a>
            </Link>
            <Link href="listes">
                <a> List </a>
            </Link>
            <Link href="movies">
                <a> movies </a>
            </Link>
            <Link href="cours">
                <a> Btc</a>
            </Link>

        </nav>
    );
}

export default Navbar;