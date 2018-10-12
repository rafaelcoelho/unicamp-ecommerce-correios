package br.unicamp.ecommerce.service;

import br.unicamp.ecommerce.Configuracao;
import br.unicamp.ecommerce.model.PrecoPrazo;

public class ValorFreteService {
	private Configuracao configuracao;

	public PrecoPrazo calcular(String cep) throws Exception {
		String url = String.format("%s/%s/xml", configuracao.getConsultaPrecoPrazoUrl(), cep);
		return new RemoteService().getAndParseXml(url, PrecoPrazo.class);
	}
}
