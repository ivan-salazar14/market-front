import Link from "next/link"
import styles from './header.module.css'
const Links = [{
    label: "Home",
    route: "/"
  },
  {
    label: "Login",
    route: "/login"  
  },{
    label: "Productos",
    route: "/products"  
  }]

export function Header(){
 return (
 <header className={styles.header}>
  <nav>
    <ul className={styles.navigation}>
     {Links.map(({label,route}) =>(
      <li key={route}>
        <Link href={route}>
          {label}
        </Link>
        </li>
     ))}
    </ul>
  </nav>
</header>
 );
};