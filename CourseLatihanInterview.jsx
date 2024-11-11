import { FunctionComponent } from 'react';
import styles from './CourseLatihanInterview.module.css';


const CourseLatihanInterview:FunctionComponent = () => {
  	return (
    		<div className={styles.courseLatihanInterview}>
      			<div className={styles.navbar}>
        				<img className={styles.logoNavbar1} alt="" src="Logo Navbar 1.png" />
        				<div className={styles.menuNav}>
          					<div className={styles.textNavParent}>
            						<div className={styles.textNav}>
              							<div className={styles.loremIpsum}>Mentoring</div>
            						</div>
            						<div className={styles.textNav}>
              							<div className={styles.loremIpsum}>E-Learning</div>
            						</div>
            						<div className={styles.textNav}>
              							<div className={styles.loremIpsum}>Artikel Karier</div>
            						</div>
          					</div>
        				</div>
        				<img className={styles.iconaccountCircle} alt="" src="icon/account_circle.svg" />
      			</div>
      			<div className={styles.footer}>
        				<img className={styles.logoNavbar1} alt="" src="Logo Navbar 2.png" />
        				<div className={styles.frameParent}>
          					<div className={styles.markunreadParent}>
            						<img className={styles.markunreadIcon} alt="" src="markunread.svg" />
            						<div className={styles.kontak}>Kontak</div>
          					</div>
          					<div className={styles.assignmentIndParent}>
            						<img className={styles.markunreadIcon} alt="" src="assignment_ind.svg" />
            						<div className={styles.kontak}>Tentang Kami</div>
          					</div>
          					<div className={styles.markunreadParent}>
            						<img className={styles.markunreadIcon} alt="" src="announcement.svg" />
            						<div className={styles.kontak}>Bantuan</div>
          					</div>
        				</div>
      			</div>
      			<div className={styles.frameGroup}>
        				<div className={styles.frameContainer}>
          					<div className={styles.frameWrapper}>
            						<div className={styles.textNavGroup}>
              							<div className={styles.textNav}>
                								<div className={styles.loremIpsum3}>Chit-Chatview Batch 5</div>
              							</div>
              							<div className={styles.textNav4}>
                								<div className={styles.bangunKepercayaanDiri}>Bangun Kepercayaan Diri dan Kuasai Strategi Interview Terbaik untuk Sukses Kariermu di Chit-Chatview Batch 5!</div>
              							</div>
            						</div>
          					</div>
          					<div className={styles.frameDiv}>
            						<div className={styles.batch5DimulaiPadaParent}>
              							<div className={styles.batch5Dimulai}>Batch 5 dimulai pada:</div>
              							<div className={styles.batchDate}>
                								<img className={styles.iconcalendarMonth} alt="" src="icon/calendar_month.svg" />
                								<div className={styles.novemberWrapper}>
                  									<div className={styles.november}>30-31 November</div>
                								</div>
              							</div>
              							<div className={styles.button}>
                								<img className={styles.iconalarmAdd} alt="" src="icon/alarm_add.svg" />
                								<div className={styles.label}>Ingatkan saya</div>
              							</div>
            						</div>
            						<div className={styles.kandidatTelahTerbantuDitahaParent}>
              							<div className={styles.kandidatTelahTerbantu}>1000+ Kandidat telah terbantu ditahap interview berkat chit-chatview!</div>
              							<div className={styles.assignmentIndParent}>
                								<img className={styles.frameChild} alt="" src="Group 2139.svg" />
                								<div className={styles.div}>4,9/5</div>
              							</div>
            						</div>
          					</div>
        				</div>
        				<img className={styles.ilustarsiIcon} alt="" src="Ilustarsi.svg" />
      			</div>
      			<div className={styles.textNavContainer}>
        				<div className={styles.textNav}>
          					<div className={styles.informasiKelas}>Informasi Kelas</div>
        				</div>
        				<div className={styles.frameParent1}>
          					<div className={styles.textNavParent1}>
            						<div className={styles.textNav6}>
              							<div className={styles.informasiKelas}>Link Zoom</div>
            						</div>
            						<div className={styles.textNav7}>
              							<div className={styles.loremIpsum5}>Bit.ly/Zoom</div>
            						</div>
          					</div>
          					<div className={styles.textNavParent2}>
            						<div className={styles.textNav6}>
              							<div className={styles.informasiKelas}>Rekaman kelas</div>
            						</div>
            						<div className={styles.textNav7}>
              							<div className={styles.loremIpsum5}>Bit.ly/RekamanKelas</div>
            						</div>
          					</div>
          					<div className={styles.textNavParent2}>
            						<div className={styles.textNav10}>
              							<div className={styles.informasiKelas}>Guideline Kelas</div>
            						</div>
            						<div className={styles.textNav7}>
              							<div className={styles.loremIpsum5}>Bit.ly/GuidlineKelas</div>
            						</div>
          					</div>
          					<div className={styles.textNavParent4}>
            						<div className={styles.textNav10}>
              							<div className={styles.informasiKelas}>Materi</div>
            						</div>
            						<div className={styles.textNav7}>
              							<div className={styles.loremIpsum5}>Bit.ly/Materi</div>
            						</div>
          					</div>
          					<div className={styles.textNavParent2}>
            						<div className={styles.textNav10}>
              							<div className={styles.informasiKelas}>Simulasi Interview</div>
            						</div>
            						<div className={styles.textNav7}>
              							<div className={styles.loremIpsum5}>Bit.ly/SimulasiInterview</div>
            						</div>
          					</div>
          					<div className={styles.textNavParent4}>
            						<div className={styles.textNav10}>
              							<div className={styles.informasiKelas}>Evaluasi</div>
            						</div>
            						<div className={styles.textNav7}>
              							<div className={styles.loremIpsum5}>Bit.ly/Evaluasi</div>
            						</div>
          					</div>
        				</div>
      			</div>
    		</div>);
};

export default CourseLatihanInterview;
