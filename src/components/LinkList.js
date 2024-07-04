// LinkList.js
import React, { useState } from 'react';
import './LinkList.css'; // Importe o arquivo CSS específico para LinkList

import tfsIcon from '../assets/icons/tfs.png';
import indicadoresIcon from '../assets/icons/indicadores.png';
import registerIcon from '../assets/icons/register.png';
import basesinternasIcon from '../assets/icons/BasesInternas.png';
import kanbanIcon from '../assets/icons/kanban.png';
import mysuiteIcon from '../assets/icons/mysuite.png';
import erpIcon from '../assets/icons/erp.png';
import contabilidadeIcon from '../assets/icons/contabilidade.png';
import banminasIcon from '../assets/icons/banminas.png';
import nestleIcon from '../assets/icons/nestle.png';
import aniupIcon from '../assets/icons/aniup.png';
import prometeonIcon from '../assets/icons/prometeon.png';
import prefeituraIcon from '../assets/icons/prefeitura.png';
import calculadoracidadaoIcon from '../assets/icons/calculadoracidadao.png';
import portaltrf6Icon from '../assets/icons/justica.png';
import cajuIcon from '../assets/icons/caju.png';
import santanderIcon from '../assets/icons/santander.png';
import bradescoIcon from '../assets/icons/bradesco.png';
import zapsignIcon from '../assets/icons/zapsign.png';
import uberIcon from '../assets/icons/uber.png';

const links = {
  geral: [
    { name: 'Register (Ponto)', url: 'https://register.sagatecnologia.com.br/', icon: registerIcon },
  ],
  admin: [
    { name: 'ERP', url: 'https://app.sensusx.com/erp/r/app/erp/login_desktop', icon: erpIcon },
    { name: 'Contabilidade', url: 'https://onvio.com.br/clientcenter/pt/auth?r=%2Fhome', icon: contabilidadeIcon },
    { name: 'BANMINAS', url: 'http://banminas.dyndns.info:5656/', icon: banminasIcon },
    { name: 'NESTLÉ', url: 'https://nestle.service-now.com/cms/vendor_login.do?url=', icon: nestleIcon },
    { name: 'ANI UP', url: 'https://nixup.midassolutions.com.br/nestlebrasil/nixup', icon: aniupIcon },
    { name: 'PrometeonNet', url: 'http://prometeonnet.com/portal/default.aspx?dominio=prometeonnet.com', icon: prometeonIcon },
    { name: 'Prefeitura', url: 'https://bhissdigital.pbh.gov.br/nfse/', icon: prefeituraIcon },
    { name: 'Calculadora do Cidadão', url: 'https://www3.bcb.gov.br/CALCIDADAO/publico/corrigirPorIndice.do?method=corrigirPorIndice', icon: calculadoracidadaoIcon },
    { name: 'Portal trf6', url: 'https://portal.trf6.jus.br/', icon: portaltrf6Icon },
    { name: 'Caju', url: 'https://empresa.caju.com.br/classic/#/dashboard', icon: cajuIcon },
    { name: 'Santander', url: 'https://www.santander.com.br/', icon: santanderIcon },
    { name: 'Bradesco', url: 'https://banco.bradesco/html/pessoajuridica/net-empresa/index.shtm', icon: bradescoIcon },
    { name: 'ZapSign', url: 'https://app.zapsign.com.br/acesso/entrar', icon: zapsignIcon },
    { name: 'Uber', url: 'https://business.uber.com/dashboard/75c6adc1-ad58-5c5e-8c3c-a042ba7520b6/home', icon: uberIcon },
  ],
  tecnico: [
    { name: 'Indicadores TFS (US)', url: 'http://saga-apps:6079/solicitacao', icon: indicadoresIcon },
    { name: 'TFS', url: 'http://nsr01010:8080/tfs/web/', icon: tfsIcon },
    { name: 'My Suite', url: 'https://uso.mysuite.com.br/client/login.php', icon: mysuiteIcon },
    { name: 'Bases Internas', url: 'https://svbd01/login', icon: basesinternasIcon },
    { name: 'Kanban', url: 'http://nsr01010:8085/WFProdEquipeCliente.aspx', icon: kanbanIcon },
  ],
};

const LinkList = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const filterLinks = (links) => {
    return links.filter(link =>
      link.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
  };

  return (
    <div className="link-list-container">
      <h1></h1>
      <div className="search-container">
        <label htmlFor="search-input">Pesquise o link desejado:</label>
        <input
          id="search-input"
          type="text"
          placeholder="Pesquisa Rápida..."
          value={searchTerm}
          onChange={e => setSearchTerm(e.target.value)}
          className="search-input"
        />
      </div>
      <div className="groups-container">
        <div className="group">
          <h2>Geral</h2>
          <ul>
            {filterLinks(links.geral).map((link, index) => (
              <li key={index}>
                <a href={link.url} target="_blank" rel="noopener noreferrer">
                  <img src={link.icon} alt={`${link.name} icon`} className="icon" />
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div className="group">
          <h2>Administrativo</h2>
          <ul>
            {filterLinks(links.admin).map((link, index) => (
              <li key={index}>
                <a href={link.url} target="_blank" rel="noopener noreferrer">
                  <img src={link.icon} alt={`${link.name} icon`} className="icon" />
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div className="group">
          <h2>Técnico TI</h2>
          <ul>
            {filterLinks(links.tecnico).map((link, index) => (
              <li key={index}>
                <a href={link.url} target="_blank" rel="noopener noreferrer">
                  <img src={link.icon} alt={`${link.name} icon`} className="icon" />
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default LinkList;