import styles from "./styles/Research.module.scss";

interface Props {
  title: string;
  coverImage: string;
  paperLink: string;
}

const ResearchItem = ({ title, coverImage, paperLink }: Props) => {
  return (
    <div className={styles.researchCard}>
      <img src={coverImage} alt={title} className={styles.coverImage} />
      <h3>{title}</h3>
      <a href={paperLink} target="_blank" rel="noopener noreferrer">
        <button>View Paper</button>
      </a>
    </div>
  );
};

export default ResearchItem;
