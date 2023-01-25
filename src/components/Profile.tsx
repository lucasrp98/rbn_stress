import { useContext } from 'react';
import { ChallengesContext } from '../contexts/ChallengesContext';
import styles from '../styles/components/Profile.module.css';

export function Profile() {

    const { level } = useContext(ChallengesContext);
    return (
        <div className={styles.profileContainer}> 
        <img src="https://avatars.githubusercontent.com/u/102001519?s=400&v=4" />
        <div>
            <strong>Lucas Ribeiro</strong>
            <p>Level {level}</p>
        </div>
    </div>
    );
}