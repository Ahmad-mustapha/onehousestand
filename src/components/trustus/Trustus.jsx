import Nuxe from '../../assets/nuxe.webp';
import Bain from '../../assets/bain.webp';
import Caudalie from '../../assets/caudalie.webp';
import Ikea from '../../assets/ikea.webp';
import Nestle from '../../assets/nestle.webp';
import Transtec from '../../assets/transtec.webp';
import Brico from '../../assets/brico.webp';
import Douwe from '../../assets/douwe.webp';
import Vlerick from '../../assets/vlerick.webp';
import European from '../../assets/european.webp';
import Tesla from '../../assets/tesla.webp';
import Bemymodels from '../../assets/bemymodels.webp';
import Elia from '../../assets/elia.webp';
import Nalys from '../../assets/nalys.webp';
import Lemonchik from '../../assets/lemonchik.webp';
import Thegreens from '../../assets/theGreens.webp';
import Bruxelles from '../../assets/bruxelles.webp';
import Logitech from '../../assets/logitech.webp';
import Lvtpr from '../../assets/lvtpr.webp';
import Ue from '../../assets/ue.webp';
import Belgoconcept from '../../assets/belgoconcept.webp';
import Reload from '../../assets/reload.webp';
import Tarteamoi from '../../assets/tarteAMoi.webp';
import Eponym from '../../assets/eponym.webp';
import Pandox from '../../assets/pandox.webp';
import Uber from '../../assets/uber.webp';
import Nivea from '../../assets/nivea.webp';
import Dominiquerigo from '../../assets/dominiqueRigo.webp';
import Proximus from '../../assets/proximus.webp';
import Picard from '../../assets/picard.webp';
import Hellofresh from '../../assets/helloFresh.webp';
import Clubmed from '../../assets/clubMed.webp';
import Havas from '../../assets/havas.webp';
import Repetto from '../../assets/repetto.webp';
import Bam from '../../assets/BAM.webp';
import Signal from '../../assets/signal.webp';
import Loreal from '../../assets/loreal.webp'
import Deloitte from '../../assets/deloitte.webp'
import Engel from '../../assets/engelandVolkers.webp'
import UberEats from '../../assets/uberEats.webp'
import Beobank from '../../assets/beobank.webp'
import Delhaize from '../../assets/delhaize.webp'
import Corona from '../../assets/corona.webp'
import Lancome from '../../assets/lancome.webp'
import Nutella from '../../assets/nutella.webp'

const TrustUsImagedata = [
    { id: 1, image: Nuxe },
    { id: 2, image: Bain },
    { id: 3, image: Caudalie },
    { id: 4, image: Ikea },
    { id: 5, image: Nestle },
    { id: 6, image: Transtec },
    { id: 7, image: Brico },
    { id: 8, image: Douwe },
    { id: 9, image: Vlerick },
    { id: 10, image: Loreal },
    { id: 11, image: European },
    { id: 12, image: Tesla },
    { id: 13, image: Engel },
    { id: 14, image: Beobank },
    { id: 15, image: Bemymodels },
    { id: 16, image: Elia },
    { id: 17, image: Nalys },
    { id: 18, image: Corona },
    { id: 19, image: Lemonchik },
    { id: 20, image: Delhaize },
    { id: 21, image: Nutella },
    { id: 22, image: Thegreens },
    { id: 23, image: Bruxelles },
    { id: 24, image: Deloitte },
    { id: 25, image: Logitech },
    { id: 26, image: Lvtpr },
    { id: 27, image: Ue },
    { id: 28, image: Belgoconcept },
    { id: 29, image: Reload },
    { id: 30, image: Tarteamoi },
    { id: 31, image: Lancome },
    { id: 32, image: Eponym },
    { id: 33, image: Pandox },
    { id: 34, image: Uber },
    { id: 35, image: Nivea },
    { id: 36, image: Dominiquerigo },
    { id: 37, image: Proximus },
    { id: 38, image: Picard },
    { id: 39, image: Hellofresh },
    { id: 40, image: Clubmed },
    { id: 41, image: Havas },
    { id: 42, image: Repetto },
    { id: 43, image: UberEats },
    { id: 44, image: Bam },
    { id: 45, image: Signal },
];

const Organizers = () => (
  <div style={{ marginTop: '2rem' }} className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-9 gap-12">
    {TrustUsImagedata.map((item) => (
      <div key={item.id} className="w-full flex items-center justify-center">
        <img src={item.image} alt={`Trusted brand ${item.id}`} className="w-18 h-24 object-contain opacity-65" />
      </div>
    ))}
  </div>
);

const Trustus = () => {
  return (
    <div style={{ padding: '2rem' }} className="flex items-center justify-center flex-col">
      <h1 className="text-[2.5rem] font-[] text-center">They trust us</h1>
      <p className="text-[1.5rem] text-center mt-2">They organize their events on OneHouseStand</p>
      <Organizers />
    </div>
  );
};

export default Trustus;