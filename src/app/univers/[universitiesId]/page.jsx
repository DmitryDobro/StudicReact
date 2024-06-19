import Banner from '../../../components/Main/Univers/Banner/Banner';
import Aside from '../../../components/Main/Univers/Aside/Aside';
import MainInformation from '../../../components/Main/Univers/MainInformation/MainInformation';
import Specialization from '../../../components/Main/Univers/Specialization/Specialization';
import AboutUnivers from '../../../components/Main/Univers/AboutUnivers/AboutUnivers';
import './Univers.scss';

async function getUniversityName(id) {
  let responce = await fetch(`https://api.hh.ru/educational_institutions?id=${id}`);
  let data = await responce.json();
  return data.items
}
export default async function University({params: {universitiesId}}) {
  let university = await getUniversityName(universitiesId);
  return (
    <>
      <Banner university={university[0]}/>
      <section className="main__body container">
        <Aside />
        <div className="main__content">
          <MainInformation />
          <Specialization />
          <AboutUnivers />
        </div>
      </section>
    </>
  );
}
