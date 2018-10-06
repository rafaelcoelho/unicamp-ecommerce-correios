package br.unicamp.ecommerce.frete;


import static com.github.tomakehurst.wiremock.client.WireMock.aResponse;
import static com.github.tomakehurst.wiremock.client.WireMock.get;
import static com.github.tomakehurst.wiremock.client.WireMock.urlMatching;
import static org.assertj.core.api.ThrowableAssert.catchThrowable;

import java.util.Map;

import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.Mockito;
import org.mockito.MockitoAnnotations;

import com.github.tomakehurst.wiremock.WireMockServer;

import br.unicamp.ecommerce.Configuracao;
import br.unicamp.ecommerce.model.Endereco;
import br.unicamp.ecommerce.service.BuscaEnderecoService;
import cucumber.api.PendingException;
import cucumber.api.java.After;
import cucumber.api.java.Before;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class CalculaFrete {

	public WireMockServer wireMockServer;

	@Mock
	private Configuracao configuration;

	@InjectMocks
	private BuscaEnderecoService buscaEnderecoService;

	private Endereco endereco;

	private String cep;

	private Throwable throwable;


	@Before
	public void setUp() {
		wireMockServer = new WireMockServer(9876);
		wireMockServer.start();
		MockitoAnnotations.initMocks(this);
		Mockito.when(configuration.getConsultaPrecoPrazoUrl()).thenReturn("http://localhost:9876/calculador/CalcPrecoPrazo");
		endereco = null;
		cep = null;
		throwable = null;
	}

	@After
	public void teardown() {
		wireMockServer.stop();
	}
	
	@Given("^an order$")
	public void an_order() throws Throwable {
		wireMockServer.stubFor(get(urlMatching("/calculador/CalPrecoPrazo" + cep + ".*"))
				.willReturn(aResponse().withStatus(200)
				.withHeader("Content-Type", "text/xlm")
				.withBodyFile(".xml")));
	}

	@When("^I set the CEP")
	public void i_set_the(Map<String, String> map) throws Throwable {
		throwable = catchThrowable(() -> this.endereco = buscaEnderecoService.buscar(map.get("cep")));
	}

	@When("^I select calculate shipping$")
	public void i_select_calculate_shipping() throws Throwable {
		// Write code here that turns the phrase above into concrete actions
		throw new PendingException();
	}

	@Then("^I get price for shipping (\\d+)$")
	public void i_get_price_for_shipping(int price) throws Throwable {
		// Write code here that turns the phrase above into concrete actions
		throw new PendingException();
	}

	@Then("^and exception shall be throw with following error message:$")
	public void and_exception_shall_be_throw_with_following_error_message(String error) throws Throwable {
		// Write code here that turns the phrase above into concrete actions
		throw new PendingException();
	}

	@Then("^I get the maximum date to deliver (\\d+)/(\\d+)/(\\d+)$")
	public void i_get_the_maximum_date_to_deliver(Map<String, String> map) throws Throwable {
		// Write code here that turns the phrase above into concrete actions
		throw new PendingException();
	}
}
