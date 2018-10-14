package br.unicamp.ecommerce.statusentrega;

import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.Mockito;
import org.mockito.MockitoAnnotations;

import com.github.tomakehurst.wiremock.WireMockServer;

import static com.github.tomakehurst.wiremock.client.WireMock.aResponse;
import static com.github.tomakehurst.wiremock.client.WireMock.get;
import static com.github.tomakehurst.wiremock.client.WireMock.urlMatching;

import br.unicamp.ecommerce.Configuracao;
import br.unicamp.ecommerce.model.StatusEncomenda;
import br.unicamp.ecommerce.service.StatusService;
import cucumber.api.DataTable;
import cucumber.api.java.After;
import cucumber.api.java.Before;
import cucumber.api.java.en.And;
import cucumber.api.java.en.But;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import static org.assertj.core.api.Assertions.assertThat;
import static org.assertj.core.api.ThrowableAssert.catchThrowable;

import java.util.Map;

import org.assertj.core.api.ThrowableAssert.ThrowingCallable;

public class StatusEntregaSteps {

	public WireMockServer server;

	@Mock
	private Configuracao configuration;

	@InjectMocks
	private StatusService service;

	private StatusEncomenda status;

	private String codigo;

	private Throwable throwable;

	@Before
	public void setUp() {
		int port = 9988;
		server = new WireMockServer(port);
		server.stop();
		server.start();
		MockitoAnnotations.initMocks(this);
		Mockito.when(configuration.getStatusEntregaUrl())
				.thenReturn("http://localhost:" + port + "/sro_bin/sroii_xml.eventos");
		status = null;
		codigo = null;
		throwable = null;
	}

	@After
	public void tearDown() {
		server.stop();
	}

	@Given("^I am logged on the System$")
	public void i_am_logged_on_the_System() throws Throwable {
		// Descritive only
	}

	@Given("^I already bought an item$")
	public void i_already_bought_an_item() throws Throwable {
		// Descritive only
	}

	@Given("^The tracking code is \"([^\"]*)\"$")
	public void the_tracking_code_is(String arg1) throws Throwable {
		codigo = arg1;
		server.stubFor(get(urlMatching("/sro_bin/sroii_xml.eventos/" + codigo + ".*"))
				.willReturn(aResponse().withStatus(200).withHeader("Content-Type", "text/xml")
						.withBodyFile("resultado-pesquisa-StatusEntrega_" + codigo + ".xml")));
	}

	@Given("^I would like to see where my product is located at$")
	public void i_would_like_to_see_where_my_product_is_located_at() throws Throwable {
		// Descritive only
	}

	@But("^my Tracking Code is not valid$")
	public void my_Tracking_Code_is_not_valid(String arg1) throws Throwable {
		codigo = arg1;
		server.stubFor(get(urlMatching("/sro_bin/sroii_xml.eventos/" + codigo + ".*"))
				.willReturn(aResponse().withStatus(200).withHeader("Content-Type", "text/xml")
						.withBodyFile("resultado-pesquisa-StatusEntrega_" + codigo + ".xml")));
	}
	
	@When("^I request for the delivery status$")
	public void i_request_for_the_delivery_status() throws Throwable {
		ThrowingCallable callable = () -> this.status = service.encontrar(codigo);
		throwable = catchThrowable(callable);
	}

	@Then("^I can see the message$")
	public void i_can_see_the_message(String arg1) throws Throwable {
		String erro = arg1;
		assertThat(status.getErro()).isEqualTo(erro);
		assertThat(throwable).isNull();
	}
	
	@Then("^I should see the \"([^\"]*)\" and the \"([^\"]*)\" of my package$")
	public void i_should_see_the_and_the_of_my_package(String arg1, String arg2) throws Throwable {
		assertThat(this.status.getStatus()).isEqualTo(arg1);
		assertThat(this.status.getDescricao()).isEqualTo(arg2);
		assertThat(throwable).isNull();

	}
}