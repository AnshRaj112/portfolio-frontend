import styles from "./styles/Skills.module.scss";

interface SkillProps {
  name: string;
  image: string;
}

const SkillItem = ({ name, image }: SkillProps) => {
  return (
    <div className={styles.skillItem}>
      <img src={image} alt={name} />
      <p>{name}</p>
    </div>
  );
};

export default SkillItem;
