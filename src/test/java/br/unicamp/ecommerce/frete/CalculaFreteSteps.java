package br.unicamp.ecommerce.frete;

import static com.github.tomakehurst.wiremock.client.WireMock.aResponse;
import static com.github.tomakehurst.wiremock.client.WireMock.get;
import static com.github.tomakehurst.wiremock.client.WireMock.urlMatching;
import static org.assertj.core.api.Assertions.assertThat;
import static org.assertj.core.api.ThrowableAssert.catchThrowable;
import static org.junit.Assert.assertTrue;

import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.Mockito;
import org.mockito.MockitoAnnotations;

import com.github.tomakehurst.wiremock.WireMockServer;
import com.github.tomakehurst.wiremock.http.Fault;

import br.unicamp.ecommerce.Configuracao;
import br.unicamp.ecommerce.model.PrecoPrazo;
import br.unicamp.ecommerce.service.ValorFreteService;
import cucumber.api.java.After;
import cucumber.api.java.Before;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class CalculaFreteSteps
{

    public WireMockServer wireMockServer;

    @Mock
    private Configuracao configuration;

    @InjectMocks
    private ValorFreteService service;

    private PrecoPrazo price;

    private String cep;

    private Throwable throwable;

    @Before
    public void setUp()
    {
        wireMockServer = new WireMockServer(9876);
        wireMockServer.start();
        MockitoAnnotations.initMocks(this);
        Mockito.when(configuration.getConsultaPrecoPrazoUrl()).thenReturn("http://localhost:9876/calculador/PrecoPrazo");
        price = null;
        cep = null;
        throwable = null;
    }

    @After
    public void teardown()
    {
        wireMockServer.stop();
    }

    @Given ("^an order$")
    public void an_order() throws Throwable
    {
        //TODO: add check for items on basket
        assertTrue(true);
    }

    @When ("^I set the invalid CEP \"([^\"]*)\"$")
    public void i_set_the_invalid_CEP(String arg1) throws Throwable
    {
        this.cep = arg1;
        wireMockServer.stubFor(get(urlMatching("/calculador/PrecoPrazo/" + cep + ".*"))
                .willReturn(aResponse().withStatus(400)
                        .withHeader("Content-Type", "text/xlm")
                        .withBodyFile("resultado-pesquisa-preco-prazo_invalid_address" + ".xml")));
    }

    @When ("^I set the CEP \"([^\"]*)\"$")
    public void i_set_the_CEP(String arg1) throws Throwable
    {
        this.cep = arg1;
        wireMockServer.stubFor(get(urlMatching("/calculador/PrecoPrazo/" + cep + ".*"))
                .willReturn(aResponse().withStatus(200)
                        .withHeader("Content-Type", "text/xlm")
                        .withBodyFile("resultado-pesquisa-preco-prazo_" + cep + ".xml")));
    }

    @Then ("^an exception shall be throw with following error message:$")
    public void an_exception_shall_be_throw_with_following_error_message(String error) throws Throwable
    {
        assertThat(throwable).hasMessage(error);
    }

    @And ("^I select calculate shipping$")
    public void i_select_calculate_shipping() throws Throwable
    {
        this.throwable = catchThrowable(() -> this.price = service.calcular(cep));
    }

    @And ("^the service to calculate is unavailable$")
    public void the_service_to_calculate_is_unavailable() throws Throwable
    {
        wireMockServer.stubFor(get(urlMatching("/calculador/PrecoPrazo/.*")).willReturn(aResponse().withStatus(200)
                .withFixedDelay(6000).withBodyFile("resultado-pesquisa-preco-prazo_out.xml")));
    }

    @And ("^an unformat response shall be done$")
    public void an_unformat_response_shall_be_done() throws Throwable
    {
        wireMockServer.stubFor(get(urlMatching("/calculador/PrecoPrazo/.*")).willReturn(aResponse().withFault(Fault.MALFORMED_RESPONSE_CHUNK)));
    }

    @Then ("^I get price for shipping \"([^\"]*)\"$")
    public void i_get_price_for_shipping(String price) throws Throwable
    {
        assertThat(this.price.getValor()).isEqualTo(price);
    }

    @Then ("^I get the maximum date to deliver (\\d+)$")
    public void i_get_the_maximum_date_to_deliver(int maxDate) throws Throwable
    {
        assertThat(this.price.getPrazoEntrega()).isEqualTo(maxDate);
    }
}
