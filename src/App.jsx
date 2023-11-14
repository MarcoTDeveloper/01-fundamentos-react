import { Post } from "./Post"
import { Header } from "./components/header";

import styles from './App.module.css';

import './global.css';
import { Sidebar } from "./components/Sidebar";

export function App() {

  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
        <main>
        <Post 
          author="Marco Túlio" 
          content="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cum iure quibusdam iste perspiciatis officiis consequuntur iusto doloribus modi temporibus id, aspernatur tempora ducimus beatae? Ad delectus adipisci repellendus ipsa magnam."
        />
        <Post
          author="João Marcelo"
          content="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sapiente nihil voluptatibus inventore harum magni repellat error enim molestiae perferendis vero, voluptas, impedit fugiat exercitationem fuga aliquid neque sint reiciendis illum?"
        />
        </main>
      </div>
    </div>
  );
}