/**
 * @file VerificationFailedModal.tsx
 * @description A reusable modal component that displays a clear error message
 * when a certificate verification fails. It informs the user of the failure
 * and provides guidance on the next steps to take.
*/

import { useEffect } from 'react';

import ErrorIcon from '../../assets/icons/x-octagon.svg?react';

import type { HeaderProps } from '../../types/types';
import styles from "./VerificationFailedModal.module.css";

export default function VerificationFailedModal({ onClose }: HeaderProps) {

  useEffect(() => {
    document.body.style.overflow = 'hidden';

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, []);

  return (
    <div className={styles.modalBackdrop} onClick={onClose}>
      <div className={styles.modalContainer} onClick={(e) => e.stopPropagation()}>
        <header className={styles.modalHeader}>
          <ErrorIcon className={styles.headerIcon} />
          <h2 className={styles.headerTitle}>Verification Failed</h2>
        </header>
        <main className={styles.modalBody}>
          <p className={styles.errorMessage}>
            No certificate with the provided ID was found on the blockchain.
          </p>
          <p className={styles.guidanceText}>
            Please check the Certificate ID and try again, or contact the
            certificate holder to confirm the correct ID.
          </p>
        </main>
        <footer className={styles.modalFooter}>
          <button className={styles.closeButton} onClick={onClose}>
            Try Again
          </button>
        </footer>
      </div>
    </div>
  );
}
