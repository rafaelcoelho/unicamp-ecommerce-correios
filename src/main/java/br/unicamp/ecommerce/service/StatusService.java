package br.unicamp.ecommerce.service;

import br.unicamp.ecommerce.Configuracao;
import br.unicamp.ecommerce.model.StatusEncomenda;

public class StatusService {

	  private Configuracao configuracao;
	  
	  public StatusEncomenda encontrar(String codigo) throws Exception {
    	String url = String.format("%s/%s/xml", configuracao.getStatusEntregaUrl(), codigo);
		RemoteService remoteService = new RemoteService();
		StatusEncomenda result = remoteService.getAndParseXml(url, StatusEncomenda.class);
		return result;
	  }
}
