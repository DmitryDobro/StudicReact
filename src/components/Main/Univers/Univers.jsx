import Banner from './Banner/Banner';
import Aside from './Aside/Aside';
import MainInformation from './MainInformation/MainInformation';
import Specialization from './Specialization/Specialization';
import AboutUnivers from './AboutUnivers/AboutUnivers';
export default function Univers({closeModal, university, faculties}) {
  return (
    <>
      <Banner university={university} />
      <section className="main__body container">
        <Aside />
        <div className="main__content">
          <MainInformation />
          <Specialization faculties={faculties} />
          <AboutUnivers />
        </div>
      </section>
    </>
  );
}
