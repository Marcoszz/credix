import type * as types from './types';
import type { ConfigOptions, FetchResponse } from 'api/dist/core'
import Oas from 'oas';
import APICore from 'api/dist/core';
import definition from './openapi.json';

class SDK {
  spec: Oas;
  core: APICore;

  constructor() {
    this.spec = Oas.init(definition);
    this.core = new APICore(this.spec, 'credix-credipay/1.0 (api/6.1.2)');
  }

  /**
   * Optionally configure various options that the SDK allows.
   *
   * @param config Object of supported SDK options and toggles.
   * @param config.timeout Override the default `fetch` request timeout of 30 seconds. This number
   * should be represented in milliseconds.
   */
  config(config: ConfigOptions) {
    this.core.setConfig(config);
  }

  /**
   * If the API you're using requires authentication you can supply the required credentials
   * through this method and the library will magically determine how they should be used
   * within your API request.
   *
   * With the exception of OpenID and MutualTLS, it supports all forms of authentication
   * supported by the OpenAPI specification.
   *
   * @example <caption>HTTP Basic auth</caption>
   * sdk.auth('username', 'password');
   *
   * @example <caption>Bearer tokens (HTTP or OAuth 2)</caption>
   * sdk.auth('myBearerToken');
   *
   * @example <caption>API Keys</caption>
   * sdk.auth('myApiKey');
   *
   * @see {@link https://spec.openapis.org/oas/v3.0.3#fixed-fields-22}
   * @see {@link https://spec.openapis.org/oas/v3.1.0#fixed-fields-22}
   * @param values Your auth credentials for the API; can specify up to two strings or numbers.
   */
  auth(...values: string[] | number[]) {
    this.core.setAuth(...values);
    return this;
  }

  /**
   * If the API you're using offers alternate server URLs, and server variables, you can tell
   * the SDK which one to use with this method. To use it you can supply either one of the
   * server URLs that are contained within the OpenAPI definition (along with any server
   * variables), or you can pass it a fully qualified URL to use (that may or may not exist
   * within the OpenAPI definition).
   *
   * @example <caption>Server URL with server variables</caption>
   * sdk.server('https://{region}.api.example.com/{basePath}', {
   *   name: 'eu',
   *   basePath: 'v14',
   * });
   *
   * @example <caption>Fully qualified server URL</caption>
   * sdk.server('https://eu.api.example.com/v14');
   *
   * @param url Server URL
   * @param variables An object of variables to replace into the server URL.
   */
  server(url: string, variables = {}) {
    this.core.setServer(url, variables);
  }

  /**
   * Tries to create a new order. Will work if the buyer has enough credit limit and payment
   * terms for the given order. Once successfully created, the total amount of the order will
   * be subtracted from the buyer's available credit limit.
   *
   * @summary Create an order
   */
  postCreateOrder(body: types.PostCreateOrderBodyParam): Promise<FetchResponse<201, types.PostCreateOrderResponse201>> {
    return this.core.fetch('/v1/orders', 'post', body);
  }

  /**
   * Lists all orders associated with the sellers linked to the application.
   *
   * @summary List orders
   */
  listOrders(metadata?: types.ListOrdersMetadataParam): Promise<FetchResponse<200, types.ListOrdersResponse200>> {
    return this.core.fetch('/v1/orders', 'get', metadata);
  }

  /**
   * Gets an order by CrediPay's internal order ID.
   *
   * @summary Get an order
   */
  getOrder(metadata: types.GetOrderMetadataParam): Promise<FetchResponse<200, types.GetOrderResponse200>> {
    return this.core.fetch('/v1/orders/{orderId}', 'get', metadata);
  }

  /**
   * Moves an order to finalized state. Status for indicating the order is ready to be
   * processed by the seller, and the goods will be delivered. After an order is finalized,
   * you will be able to attach an invoice to it.
   *
   * @summary Finalize an order
   */
  postFinalizeOrder(metadata: types.PostFinalizeOrderMetadataParam): Promise<FetchResponse<200, types.PostFinalizeOrderResponse200>> {
    return this.core.fetch('/v1/orders/{orderId}/finalize', 'post', metadata);
  }

