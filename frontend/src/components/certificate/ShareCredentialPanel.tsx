/**
 * @file ShareCredentialPanel.tsx
 * @description A component that displays a QR code and a copyable link for a
 * verifiable credential. It appears as a side-panel within the certificate
 * detail modal, providing a clean and intuitive sharing experience.
*/

import { QRCodeSVG } from 'qrcode.react';

import CloseIcon from '../../assets/icons/x.svg?react';
import CopyIcon from '../../assets/icons/copy.svg?react';

import type { HeaderProps } from '../../types/types';
import styles from './ShareCredentialPanel.module.css';

export default function ShareCredentialPanel({ link, onClose }: HeaderProps) {
  if(!link){
    return
  }
  const handleCopy = () => {
    navigator.clipboard.writeText(link);
    // Optional: Show a "Copied!" message
  };

  return (
    <div className={styles.sharePanel}>
      <header className={styles.panelHeader}>
        <h3 className={styles.panelTitle}>Share Credential</h3>
        <button className={styles.closeButton} onClick={onClose}>
          <CloseIcon />
        </button>
      </header>
      <main className={styles.panelBody}>
        <div className={styles.qrCodeContainer}>
          <QRCodeSVG value={link} size={180} bgColor="#ffffff" fgColor="#000000" level="Q" />
        </div>
        <p className={styles.instructionText}>
          Scan this code or copy the link below to share.
        </p>
        <div className={styles.copyLinkContainer}>
          <span className={styles.linkText}>{link}</span>
          <button className={styles.copyButton} onClick={handleCopy}>
            <CopyIcon />
            Copy
          </button>
        </div>
      </main>
    </div>
  );
}
