import styles from '../styles/components/Profile.module.css';

export function Profile() {
    return (
        <div className={styles.profileContainer}> 
        <img src="https://avatars.githubusercontent.com/u/102001519?s=400&v=4" />
        <div>
            <strong>Lucas Ribeiro</strong>
            <p>Level 1</p>
        </div>
    </div>
    );
}