  /**
   * Moves an order to cancelled state and increases the buyer's available credit limit by
   * that order's total amount. If the order already has an invoice linked to it, it will be
   * fully refunded.
   *
   * @summary Cancel an order
   */
  postCancelOrder(metadata: types.PostCancelOrderMetadataParam): Promise<FetchResponse<200, types.PostCancelOrderResponse200>> {
    return this.core.fetch('/v1/orders/{orderId}/cancel', 'post', metadata);
  }

  /**
   * Gets all documents linked to an order.
   *
   * @summary Get order documents
   */
  getOrderDocuments(metadata: types.GetOrderDocumentsMetadataParam): Promise<FetchResponse<200, types.GetOrderDocumentsResponse200>> {
    return this.core.fetch('/v1/orders/{orderId}/documents', 'get', metadata);
  }

  /**
   * Gets the invoice amounts and the total fees for the possible order.
   *
   * @summary Returns order simulation.
   */
  postOrderSimulation(body: types.PostOrderSimulationBodyParam): Promise<FetchResponse<200, types.PostOrderSimulationResponse200>> {
    return this.core.fetch('/v1/order-simulation', 'post', body);
  }

  /**
   * Refunds an order. When this endpoint is called, the amount CrediPay charges the buyer
   * will be reduced by the amount passed in the body. This will then be subtracted from the
   * next disbursement the seller receives.
   *
   * @summary Refund an order
   */
  postOrderRefund(body: types.PostOrderRefundBodyParam, metadata: types.PostOrderRefundMetadataParam): Promise<FetchResponse<200, types.PostOrderRefundResponse200>> {
    return this.core.fetch('/v1/orders/{orderId}/refund', 'post', body, metadata);
  }

  /**
   * Extends payment terms for an order for the given asset
   *
   * @summary Extends payment terms for an order
   */
  postOrderExtendPaymentTerms(body: types.PostOrderExtendPaymentTermsBodyParam, metadata: types.PostOrderExtendPaymentTermsMetadataParam): Promise<FetchResponse<number, unknown>> {
    return this.core.fetch('/v1/orders/{orderId}/extension', 'post', body, metadata);
  }

  /**
   * Lists all installments (assets) linked to your account. This endpoint is deprecated, use
   * /installments instead.
   *
   * @summary List installments
   */
  listInstallmentsDeprecated(metadata?: types.ListInstallmentsDeprecatedMetadataParam): Promise<FetchResponse<200, types.ListInstallmentsDeprecatedResponse200>> {
    return this.core.fetch('/v1/assets', 'get', metadata);
  }

  /**
   * Lists all installments (assets) linked to your account.
   *
   * @summary List installments
   */
  listInstallments(metadata?: types.ListInstallmentsMetadataParam): Promise<FetchResponse<200, types.ListInstallmentsResponse200>> {
    return this.core.fetch('/v1/installments', 'get', metadata);
  }

  /**
   * Retrieve a list of buyers, each with their credit limits and seller configurations.
   * Seller configurations include settings specific to the relationship between each buyer
   * and seller. There is an optional parameter 'sellerTaxId'. If 'sellerTaxId' is provided,
   * the response includes seller configurations for the specified seller only. If no
   * 'sellerTaxId' is provided, the response includes seller configurations for all sellers
   * associated with the API key. This endpoint allows customization of data retrieval,
   * enabling a focus on either a specific seller or configurations for all linked sellers.
   *
   * @summary Get buyers
   */
  getBuyers(metadata?: types.GetBuyersMetadataParam): Promise<FetchResponse<200, types.GetBuyersResponse200>> {
    return this.core.fetch('/v1/buyers', 'get', metadata);
  }

