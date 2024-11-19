import AddressSVG from "../assets/AddressIcon.svg";
import ChevronSVG from "../assets/ChevronIcon.svg";
import EmailSVG from "../assets/EmailIcon.svg";
import EyeSVG from "../assets/EyeIcon.svg";
import MinSVG from "../assets/MinIcon.svg";
import PencilSVG from "../assets/PencilIcon.svg";
import PhoneSVG from "../assets/PhoneIcon.svg";
import PlusSVG from "../assets/PlusIcon.svg";
import TickSVG from "../assets/TickIcon.svg";
import TrashSVG from "../assets/TrashIcon.svg";
import styles from "../styles/Icons.module.css";

export function AddressIcon() {
  return (
    <img className={styles.addressIcon} src={AddressSVG} alt="Address Icon" />
  );
}

export function ChevronIcon({ isOpen }) {
  return (
    <img
      className={
        isOpen ? `${styles.chevronIcon} ${styles.rotate}` : styles.chevronIcon
      }
      src={ChevronSVG}
      alt="Chevron Icon"
    />
  );
}

export function EmailIcon() {
  return <img className={styles.emailIcon} src={EmailSVG} alt="Email Icon" />;
}

export function EyeIcon() {
  return <img className={styles.eyeIcon} src={EyeSVG} alt="View Icon" />;
}

export function PencilIcon() {
  return <img className={styles.pencilIcon} src={PencilSVG} alt="Edit Icon" />;
}

export function PhoneIcon() {
  return <img className={styles.phoneIcon} src={PhoneSVG} alt="Phone Icon" />;
}

export function PlusMinIcon({ isOpen }) {
  return (
    <img
      className={styles.plusMinIcon}
      src={isOpen ? MinSVG : PlusSVG}
      alt="Plus/Min Icon"
    />
  );
}

export function TickIcon() {
  return <img className={styles.tickIcon} src={TickSVG} alt="Apply Icon" />;
}

export function TrashIcon() {
  return <img className={styles.trashIcon} src={TrashSVG} alt="Delete Icon" />;
}
