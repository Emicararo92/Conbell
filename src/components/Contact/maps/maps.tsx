"use client";
import { useState } from "react";
import styles from "../../../Styles/maps.module.css";

interface LocationData {
  title: string;
  note?: string;
  schedule: string;
}

const locations = [
  {
    title: "Conbell Amoblamientos",
    iframeSrc:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3406.163459614039!2d-64.24611632468513!3d-31.38205609459202!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94329f4c84ea00fb%3A0x42a077dfe3cbcb24!2sConbell%20Amoblamientos!5e0!3m2!1ses!2sar!4v1744732871684!5m2!1ses!2sar",
    note: null,
    schedule:
      "Lunes a Viernes: 9:00-13:00 / 16:00-20:00 \n Sábados: 9:00-13:30",
  },
  {
    title: "Conbell Deco",
    iframeSrc:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3406.1575887609565!2d-64.24579912468525!3d-31.382217994599852!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94329ed55cdccf6d%3A0x4e57e9814e4334b!2sEmilio%20Lamarca%204135%2C%20X5009%20C%C3%B3rdoba!5e0!3m2!1ses!2sar!4v1744732918322!5m2!1ses!2sar",
    note: "Sucursal anexa especializada en decoración.",
    schedule:
      "Lunes a Viernes: 9:00-13:00 / 16:00-20:00 \n Sábados: 9:00-13:30",
  },
];

export default function Maps() {
  const [modalOpen, setModalOpen] = useState(false);
  const [modalData, setModalData] = useState<LocationData | null>(null);

  const openModal = (data: LocationData) => {
    setModalData(data);
    setModalOpen(true);
  };

  return (
    <div className={styles.container}>
      <div className={styles.banner}>
        <div className={styles.bannerContent}>
          <h1>Cómo Llegar</h1>
          <p>Seleccioná tu sucursal para ver ubicación y horarios</p>
        </div>
      </div>

      <div className={styles.mapsContainer}>
        {locations.map((loc, index) => (
          <div className={styles.mapSection} key={index}>
            <h2 className={styles.mapTitle}>{loc.title}</h2>
            <div className={styles.mapWrapper}>
              <iframe
                src={loc.iframeSrc}
                width="100%"
                height="250"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
            <button
              className={styles.toggleButton}
              onClick={() =>
                openModal({
                  title: loc.title,
                  note: loc.note || undefined,
                  schedule: loc.schedule,
                })
              }
            >
              Ver información
            </button>
          </div>
        ))}
      </div>

      {modalOpen && modalData && (
        <div
          className={styles.modalOverlay}
          onClick={() => setModalOpen(false)}
        >
          <div
            className={styles.modalContent}
            onClick={(e) => e.stopPropagation()}
          >
            <h2>{modalData.title}</h2>
            {modalData.note && (
              <p className={styles.mapNote}>{modalData.note}</p>
            )}
            <p className={styles.schedule}>{modalData.schedule}</p>
            <button
              className={styles.closeButton}
              onClick={() => setModalOpen(false)}
            >
              Cerrar
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
