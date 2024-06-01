/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable jsx-a11y/anchor-is-valid */
import InformationContainer from './InformationSection'

import '../styles/components/sidebar.css'
import { cvUrl } from '../../../constants/contatos-cvURLs';

const Sidebar = () => {
  return (
    <aside id="sidebar">
      <InformationContainer />
      <a href={cvUrl} target="_blank" className="btn">
        Download currículo
      </a>
      <h5>
        Desenvolvedor Full-stack
      </h5>
    </aside>
  );
};

export default Sidebar;