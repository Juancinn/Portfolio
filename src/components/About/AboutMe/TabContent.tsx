import styles from "./TabContent.module.css";
import Music from "./Music";

interface TabContentProps {
  activeTab: string | null;
}

const TabContent: React.FC<TabContentProps> = ({ activeTab }) => {
  switch (activeTab) {
    case "Music":
      return (
        <div className={styles.content}>
          <Music />
        </div>
      );
    case "ContentCreation":
      return (
        <div className={styles.content}>
          <h3>Content Creation</h3>
          <p>Content about content creation...</p>
        </div>
      );
    case "Volunteering":
      return (
        <div className={styles.content}>
          <h3>Volunteering</h3>
          <p>Content about volunteering...</p>
        </div>
      );
    default:
      return null;
  }
};

export default TabContent;
