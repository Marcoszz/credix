"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var oas_1 = __importDefault(require("oas"));
var core_1 = __importDefault(require("api/dist/core"));
var openapi_json_1 = __importDefault(require("./openapi.json"));
var SDK = /** @class */ (function () {
    function SDK() {
        this.spec = oas_1.default.init(openapi_json_1.default);
        this.core = new core_1.default(this.spec, 'credix-credipay/1.0 (api/6.1.2)');
    }
    /**
     * Optionally configure various options that the SDK allows.
     *
     * @param config Object of supported SDK options and toggles.
     * @param config.timeout Override the default `fetch` request timeout of 30 seconds. This number
     * should be represented in milliseconds.
     */
    SDK.prototype.config = function (config) {
        this.core.setConfig(config);
    };
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
    SDK.prototype.auth = function () {
        var _a;
        var values = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            values[_i] = arguments[_i];
        }
        (_a = this.core).setAuth.apply(_a, values);
        return this;
    };
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
    SDK.prototype.server = function (url, variables) {
        if (variables === void 0) { variables = {}; }
        this.core.setServer(url, variables);
    };
    /**
     * Tries to create a new order. Will work if the buyer has enough credit limit and payment
     * terms for the given order. Once successfully created, the total amount of the order will
     * be subtracted from the buyer's available credit limit.
     *
     * @summary Create an order
     */
    SDK.prototype.postCreateOrder = function (body) {
        return this.core.fetch('/v1/orders', 'post', body);
    };
    /**
     * Lists all orders associated with the sellers linked to the application.
     *
     * @summary List orders
     */
    SDK.prototype.listOrders = function (metadata) {
        return this.core.fetch('/v1/orders', 'get', metadata);
    };
    /**
     * Gets an order by CrediPay's internal order ID.
     *
     * @summary Get an order
     */
    SDK.prototype.getOrder = function (metadata) {
        return this.core.fetch('/v1/orders/{orderId}', 'get', metadata);
    };
    /**
     * Moves an order to finalized state. Status for indicating the order is ready to be
     * processed by the seller, and the goods will be delivered. After an order is finalized,
     * you will be able to attach an invoice to it.
     *
     * @summary Finalize an order
     */
    SDK.prototype.postFinalizeOrder = function (metadata) {
        return this.core.fetch('/v1/orders/{orderId}/finalize', 'post', metadata);
    };
    /**
     * Moves an order to cancelled state and increases the buyer's available credit limit by
     * that order's total amount. If the order already has an invoice linked to it, it will be
     * fully refunded.
     *
     * @summary Cancel an order
     */
    SDK.prototype.postCancelOrder = function (metadata) {
        return this.core.fetch('/v1/orders/{orderId}/cancel', 'post', metadata);
    };
    /**
     * Gets all documents linked to an order.
     *
     * @summary Get order documents
     */
    SDK.prototype.getOrderDocuments = function (metadata) {
        return this.core.fetch('/v1/orders/{orderId}/documents', 'get', metadata);
    };
    /**
     * Gets the invoice amounts and the total fees for the possible order.
     *
     * @summary Returns order simulation.
     */
    SDK.prototype.postOrderSimulation = function (body) {
        return this.core.fetch('/v1/order-simulation', 'post', body);
    };
    /**
     * Refunds an order. When this endpoint is called, the amount CrediPay charges the buyer
     * will be reduced by the amount passed in the body. This will then be subtracted from the
     * next disbursement the seller receives.
     *
     * @summary Refund an order
     */
    SDK.prototype.postOrderRefund = function (body, metadata) {
        return this.core.fetch('/v1/orders/{orderId}/refund', 'post', body, metadata);
    };
    /**
     * Extends payment terms for an order for the given asset
     *
     * @summary Extends payment terms for an order
     */
    SDK.prototype.postOrderExtendPaymentTerms = function (body, metadata) {
        return this.core.fetch('/v1/orders/{orderId}/extension', 'post', body, metadata);
    };
    /**
     * Lists all installments (assets) linked to your account. This endpoint is deprecated, use
     * /installments instead.
     *
     * @summary List installments
     */
    SDK.prototype.listInstallmentsDeprecated = function (metadata) {
        return this.core.fetch('/v1/assets', 'get', metadata);
    };
    /**
     * Lists all installments (assets) linked to your account.
     *
     * @summary List installments
     */
    SDK.prototype.listInstallments = function (metadata) {
        return this.core.fetch('/v1/installments', 'get', metadata);
    };
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
    SDK.prototype.getBuyers = function (metadata) {
        return this.core.fetch('/v1/buyers', 'get', metadata);
    };
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
    SDK.prototype.getBuyer = function (metadata) {
        return this.core.fetch('/v1/buyers/{taxId}', 'get', metadata);
    };
    /**
     * Allows you to submit a Nota Fiscal XML file. If orderId is not provided, a new order is
     * created. If orderId is provided, the invoice is linked to the specified order. For an
     * invoice to be accepted, it needs to be within the buyer's available credit limit and
     * maximum payment terms.
     *
     * @summary Submit Invoice XML
     */
    SDK.prototype.postSubmitInvoiceXml = function (body, metadata) {
        return this.core.fetch('/v1/invoices', 'post', body, metadata);
    };
    /**
     * Get all the invoices linked to the application.
     *
     * @summary Gets all the invoices
     */
    SDK.prototype.getInvoices = function (metadata) {
        return this.core.fetch('/v1/invoices', 'get', metadata);
    };
    /**
     * Get information of an specific invoice.
     *
     * @summary Get Invoice
     */
    SDK.prototype.getInvoice = function (metadata) {
        return this.core.fetch('/v1/invoices/{invoiceId}', 'get', metadata);
    };
    /**
     * Get all the invoices linked to the application.
     *
     * @summary Gets all the invoices
     */
    SDK.prototype.getInvoicesOld = function (metadata) {
        return this.core.fetch('/v1/invoices-old', 'get', metadata);
    };
    return SDK;
}());
var createSDK = (function () { return new SDK(); })();
module.exports = createSDK;