  /**
   * Retrieve a single buyer with their credit limits and seller configurations. Seller
   * configurations include settings specific to the relationship between the buyer and
   * seller. There is an optional parameter 'sellerTaxId'. If 'sellerTaxId' is provided, the
   * response includes seller configurations for the specified seller only. If no
   * 'sellerTaxId' is provided, the response includes seller configurations for all sellers
   * associated with the API key. This endpoint allows customization of data retrieval,
   * enabling a focus on either a specific seller or configurations for all linked sellers.
   *
   * @summary Get buyer
   */
  getBuyer(metadata: types.GetBuyerMetadataParam): Promise<FetchResponse<200, types.GetBuyerResponse200>> {
    return this.core.fetch('/v1/buyers/{taxId}', 'get', metadata);
  }

  /**
   * Allows you to submit a Nota Fiscal XML file. If orderId is not provided, a new order is
   * created. If orderId is provided, the invoice is linked to the specified order. For an
   * invoice to be accepted, it needs to be within the buyer's available credit limit and
   * maximum payment terms.
   *
   * @summary Submit Invoice XML
   */
  postSubmitInvoiceXml(body: types.PostSubmitInvoiceXmlBodyParam, metadata?: types.PostSubmitInvoiceXmlMetadataParam): Promise<FetchResponse<200, types.PostSubmitInvoiceXmlResponse200>> {
    return this.core.fetch('/v1/invoices', 'post', body, metadata);
  }

  /**
   * Get all the invoices linked to the application.
   *
   * @summary Gets all the invoices
   */
  getInvoices(metadata?: types.GetInvoicesMetadataParam): Promise<FetchResponse<200, types.GetInvoicesResponse200>> {
    return this.core.fetch('/v1/invoices', 'get', metadata);
  }

  /**
   * Get information of an specific invoice.
   *
   * @summary Get Invoice
   */
  getInvoice(metadata: types.GetInvoiceMetadataParam): Promise<FetchResponse<200, types.GetInvoiceResponse200>> {
    return this.core.fetch('/v1/invoices/{invoiceId}', 'get', metadata);
  }

  /**
   * Get all the invoices linked to the application.
   *
   * @summary Gets all the invoices
   */
  getInvoicesOld(metadata?: types.GetInvoicesOldMetadataParam): Promise<FetchResponse<200, types.GetInvoicesOldResponse200>> {
    return this.core.fetch('/v1/invoices-old', 'get', metadata);
  }
}

const createSDK = (() => { return new SDK(); })()
;

export default createSDK;

export type { GetBuyerMetadataParam, GetBuyerResponse200, GetBuyersMetadataParam, GetBuyersResponse200, GetInvoiceMetadataParam, GetInvoiceResponse200, GetInvoicesMetadataParam, GetInvoicesOldMetadataParam, GetInvoicesOldResponse200, GetInvoicesResponse200, GetOrderDocumentsMetadataParam, GetOrderDocumentsResponse200, GetOrderMetadataParam, GetOrderResponse200, ListInstallmentsDeprecatedMetadataParam, ListInstallmentsDeprecatedResponse200, ListInstallmentsMetadataParam, ListInstallmentsResponse200, ListOrdersMetadataParam, ListOrdersResponse200, PostCancelOrderMetadataParam, PostCancelOrderResponse200, PostCreateOrderBodyParam, PostCreateOrderResponse201, PostFinalizeOrderMetadataParam, PostFinalizeOrderResponse200, PostOrderExtendPaymentTermsBodyParam, PostOrderExtendPaymentTermsMetadataParam, PostOrderRefundBodyParam, PostOrderRefundMetadataParam, PostOrderRefundResponse200, PostOrderSimulationBodyParam, PostOrderSimulationResponse200, PostSubmitInvoiceXmlBodyParam, PostSubmitInvoiceXmlMetadataParam, PostSubmitInvoiceXmlResponse200 } from './types';
