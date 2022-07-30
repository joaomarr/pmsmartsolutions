import { Header } from './Header';
import { Hero } from './Hero';
import { createContext, useState} from 'react';
import { NavMenu } from './NavMenu';
import { Footer } from './Footer';

export const MenuContext = createContext();

export function Layout({children}) {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
      <main className="relative">
        <MenuContext.Provider value={[isMenuOpen, setIsMenuOpen]}>
          <Header />
          {isMenuOpen ? (<NavMenu />) : ("")}
          <Hero />
          {children}
          <Footer />
        </MenuContext.Provider>
      </main>
    );
}