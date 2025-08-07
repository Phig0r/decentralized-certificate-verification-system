/**
 * @file CertificateCard.tsx
 * @description A reusable component that displays a summary of a single credential
 * in a "digital diploma" card format. It's designed to be displayed in the
 * recipient's gallery view and is clickable to show more details.
*/

import AwardIcon from '../../assets/icons/award.svg?react';

import type { HeaderProps } from '../../types/types';
import styles from './CertificateCard.module.css';

export default function CertificateCard({ courseTitle, issuerName, issueDate, onClick }: HeaderProps) {
  return (
    <button className={styles.cardContainer} onClick={onClick}>
      <AwardIcon className={styles.cardIcon} />
      <h2 className={styles.courseTitle}>{courseTitle}</h2>
      <p className={styles.issuerName}>Issued by: {issuerName}</p>
      <p className={styles.issueDate}>Issued: {issueDate}</p>
    </button>
  );
}
