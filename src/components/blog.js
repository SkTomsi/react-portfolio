import { BlogData } from "@/Shared/Data";
import styles from "@/styles/Blog.module.scss";
import Image from "next/image";
const Blog = () => {
  return (
    <div className={styles.blog}>
      <h1 data-aos="fade-up">Blog</h1>
      <div className={styles.blogGrid}>
        {BlogData.map((blog) => {
          return (
            <div
              className={styles.blogContainer}
              key={blog.id}
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <div>
                <div className={styles.blogImage}>
                  <Image src={blog.image} alt="blog" />
                </div>
                <div className={styles.blogHeader}>
                  <h3>{blog.title}</h3>
                  <p>{blog.date}</p>
                </div>
                <div className={styles.blogDescription}>
                  <p>{blog.desc}</p>
                </div>
              </div>
              <div className={styles.blogButton}>
                <a href={blog.link} target="_blank" rel="noreferrer">
                  Read More
                </a>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Blog;
