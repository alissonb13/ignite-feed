import { Post } from "./components/Post";
import { Header } from "./components/Header";
import { Sidebar } from "./components/Sidebar";

import styles from "./App.module.css";
import "./global.css";

const posts = [
  {
    id: crypto.randomUUID(),
    author: {
      role: "Senior Software Engineer",
      name: "Alisson William Mendes Boucinhas",
      avatarUrl: "https://github.com/alissonb13.png",
    },
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi et arcu venenatis, egestas ligula in, blandit est. In hac habitasse platea dictumst. Duis aliquam eros lectus. Sed ultricies felis mi, vitae bibendum nisi molestie ac. Duis bibendum odio sed ornare imperdiet. Fusce nunc purus, dictum eu imperdiet sit amet, volutpat ac enim. Curabitur blandit malesuada nisl vel auctor. Quisque vitae risus ac quam sagittis imperdiet. Mauris fringilla malesuada mauris eget venenatis. Nulla vel auctor magna.",
    publishedAt: new Date("2023-05-18 20:31:45"),
  },
  {
    id: crypto.randomUUID(),
    author: {
      role: "Senior Software Engineer",
      name: "Alisson William Mendes Boucinhas",
      avatarUrl: "https://github.com/alissonb13.png",
    },
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi et arcu venenatis, egestas ligula in, blandit est. In hac habitasse platea dictumst. Duis aliquam eros lectus. Sed ultricies felis mi, vitae bibendum nisi molestie ac. Duis bibendum odio sed ornare imperdiet. Fusce nunc purus, dictum eu imperdiet sit amet, volutpat ac enim. Curabitur blandit malesuada nisl vel auctor. Quisque vitae risus ac quam sagittis imperdiet. Mauris fringilla malesuada mauris eget venenatis. Nulla vel auctor magna.",
    publishedAt: new Date("2022-06-10 21:57:49"),
  },
];

export function App() {
  return (
    <div>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {posts.map((post) => {
            return (
              <Post
                key={post.id}
                author={post.author}
                content={post.content}
                publishedAt={post.publishedAt}
              />
            );
          })}
        </main>
      </div>
    </div>
  );
}
