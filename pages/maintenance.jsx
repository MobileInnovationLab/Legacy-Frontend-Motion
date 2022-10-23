import MaintenanceSeo from '../components/seo/maintenanceSeo';

import NavbarWhite from '../components/navbarWhite';
import MaintenanceGraphic from '../public/maintenance/maintenance';
import Footer from '../components/footer';

const Maintenance = () => {
  return (
    <div>
      <MaintenanceSeo />
      <NavbarWhite />

      <MaintenanceGraphic />

      <Footer />
    </div>
  );
};

export default Maintenance;
