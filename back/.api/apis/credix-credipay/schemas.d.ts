declare const GetBuyer: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly taxId: {
                    readonly type: "string";
                    readonly examples: readonly ["67016116000009"];
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Tax Id of the buyer.";
                };
            };
            readonly required: readonly ["taxId"];
        }, {
            readonly type: "object";
            readonly properties: {
                readonly sellerTaxId: {
                    readonly type: "string";
                    readonly examples: readonly ["85661377000063"];
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Tax Id of the seller. It is used to filter the seller configurations defined for the buyer. If not provided the seller configurations for all sellers linked to the application are returned.";
                };
            };
            readonly required: readonly [];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly taxId: {
                    readonly type: "string";
                    readonly description: "The tax ID of the company";
                    readonly examples: readonly ["70631413000079"];
                };
                readonly name: {
                    readonly type: "string";
                    readonly description: "Company's name.";
                    readonly examples: readonly ["ACME ltda."];
                };
                readonly sellerConfigs: {
                    readonly description: "Seller configurations for the buyer.";
                    readonly type: "array";
                    readonly items: {
                        readonly type: "object";
                        readonly properties: {
                            readonly taxId: {
                                readonly type: "string";
                                readonly description: "Seller's tax ID";
                                readonly examples: readonly ["82356350000079"];
                            };
                            readonly maxPaymentTermDays: {
                                readonly type: "number";
                                readonly description: "The maximum payment term days.";
                                readonly examples: readonly [30];
                            };
                            readonly monthlyDiscountRate: {
                                readonly type: "number";
                                readonly description: "Monthly discount rate";
                                readonly examples: readonly [0.03];
                            };
                            readonly transactionFeePercentage: {
                                readonly type: "number";
                                readonly description: "Transaction fee percentage";
                                readonly examples: readonly [0.02];
                            };
                        };
                        readonly required: readonly ["taxId", "maxPaymentTermDays", "monthlyDiscountRate", "transactionFeePercentage"];
                    };
                };
                readonly creditLimitAmountCents: {
                    readonly type: "number";
                    readonly description: "Total credit limit in cents";
                    readonly examples: readonly [1020000];
                };
                readonly availableCreditLimitAmountCents: {
                    readonly type: "number";
                    readonly description: "Available credit limit in cents";
                    readonly examples: readonly [820000];
                };
                readonly onboarded: {
                    readonly type: "boolean";
                    readonly description: "Whether or not the buyer has completed the onboarding";
                    readonly examples: readonly [false];
                };
                readonly eligible: {
                    readonly type: "boolean";
                    readonly description: "Whether or not the buyer is eligible for credit";
                    readonly examples: readonly [false];
                };
            };
            readonly required: readonly ["taxId", "name", "sellerConfigs", "creditLimitAmountCents", "availableCreditLimitAmountCents", "onboarded", "eligible"];
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const GetBuyers: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly sellerTaxId: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Tax Id of the seller. It is used to filter the seller configurations defined for each buyer. If not provided the seller configurations for all sellers linked to the application are returned.";
                };
            };
            readonly required: readonly [];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly type: "array";
            readonly items: {
                readonly type: "object";
                readonly properties: {
                    readonly taxId: {
                        readonly type: "string";
                        readonly description: "The tax ID of the company";
                        readonly examples: readonly ["70631413000079"];
                    };
                    readonly name: {
                        readonly type: "string";
                        readonly description: "Company's name.";
                        readonly examples: readonly ["ACME ltda."];
                    };
                    readonly sellerConfigs: {
                        readonly description: "Seller configurations for the buyer.";
                        readonly type: "array";
                        readonly items: {
                            readonly type: "object";
                            readonly properties: {
                                readonly taxId: {
                                    readonly type: "string";
                                    readonly description: "Seller's tax ID";
                                    readonly examples: readonly ["82356350000079"];
                                };
                                readonly maxPaymentTermDays: {
                                    readonly type: "number";
                                    readonly description: "The maximum payment term days.";
                                    readonly examples: readonly [30];
                                };
                                readonly monthlyDiscountRate: {
                                    readonly type: "number";
                                    readonly description: "Monthly discount rate";
                                    readonly examples: readonly [0.03];
                                };
                                readonly transactionFeePercentage: {
                                    readonly type: "number";
                                    readonly description: "Transaction fee percentage";
                                    readonly examples: readonly [0.02];
                                };
                            };
                            readonly required: readonly ["taxId", "maxPaymentTermDays", "monthlyDiscountRate", "transactionFeePercentage"];
                        };
                    };
                    readonly creditLimitAmountCents: {
                        readonly type: "number";
                        readonly description: "Total credit limit in cents";
                        readonly examples: readonly [1020000];
                    };
                    readonly availableCreditLimitAmountCents: {
                        readonly type: "number";
                        readonly description: "Available credit limit in cents";
                        readonly examples: readonly [820000];
                    };
                    readonly onboarded: {
                        readonly type: "boolean";
                        readonly description: "Whether or not the buyer has completed the onboarding";
                        readonly examples: readonly [false];
                    };
                    readonly eligible: {
                        readonly type: "boolean";
                        readonly description: "Whether or not the buyer is eligible for credit";
                        readonly examples: readonly [false];
                    };
                };
                readonly required: readonly ["taxId", "name", "sellerConfigs", "creditLimitAmountCents", "availableCreditLimitAmountCents", "onboarded", "eligible"];
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const GetInvoice: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly invoiceId: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Id of the invoice";
                };
            };
            readonly required: readonly ["invoiceId"];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly id: {
                    readonly type: "string";
                    readonly description: "Credipay's internal invoice ID. UUID v4 format.";
                    readonly examples: readonly ["46dd63dd-1be4-4658-8deb-fa5dc578ad0b"];
                };
                readonly invoiceNumber: {
                    readonly type: "string";
                    readonly description: "Invoice number. Extracted from the NF-e.";
                    readonly examples: readonly ["NFe35240341264992000141550010000007431018280440"];
                };
                readonly dueDate: {
                    readonly type: "string";
                    readonly description: "Invoice due date in ISO 8601 format. In the case of multiple installments, this is the due date of the last installment.";
                    readonly examples: readonly ["2024-02-29T00:00:00.000Z"];
                };
                readonly issuanceDate: {
                    readonly type: "string";
                    readonly description: "Invoice issuance date in ISO 8601 format. Extracted from the NF-e.";
                    readonly examples: readonly ["2024-02-29T00:00:00.000Z"];
                };
                readonly originalFaceValueCents: {
                    readonly type: "number";
                    readonly description: "Invoice face value cents.";
                    readonly examples: readonly [10000];
                };
                readonly faceValueCents: {
                    readonly type: "number";
                    readonly description: "Invoice face value cents.";
                    readonly deprecated: true;
                    readonly examples: readonly [10000];
                };
                readonly currentFaceValueCents: {
                    readonly type: "number";
                    readonly description: "Invoice face value cents.";
                    readonly examples: readonly [10000];
                };
                readonly refundAmountCents: {
                    readonly type: "number";
                    readonly description: "Refund value cents.";
                    readonly examples: readonly [10000];
                };
                readonly refundStatus: {
                    readonly type: "string";
                    readonly description: "Refund status.\n\n`NoRefund` `PartialRefund` `FullRefund`";
                    readonly enum: readonly ["NoRefund", "PartialRefund", "FullRefund"];
                    readonly examples: readonly ["NoRefund"];
                };
                readonly installments: {
                    readonly description: "Invoice installments.";
                    readonly type: "array";
                    readonly items: {
                        readonly type: "object";
                        readonly properties: {
                            readonly id: {
                                readonly type: "string";
                                readonly description: "Installment ID.";
                                readonly examples: readonly ["f56ac4ff-4a1f-471d-ba14-e22c64bc769c"];
                            };
                            readonly status: {
                                readonly type: "string";
                                readonly description: "Installment status.\n\n`Created` `Settled` `FundingSuccess`";
                                readonly enum: readonly ["Created", "Settled", "FundingSuccess"];
                                readonly examples: readonly ["FundingSuccess"];
                            };
                            readonly faceValueCents: {
                                readonly type: "number";
                                readonly description: "Face value cents.";
                                readonly examples: readonly [10000];
                            };
                            readonly fundedAt: {
                                readonly type: "object";
                                readonly description: "Funded date in ISO 8601 format. Defaults to null if the installment has yet to be funded.";
                                readonly examples: readonly ["2024-02-20T00:00:00.000Z"];
                                readonly additionalProperties: true;
                            };
                            readonly settledAt: {
                                readonly type: "object";
                                readonly description: "Settled date in ISO 8601 format. Defaults to null if the installment has yet to be settled.";
                                readonly examples: readonly ["2024-02-20T00:00:00.000Z"];
                                readonly additionalProperties: true;
                            };
                            readonly disbursedAmountCents: {
                                readonly type: "number";
                                readonly description: "Disbursed amount cents. Defaults to 0 if no disbursement has been made.";
                                readonly default: 0;
                                readonly examples: readonly [10000];
                            };
                            readonly refundAmountCents: {
                                readonly type: "number";
                                readonly description: "Refund value cents.";
                                readonly examples: readonly [10000];
                            };
                            readonly refundStatus: {
                                readonly type: "string";
                                readonly description: "Refund status.\n\n`NoRefund` `PartialRefund` `FullRefund`";
                                readonly enum: readonly ["NoRefund", "PartialRefund", "FullRefund"];
                                readonly examples: readonly ["NoRefund"];
                            };
                            readonly latestRefundDate: {
                                readonly type: "object";
                                readonly description: "Latest refund date in ISO 8601 format. Defaults to null if the installment has not been refunded.";
                                readonly examples: readonly ["2024-02-20T00:00:00.000Z"];
                                readonly additionalProperties: true;
                            };
                            readonly maturityDate: {
                                readonly type: "string";
                                readonly description: "Maturity date in ISO 8601 format.";
                                readonly examples: readonly ["2024-02-29T00:00:00.000Z"];
                            };
                        };
                        readonly required: readonly ["id", "status", "faceValueCents", "fundedAt", "settledAt", "disbursedAmountCents", "refundAmountCents", "refundStatus", "latestRefundDate", "maturityDate"];
                    };
                };
                readonly repayments: {
                    readonly description: "Invoice repayments.";
                    readonly type: "array";
                    readonly items: {
                        readonly type: "object";
                        readonly properties: {
                            readonly id: {
                                readonly type: "string";
                                readonly description: "Repayment ID.";
                                readonly examples: readonly ["f56ac4ff-4a1f-471d-ba14-e22c64bc769c"];
                            };
                            readonly status: {
                                readonly type: "string";
                                readonly description: "repayment status.\n\n`open` `paid` `restructured` `renegotiated`";
                                readonly enum: readonly ["open", "paid", "restructured", "renegotiated"];
                                readonly examples: readonly ["open"];
                            };
                            readonly amount: {
                                readonly type: "number";
                                readonly description: "Amount value cents.";
                                readonly examples: readonly [10000];
                            };
                            readonly dueDate: {
                                readonly type: "string";
                                readonly description: "Invoice due date in ISO 8601 format. In the case of multiple installments, this is the due date of the last installment.";
                                readonly examples: readonly ["2024-02-29T00:00:00.000Z"];
                            };
                            readonly pdfURL: {
                                readonly type: "object";
                                readonly description: "Repayment PDF URL";
                                readonly examples: readonly ["https://pdfurl.com"];
                                readonly additionalProperties: true;
                            };
                        };
                        readonly required: readonly ["id", "status", "amount", "dueDate", "pdfURL"];
                    };
                };
                readonly order: {
                    readonly description: "The order associated with this invoice";
                    readonly type: "object";
                    readonly required: readonly ["id", "externalId", "status"];
                    readonly properties: {
                        readonly id: {
                            readonly type: "string";
                            readonly description: "CrediPay's internal order ID.";
                            readonly examples: readonly ["46dd63dd-1be4-4658-8deb-fa5dc578ad0b"];
                        };
                        readonly externalId: {
                            readonly type: "string";
                            readonly description: "Seller's internal order ID.";
                            readonly examples: readonly ["REF-10230456"];
                        };
                        readonly status: {
                            readonly type: "string";
                            readonly description: "Order status.\n\n`new` `created` `accepted` `cancelled` `rejected` `finalized` `captured` `expired` `invalidated`";
                            readonly enum: readonly ["new", "created", "accepted", "cancelled", "rejected", "finalized", "captured", "expired", "invalidated"];
                            readonly examples: readonly ["created"];
                        };
                    };
                };
                readonly payer: {
                    readonly description: "The payer of the invoice";
                    readonly type: "object";
                    readonly required: readonly ["name", "taxId"];
                    readonly properties: {
                        readonly name: {
                            readonly type: "string";
                            readonly description: "Payer company name.";
                            readonly examples: readonly ["Aurora Soluções Ltda."];
                        };
                        readonly taxId: {
                            readonly type: "string";
                            readonly description: "Payer tax ID.";
                            readonly examples: readonly ["73.682.637/0000-06"];
                        };
                    };
                };
            };
            readonly required: readonly ["id", "invoiceNumber", "dueDate", "issuanceDate", "originalFaceValueCents", "faceValueCents", "currentFaceValueCents", "refundAmountCents", "refundStatus", "installments", "repayments", "order", "payer"];
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const GetInvoices: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly orderId: {
                    readonly type: "string";
                    readonly examples: readonly ["46dd63dd-1be4-4658-8deb-fa5dc578ad0b"];
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Returns invoices with the provided order id.";
                };
                readonly externalId: {
                    readonly type: "string";
                    readonly examples: readonly ["REF-10230456"];
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Returns invoices with the provided external id.";
                };
                readonly invoiceNumber: {
                    readonly type: "string";
                    readonly examples: readonly ["Invoice-123456"];
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Returns invoices with the provided invoice number.";
                };
                readonly updatedAfter: {
                    readonly default: "2024-02-05T00:00:00Z";
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Updated after UTC date in ISO 8601 format.";
                };
            };
            readonly required: readonly [];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly type: "array";
            readonly items: {
                readonly type: "object";
                readonly properties: {
                    readonly id: {
                        readonly type: "string";
                        readonly description: "Credipay's internal invoice ID. UUID v4 format.";
                        readonly examples: readonly ["46dd63dd-1be4-4658-8deb-fa5dc578ad0b"];
                    };
                    readonly invoiceNumber: {
                        readonly type: "string";
                        readonly description: "Invoice number. Extracted from the NF-e.";
                        readonly examples: readonly ["NFe35240341264992000141550010000007431018280440"];
                    };
                    readonly dueDate: {
                        readonly type: "string";
                        readonly description: "Invoice due date in ISO 8601 format. In the case of multiple installments, this is the due date of the last installment.";
                        readonly examples: readonly ["2024-02-29T00:00:00.000Z"];
                    };
                    readonly issuanceDate: {
                        readonly type: "string";
                        readonly description: "Invoice issuance date in ISO 8601 format. Extracted from the NF-e.";
                        readonly examples: readonly ["2024-02-29T00:00:00.000Z"];
                    };
                    readonly originalFaceValueCents: {
                        readonly type: "number";
                        readonly description: "Invoice face value cents.";
                        readonly examples: readonly [10000];
                    };
                    readonly faceValueCents: {
                        readonly type: "number";
                        readonly description: "Invoice face value cents.";
                        readonly deprecated: true;
                        readonly examples: readonly [10000];
                    };
                    readonly currentFaceValueCents: {
                        readonly type: "number";
                        readonly description: "Invoice face value cents.";
                        readonly examples: readonly [10000];
                    };
                    readonly refundAmountCents: {
                        readonly type: "number";
                        readonly description: "Refund value cents.";
                        readonly examples: readonly [10000];
                    };
                    readonly refundStatus: {
                        readonly type: "string";
                        readonly description: "Refund status.\n\n`NoRefund` `PartialRefund` `FullRefund`";
                        readonly enum: readonly ["NoRefund", "PartialRefund", "FullRefund"];
                        readonly examples: readonly ["NoRefund"];
                    };
                    readonly installments: {
                        readonly description: "Invoice installments.";
                        readonly type: "array";
                        readonly items: {
                            readonly type: "object";
                            readonly properties: {
                                readonly id: {
                                    readonly type: "string";
                                    readonly description: "Installment ID.";
                                    readonly examples: readonly ["f56ac4ff-4a1f-471d-ba14-e22c64bc769c"];
                                };
                                readonly status: {
                                    readonly type: "string";
                                    readonly description: "Installment status.\n\n`Created` `Settled` `FundingSuccess`";
                                    readonly enum: readonly ["Created", "Settled", "FundingSuccess"];
                                    readonly examples: readonly ["FundingSuccess"];
                                };
                                readonly faceValueCents: {
                                    readonly type: "number";
                                    readonly description: "Face value cents.";
                                    readonly examples: readonly [10000];
                                };
                                readonly fundedAt: {
                                    readonly type: "object";
                                    readonly description: "Funded date in ISO 8601 format. Defaults to null if the installment has yet to be funded.";
                                    readonly examples: readonly ["2024-02-20T00:00:00.000Z"];
                                    readonly additionalProperties: true;
                                };
                                readonly settledAt: {
                                    readonly type: "object";
                                    readonly description: "Settled date in ISO 8601 format. Defaults to null if the installment has yet to be settled.";
                                    readonly examples: readonly ["2024-02-20T00:00:00.000Z"];
                                    readonly additionalProperties: true;
                                };
                                readonly disbursedAmountCents: {
                                    readonly type: "number";
                                    readonly description: "Disbursed amount cents. Defaults to 0 if no disbursement has been made.";
                                    readonly default: 0;
                                    readonly examples: readonly [10000];
                                };
                                readonly refundAmountCents: {
                                    readonly type: "number";
                                    readonly description: "Refund value cents.";
                                    readonly examples: readonly [10000];
                                };
                                readonly refundStatus: {
                                    readonly type: "string";
                                    readonly description: "Refund status.\n\n`NoRefund` `PartialRefund` `FullRefund`";
                                    readonly enum: readonly ["NoRefund", "PartialRefund", "FullRefund"];
                                    readonly examples: readonly ["NoRefund"];
                                };
                                readonly latestRefundDate: {
                                    readonly type: "object";
                                    readonly description: "Latest refund date in ISO 8601 format. Defaults to null if the installment has not been refunded.";
                                    readonly examples: readonly ["2024-02-20T00:00:00.000Z"];
                                    readonly additionalProperties: true;
                                };
                                readonly maturityDate: {
                                    readonly type: "string";
                                    readonly description: "Maturity date in ISO 8601 format.";
                                    readonly examples: readonly ["2024-02-29T00:00:00.000Z"];
                                };
                            };
                            readonly required: readonly ["id", "status", "faceValueCents", "fundedAt", "settledAt", "disbursedAmountCents", "refundAmountCents", "refundStatus", "latestRefundDate", "maturityDate"];
                        };
                    };
                    readonly repayments: {
                        readonly description: "Invoice repayments.";
                        readonly type: "array";
                        readonly items: {
                            readonly type: "object";
                            readonly properties: {
                                readonly id: {
                                    readonly type: "string";
                                    readonly description: "Repayment ID.";
                                    readonly examples: readonly ["f56ac4ff-4a1f-471d-ba14-e22c64bc769c"];
                                };
                                readonly status: {
                                    readonly type: "string";
                                    readonly description: "repayment status.\n\n`open` `paid` `restructured` `renegotiated`";
                                    readonly enum: readonly ["open", "paid", "restructured", "renegotiated"];
                                    readonly examples: readonly ["open"];
                                };
                                readonly amount: {
                                    readonly type: "number";
                                    readonly description: "Amount value cents.";
                                    readonly examples: readonly [10000];
                                };
                                readonly dueDate: {
                                    readonly type: "string";
                                    readonly description: "Invoice due date in ISO 8601 format. In the case of multiple installments, this is the due date of the last installment.";
                                    readonly examples: readonly ["2024-02-29T00:00:00.000Z"];
                                };
                                readonly pdfURL: {
                                    readonly type: "object";
                                    readonly description: "Repayment PDF URL";
                                    readonly examples: readonly ["https://pdfurl.com"];
                                    readonly additionalProperties: true;
                                };
                            };
                            readonly required: readonly ["id", "status", "amount", "dueDate", "pdfURL"];
                        };
                    };
                    readonly order: {
                        readonly description: "The order associated with this invoice";
                        readonly type: "object";
                        readonly required: readonly ["id", "externalId", "status"];
                        readonly properties: {
                            readonly id: {
                                readonly type: "string";
                                readonly description: "CrediPay's internal order ID.";
                                readonly examples: readonly ["46dd63dd-1be4-4658-8deb-fa5dc578ad0b"];
                            };
                            readonly externalId: {
                                readonly type: "string";
                                readonly description: "Seller's internal order ID.";
                                readonly examples: readonly ["REF-10230456"];
                            };
                            readonly status: {
                                readonly type: "string";
                                readonly description: "Order status.\n\n`new` `created` `accepted` `cancelled` `rejected` `finalized` `captured` `expired` `invalidated`";
                                readonly enum: readonly ["new", "created", "accepted", "cancelled", "rejected", "finalized", "captured", "expired", "invalidated"];
                                readonly examples: readonly ["created"];
                            };
                        };
                    };
                    readonly payer: {
                        readonly description: "The payer of the invoice";
                        readonly type: "object";
                        readonly required: readonly ["name", "taxId"];
                        readonly properties: {
                            readonly name: {
                                readonly type: "string";
                                readonly description: "Payer company name.";
                                readonly examples: readonly ["Aurora Soluções Ltda."];
                            };
                            readonly taxId: {
                                readonly type: "string";
                                readonly description: "Payer tax ID.";
                                readonly examples: readonly ["73.682.637/0000-06"];
                            };
                        };
                    };
                };
                readonly required: readonly ["id", "invoiceNumber", "dueDate", "issuanceDate", "originalFaceValueCents", "faceValueCents", "currentFaceValueCents", "refundAmountCents", "refundStatus", "installments", "repayments", "order", "payer"];
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const GetInvoicesOld: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly orderId: {
                    readonly type: "string";
                    readonly examples: readonly ["46dd63dd-1be4-4658-8deb-fa5dc578ad0b"];
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Returns invoices with the provided order id.";
                };
                readonly externalId: {
                    readonly type: "string";
                    readonly examples: readonly ["REF-10230456"];
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Returns invoices with the provided external id.";
                };
                readonly invoiceNumber: {
                    readonly type: "string";
                    readonly examples: readonly ["Invoice-123456"];
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Returns invoices with the provided invoice number.";
                };
                readonly updatedAfter: {
                    readonly default: "2024-02-05T00:00:00Z";
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Updated after UTC date in ISO 8601 format.";
                };
            };
            readonly required: readonly [];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly type: "array";
            readonly items: {
                readonly type: "object";
                readonly properties: {
                    readonly id: {
                        readonly type: "string";
                        readonly description: "Credipay's internal invoice ID. UUID v4 format.";
                        readonly examples: readonly ["46dd63dd-1be4-4658-8deb-fa5dc578ad0b"];
                    };
                    readonly invoiceNumber: {
                        readonly type: "string";
                        readonly description: "Invoice number. Extracted from the NF-e.";
                        readonly examples: readonly ["NFe35240341264992000141550010000007431018280440"];
                    };
                    readonly dueDate: {
                        readonly type: "string";
                        readonly description: "Invoice due date in ISO 8601 format. In the case of multiple installments, this is the due date of the last installment.";
                        readonly examples: readonly ["2024-02-29T00:00:00.000Z"];
                    };
                    readonly issuanceDate: {
                        readonly type: "string";
                        readonly description: "Invoice issuance date in ISO 8601 format. Extracted from the NF-e.";
                        readonly examples: readonly ["2024-02-29T00:00:00.000Z"];
                    };
                    readonly originalFaceValueCents: {
                        readonly type: "number";
                        readonly description: "Invoice face value cents.";
                        readonly examples: readonly [10000];
                    };
                    readonly faceValueCents: {
                        readonly type: "number";
                        readonly description: "Invoice face value cents.";
                        readonly deprecated: true;
                        readonly examples: readonly [10000];
                    };
                    readonly currentFaceValueCents: {
                        readonly type: "number";
                        readonly description: "Invoice face value cents.";
                        readonly examples: readonly [10000];
                    };
                    readonly refundAmountCents: {
                        readonly type: "number";
                        readonly description: "Refund value cents.";
                        readonly examples: readonly [10000];
                    };
                    readonly refundStatus: {
                        readonly type: "string";
                        readonly description: "Refund status.\n\n`NoRefund` `PartialRefund` `FullRefund`";
                        readonly enum: readonly ["NoRefund", "PartialRefund", "FullRefund"];
                        readonly examples: readonly ["NoRefund"];
                    };
                    readonly installments: {
                        readonly description: "Invoice installments.";
                        readonly type: "array";
                        readonly items: {
                            readonly type: "object";
                            readonly properties: {
                                readonly id: {
                                    readonly type: "string";
                                    readonly description: "Installment ID.";
                                    readonly examples: readonly ["f56ac4ff-4a1f-471d-ba14-e22c64bc769c"];
                                };
                                readonly status: {
                                    readonly type: "string";
                                    readonly description: "Installment status.\n\n`Created` `Settled` `FundingSuccess`";
                                    readonly enum: readonly ["Created", "Settled", "FundingSuccess"];
                                    readonly examples: readonly ["FundingSuccess"];
                                };
                                readonly faceValueCents: {
                                    readonly type: "number";
                                    readonly description: "Face value cents.";
                                    readonly examples: readonly [10000];
                                };
                                readonly fundedAt: {
                                    readonly type: "object";
                                    readonly description: "Funded date in ISO 8601 format. Defaults to null if the installment has yet to be funded.";
                                    readonly examples: readonly ["2024-02-20T00:00:00.000Z"];
                                    readonly additionalProperties: true;
                                };
                                readonly settledAt: {
                                    readonly type: "object";
                                    readonly description: "Settled date in ISO 8601 format. Defaults to null if the installment has yet to be settled.";
                                    readonly examples: readonly ["2024-02-20T00:00:00.000Z"];
                                    readonly additionalProperties: true;
                                };
                                readonly disbursedAmountCents: {
                                    readonly type: "number";
                                    readonly description: "Disbursed amount cents. Defaults to 0 if no disbursement has been made.";
                                    readonly default: 0;
                                    readonly examples: readonly [10000];
                                };
                                readonly refundAmountCents: {
                                    readonly type: "number";
                                    readonly description: "Refund value cents.";
                                    readonly examples: readonly [10000];
                                };
                                readonly refundStatus: {
                                    readonly type: "string";
                                    readonly description: "Refund status.\n\n`NoRefund` `PartialRefund` `FullRefund`";
                                    readonly enum: readonly ["NoRefund", "PartialRefund", "FullRefund"];
                                    readonly examples: readonly ["NoRefund"];
                                };
                                readonly latestRefundDate: {
                                    readonly type: "object";
                                    readonly description: "Latest refund date in ISO 8601 format. Defaults to null if the installment has not been refunded.";
                                    readonly examples: readonly ["2024-02-20T00:00:00.000Z"];
                                    readonly additionalProperties: true;
                                };
                                readonly maturityDate: {
                                    readonly type: "string";
                                    readonly description: "Maturity date in ISO 8601 format.";
                                    readonly examples: readonly ["2024-02-29T00:00:00.000Z"];
                                };
                            };
                            readonly required: readonly ["id", "status", "faceValueCents", "fundedAt", "settledAt", "disbursedAmountCents", "refundAmountCents", "refundStatus", "latestRefundDate", "maturityDate"];
                        };
                    };
                    readonly repayments: {
                        readonly description: "Invoice repayments.";
                        readonly type: "array";
                        readonly items: {
                            readonly type: "object";
                            readonly properties: {
                                readonly id: {
                                    readonly type: "string";
                                    readonly description: "Repayment ID.";
                                    readonly examples: readonly ["f56ac4ff-4a1f-471d-ba14-e22c64bc769c"];
                                };
                                readonly status: {
                                    readonly type: "string";
                                    readonly description: "repayment status.\n\n`open` `paid` `restructured` `renegotiated`";
                                    readonly enum: readonly ["open", "paid", "restructured", "renegotiated"];
                                    readonly examples: readonly ["open"];
                                };
                                readonly amount: {
                                    readonly type: "number";
                                    readonly description: "Amount value cents.";
                                    readonly examples: readonly [10000];
                                };
                                readonly dueDate: {
                                    readonly type: "string";
                                    readonly description: "Invoice due date in ISO 8601 format. In the case of multiple installments, this is the due date of the last installment.";
                                    readonly examples: readonly ["2024-02-29T00:00:00.000Z"];
                                };
                                readonly pdfURL: {
                                    readonly type: "object";
                                    readonly description: "Repayment PDF URL";
                                    readonly examples: readonly ["https://pdfurl.com"];
                                    readonly additionalProperties: true;
                                };
                            };
                            readonly required: readonly ["id", "status", "amount", "dueDate", "pdfURL"];
                        };
                    };
                    readonly order: {
                        readonly description: "The order associated with this invoice";
                        readonly type: "object";
                        readonly required: readonly ["id", "externalId", "status"];
                        readonly properties: {
                            readonly id: {
                                readonly type: "string";
                                readonly description: "CrediPay's internal order ID.";
                                readonly examples: readonly ["46dd63dd-1be4-4658-8deb-fa5dc578ad0b"];
                            };
                            readonly externalId: {
                                readonly type: "string";
                                readonly description: "Seller's internal order ID.";
                                readonly examples: readonly ["REF-10230456"];
                            };
                            readonly status: {
                                readonly type: "string";
                                readonly description: "Order status.\n\n`new` `created` `accepted` `cancelled` `rejected` `finalized` `captured` `expired` `invalidated`";
                                readonly enum: readonly ["new", "created", "accepted", "cancelled", "rejected", "finalized", "captured", "expired", "invalidated"];
                                readonly examples: readonly ["created"];
                            };
                        };
                    };
                    readonly payer: {
                        readonly description: "The payer of the invoice";
                        readonly type: "object";
                        readonly required: readonly ["name", "taxId"];
                        readonly properties: {
                            readonly name: {
                                readonly type: "string";
                                readonly description: "Payer company name.";
                                readonly examples: readonly ["Aurora Soluções Ltda."];
                            };
                            readonly taxId: {
                                readonly type: "string";
                                readonly description: "Payer tax ID.";
                                readonly examples: readonly ["73.682.637/0000-06"];
                            };
                        };
                    };
                };
                readonly required: readonly ["id", "invoiceNumber", "dueDate", "issuanceDate", "originalFaceValueCents", "faceValueCents", "currentFaceValueCents", "refundAmountCents", "refundStatus", "installments", "repayments", "order", "payer"];
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const GetOrder: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly orderId: {
                    readonly type: "string";
                    readonly examples: readonly ["46dd63dd-1be4-4658-8deb-fa5dc578ad0b"];
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "CrediPay's internal order ID.";
                };
            };
            readonly required: readonly ["orderId"];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly id: {
                    readonly type: "string";
                    readonly description: "CrediPay's internal order ID.";
                    readonly examples: readonly ["46dd63dd-1be4-4658-8deb-fa5dc578ad0b"];
                };
                readonly externalId: {
                    readonly type: "string";
                    readonly description: "Internal order ID of the seller.";
                    readonly examples: readonly ["REF-10230456"];
                };
                readonly subtotalAmountCents: {
                    readonly type: "number";
                    readonly description: "The value of the order's goods and or services in cents.";
                    readonly examples: readonly [1020000];
                };
                readonly taxAmountCents: {
                    readonly type: "number";
                    readonly description: "Tax amount in cents.";
                    readonly examples: readonly [81600];
                };
                readonly shippingCostCents: {
                    readonly type: "number";
                    readonly description: "Shipping costs in cents.";
                    readonly examples: readonly [5000];
                };
                readonly buyerFeesCents: {
                    readonly type: "number";
                    readonly description: "This field will automatically be calculated. It will have a non-zero value when the seller is configured to charge fees to buyers. Note that this value is already included in the total amount cents.";
                    readonly examples: readonly [10978];
                };
                readonly totalAmountCents: {
                    readonly type: "number";
                    readonly description: "Total amount in cents. This amount includes buyer fees if applicable. The value of the to-be-created invoice should equal this amount.";
                    readonly examples: readonly [1117578];
                };
                readonly shippingLocation: {
                    readonly description: "Shipping location.";
                    readonly type: "object";
                    readonly required: readonly ["address1", "city", "region", "postalCode", "country"];
                    readonly properties: {
                        readonly address1: {
                            readonly type: "string";
                            readonly description: "Street address 1.";
                            readonly default: "Rua da Consolação, 930";
                        };
                        readonly address2: {
                            readonly type: "string";
                            readonly description: "Street address 2.";
                            readonly default: "Apto 101";
                        };
                        readonly city: {
                            readonly type: "string";
                            readonly description: "City.";
                            readonly default: "São Paulo";
                        };
                        readonly region: {
                            readonly type: "string";
                            readonly description: "Region.";
                            readonly default: "São Paulo";
                        };
                        readonly postalCode: {
                            readonly type: "string";
                            readonly description: "Postal code.";
                            readonly default: "01302000";
                        };
                        readonly country: {
                            readonly type: "string";
                            readonly description: "Country.";
                            readonly default: "Brazil";
                        };
                    };
                };
                readonly paymentTermDays: {
                    readonly type: "string";
                    readonly description: "Payment term in days. The maturity date of the to-be-created invoice should equal the payment term days added to the order creation date.";
                    readonly examples: readonly [30];
                };
                readonly status: {
                    readonly type: "string";
                    readonly description: "Order status.\n\n`new` `created` `accepted` `cancelled` `rejected` `finalized` `captured` `expired` `invalidated`";
                    readonly enum: readonly ["new", "created", "accepted", "cancelled", "rejected", "finalized", "captured", "expired", "invalidated"];
                    readonly examples: readonly ["finalized"];
                };
                readonly estimatedDeliveryDate: {
                    readonly type: "object";
                    readonly description: "Estimated delivery UTC date in ISO 8601 format.";
                    readonly examples: readonly ["2024-02-05T00:00:00Z"];
                    readonly additionalProperties: true;
                };
                readonly createdAt: {
                    readonly type: "string";
                    readonly description: "Creation UTC date in ISO 8601 format.";
                    readonly examples: readonly ["2024-02-01T00:00:00Z"];
                };
                readonly sellerTaxId: {
                    readonly type: "string";
                    readonly description: "Seller company tax ID.";
                    readonly examples: readonly ["15853054000096"];
                };
                readonly buyerTaxId: {
                    readonly type: "string";
                    readonly description: "Buyer company tax ID.";
                    readonly examples: readonly ["18360341000052"];
                };
                readonly noAdvancing: {
                    readonly type: "boolean";
                    readonly description: "No advancing";
                    readonly examples: readonly [false];
                };
                readonly installments: {
                    readonly description: "Installments for the order.";
                    readonly type: "array";
                    readonly items: {
                        readonly type: "object";
                        readonly properties: {
                            readonly maturityDate: {
                                readonly type: "string";
                                readonly description: "Installments Maturity Date.";
                                readonly default: "2024-02-10T00:00:00Z";
                            };
                            readonly faceValueCents: {
                                readonly type: "number";
                                readonly description: "Face value of the installment";
                                readonly default: 1020000;
                            };
                        };
                        readonly required: readonly ["maturityDate", "faceValueCents"];
                    };
                };
            };
            readonly required: readonly ["id", "externalId", "subtotalAmountCents", "taxAmountCents", "shippingCostCents", "buyerFeesCents", "totalAmountCents", "paymentTermDays", "status", "estimatedDeliveryDate", "createdAt", "sellerTaxId", "buyerTaxId", "noAdvancing", "installments"];
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const GetOrderDocuments: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly orderId: {
                    readonly type: "string";
                    readonly examples: readonly ["46dd63dd-1be4-4658-8deb-fa5dc578ad0b"];
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "CrediPay's internal order ID.";
                };
            };
            readonly required: readonly ["orderId"];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly orderId: {
                    readonly type: "string";
                    readonly description: "Order ID.";
                    readonly examples: readonly ["46dd63dd-1be4-4658-8deb-fa5dc578ad0b"];
                };
                readonly documents: {
                    readonly description: "Order documents.";
                    readonly type: "array";
                    readonly items: {
                        readonly type: "object";
                        readonly properties: {
                            readonly metaData: {
                                readonly description: "Document metadata";
                                readonly type: "object";
                                readonly required: readonly ["documentType", "assetId", "asset", "repayment"];
                                readonly properties: {
                                    readonly documentType: {
                                        readonly type: "string";
                                        readonly description: "Document type\n\n`PixInvoice` `Boleto`";
                                        readonly enum: readonly ["PixInvoice", "Boleto"];
                                        readonly examples: readonly ["Boleto"];
                                    };
                                    readonly assetId: {
                                        readonly type: "string";
                                        readonly description: "Asset ID";
                                        readonly deprecated: true;
                                    };
                                    readonly asset: {
                                        readonly description: "Asset metadata";
                                        readonly type: "object";
                                        readonly required: readonly ["id", "maturityDate", "faceValueCents"];
                                        readonly properties: {
                                            readonly id: {
                                                readonly type: "string";
                                                readonly description: "Asset ID";
                                                readonly examples: readonly ["9a25c2b5-bf6d-4e23-90e5-65fa3ec2dc38"];
                                            };
                                            readonly maturityDate: {
                                                readonly type: "string";
                                                readonly description: "Asset maturity date in ISO 8601 format";
                                                readonly examples: readonly ["2024-02-29T00:00:00.000Z"];
                                            };
                                            readonly faceValueCents: {
                                                readonly type: "number";
                                                readonly description: "Asset face value in cents";
                                                readonly examples: readonly [1020000];
                                            };
                                        };
                                    };
                                    readonly repayment: {
                                        readonly description: "Repayment metadata";
                                        readonly type: "object";
                                        readonly required: readonly ["id", "status", "amount", "dueDate", "pdfURL"];
                                        readonly properties: {
                                            readonly id: {
                                                readonly type: "string";
                                                readonly description: "Repayment ID.";
                                                readonly examples: readonly ["f56ac4ff-4a1f-471d-ba14-e22c64bc769c"];
                                            };
                                            readonly status: {
                                                readonly type: "string";
                                                readonly description: "repayment status.\n\n`open` `paid` `restructured` `renegotiated`";
                                                readonly enum: readonly ["open", "paid", "restructured", "renegotiated"];
                                                readonly examples: readonly ["open"];
                                            };
                                            readonly amount: {
                                                readonly type: "number";
                                                readonly description: "Amount value cents.";
                                                readonly examples: readonly [10000];
                                            };
                                            readonly dueDate: {
                                                readonly type: "string";
                                                readonly description: "Invoice due date in ISO 8601 format. In the case of multiple installments, this is the due date of the last installment.";
                                                readonly examples: readonly ["2024-02-29T00:00:00.000Z"];
                                            };
                                            readonly pdfURL: {
                                                readonly type: "object";
                                                readonly description: "Repayment PDF URL";
                                                readonly examples: readonly ["https://pdfurl.com"];
                                                readonly additionalProperties: true;
                                            };
                                        };
                                    };
                                };
                            };
                            readonly link: {
                                readonly type: "object";
                                readonly description: "Document link";
                                readonly examples: readonly ["https://example.com/document.pdf"];
                                readonly additionalProperties: true;
                            };
                            readonly createdAt: {
                                readonly format: "date-time";
                                readonly type: "string";
                                readonly description: "Document creation date";
                                readonly examples: readonly ["2024-02-29T00:00:00.000Z"];
                            };
                        };
                        readonly required: readonly ["metaData", "link", "createdAt"];
                    };
                };
            };
            readonly required: readonly ["orderId", "documents"];
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const ListInstallments: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly status: {
                    readonly enum: readonly ["Created", "IssuancePending", "IssuancePendingRetry", "IssuanceFailed", "IssuanceSuccess", "Ineligible", "Eligible", "AcquisitionPending", "AcquisitionSuccess", "AcquisitionFailed", "FundingPending", "FundingSuccess", "FundingFailed", "Settled"];
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Status of the installments to filter by.";
                };
                readonly assetStatus: {
                    readonly enum: readonly ["Created", "IssuancePending", "IssuancePendingRetry", "IssuanceFailed", "IssuanceSuccess", "AcquisitionPending", "AcquisitionSuccess", "AcquisitionFailed", "Advanced", "NotAdvanced", "Canceled", "Recourse"];
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "assetStatus Status of the installments to filter by.";
                };
                readonly collectionStatus: {
                    readonly enum: readonly ["Open", "Repaid", "Settled", "Default", "Canceled"];
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Collection Status of the installments to filter by.";
                };
                readonly settledAtFromDate: {
                    readonly type: "string";
                    readonly examples: readonly ["2024-02-29T00:00:00.000Z"];
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Filter installments (assets) settled after this date. Can be used together with settledAtToDate to query a date-range.";
                };
                readonly settledAtToDate: {
                    readonly type: "string";
                    readonly examples: readonly ["2024-02-29T00:00:00.000Z"];
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Filter installments (assets) settled before this date. Can be used together with settledAtFromDate to query a date-range";
                };
            };
            readonly required: readonly [];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly type: "array";
            readonly items: {
                readonly type: "object";
                readonly properties: {
                    readonly id: {
                        readonly type: "string";
                        readonly description: "Credipay's internal installment (asset) ID. UUID v4 format.";
                        readonly examples: readonly ["46dd63dd-1be4-4658-8deb-fa5dc578ad0b"];
                    };
                    readonly faceValueCents: {
                        readonly type: "number";
                        readonly description: "Installment (asset) face value in cents.";
                        readonly examples: readonly [1020000];
                    };
                    readonly status: {
                        readonly type: "string";
                        readonly description: "Installment (asset) status. Use assetStatus instead.\n\n`Created` `IssuancePending` `IssuancePendingRetry` `IssuanceFailed` `IssuanceSuccess` `Ineligible` `Eligible` `AcquisitionPending` `AcquisitionSuccess` `AcquisitionFailed` `FundingPending` `FundingSuccess` `FundingFailed` `Settled`";
                        readonly enum: readonly ["Created", "IssuancePending", "IssuancePendingRetry", "IssuanceFailed", "IssuanceSuccess", "Ineligible", "Eligible", "AcquisitionPending", "AcquisitionSuccess", "AcquisitionFailed", "FundingPending", "FundingSuccess", "FundingFailed", "Settled"];
                        readonly deprecated: true;
                        readonly examples: readonly ["FundingSuccess"];
                    };
                    readonly assetStatus: {
                        readonly type: "string";
                        readonly description: "Installment (asset) state.\n\n`Created` `IssuancePending` `IssuancePendingRetry` `IssuanceFailed` `IssuanceSuccess` `AcquisitionPending` `AcquisitionSuccess` `AcquisitionFailed` `Advanced` `NotAdvanced` `Canceled` `Recourse`";
                        readonly enum: readonly ["Created", "IssuancePending", "IssuancePendingRetry", "IssuanceFailed", "IssuanceSuccess", "AcquisitionPending", "AcquisitionSuccess", "AcquisitionFailed", "Advanced", "NotAdvanced", "Canceled", "Recourse"];
                        readonly examples: readonly ["Advanced"];
                    };
                    readonly collectionStatus: {
                        readonly type: "string";
                        readonly description: "Installment (asset) collection status.\n\n`Open` `Repaid` `Settled` `Default` `Canceled`";
                        readonly enum: readonly ["Open", "Repaid", "Settled", "Default", "Canceled"];
                        readonly examples: readonly ["Open"];
                    };
                    readonly refundAmountCents: {
                        readonly type: "number";
                        readonly description: "Refund value cents.";
                        readonly examples: readonly [10000];
                    };
                    readonly refundStatus: {
                        readonly type: "string";
                        readonly description: "Refund status.\n\n`NoRefund` `PartialRefund` `FullRefund`";
                        readonly enum: readonly ["NoRefund", "PartialRefund", "FullRefund"];
                        readonly examples: readonly ["NoRefund"];
                    };
                    readonly settledAt: {
                        readonly format: "date-time";
                        readonly type: "string";
                        readonly description: "The date, in UTC ISO 8601 format, when the amounts were paid to CrediPay.";
                        readonly examples: readonly ["2024-02-29T00:00:00.000Z"];
                    };
                    readonly maturityDate: {
                        readonly format: "date-time";
                        readonly type: "string";
                        readonly description: "The date, in UTC ISO 8601 format, when the asset is expected to be paid.";
                        readonly examples: readonly ["2024-03-20T00:00:00.000Z"];
                    };
                    readonly invoice: {
                        readonly description: "The invoice that originated this installment (asset)";
                        readonly type: "object";
                        readonly required: readonly ["invoiceNumber"];
                        readonly properties: {
                            readonly invoiceNumber: {
                                readonly type: "string";
                                readonly description: "Invoice number. It can be the seller's internal invoice ID.";
                                readonly examples: readonly ["NFe51240530460444000170550010000001971976454382"];
                            };
                        };
                    };
                };
                readonly required: readonly ["id", "faceValueCents", "status", "assetStatus", "collectionStatus", "refundAmountCents", "refundStatus", "maturityDate", "invoice"];
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const ListInstallmentsDeprecated: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly status: {
                    readonly enum: readonly ["Created", "IssuancePending", "IssuancePendingRetry", "IssuanceFailed", "IssuanceSuccess", "Ineligible", "Eligible", "AcquisitionPending", "AcquisitionSuccess", "AcquisitionFailed", "FundingPending", "FundingSuccess", "FundingFailed", "Settled"];
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Status of the installments to filter by.";
                };
                readonly assetStatus: {
                    readonly enum: readonly ["Created", "IssuancePending", "IssuancePendingRetry", "IssuanceFailed", "IssuanceSuccess", "AcquisitionPending", "AcquisitionSuccess", "AcquisitionFailed", "Advanced", "NotAdvanced", "Canceled", "Recourse"];
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "assetStatus Status of the installments to filter by.";
                };
                readonly collectionStatus: {
                    readonly enum: readonly ["Open", "Repaid", "Settled", "Default", "Canceled"];
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Collection Status of the installments to filter by.";
                };
                readonly settledAtFromDate: {
                    readonly type: "string";
                    readonly examples: readonly ["2024-02-29T00:00:00.000Z"];
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Filter installments (assets) settled after this date. Can be used together with settledAtToDate to query a date-range.";
                };
                readonly settledAtToDate: {
                    readonly type: "string";
                    readonly examples: readonly ["2024-02-29T00:00:00.000Z"];
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Filter installments (assets) settled before this date. Can be used together with settledAtFromDate to query a date-range";
                };
            };
            readonly required: readonly [];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly type: "array";
            readonly items: {
                readonly type: "object";
                readonly properties: {
                    readonly id: {
                        readonly type: "string";
                        readonly description: "Credipay's internal installment (asset) ID. UUID v4 format.";
                        readonly examples: readonly ["46dd63dd-1be4-4658-8deb-fa5dc578ad0b"];
                    };
                    readonly faceValueCents: {
                        readonly type: "number";
                        readonly description: "Installment (asset) face value in cents.";
                        readonly examples: readonly [1020000];
                    };
                    readonly status: {
                        readonly type: "string";
                        readonly description: "Installment (asset) status. Use assetStatus instead.\n\n`Created` `IssuancePending` `IssuancePendingRetry` `IssuanceFailed` `IssuanceSuccess` `Ineligible` `Eligible` `AcquisitionPending` `AcquisitionSuccess` `AcquisitionFailed` `FundingPending` `FundingSuccess` `FundingFailed` `Settled`";
                        readonly enum: readonly ["Created", "IssuancePending", "IssuancePendingRetry", "IssuanceFailed", "IssuanceSuccess", "Ineligible", "Eligible", "AcquisitionPending", "AcquisitionSuccess", "AcquisitionFailed", "FundingPending", "FundingSuccess", "FundingFailed", "Settled"];
                        readonly deprecated: true;
                        readonly examples: readonly ["FundingSuccess"];
                    };
                    readonly assetStatus: {
                        readonly type: "string";
                        readonly description: "Installment (asset) state.\n\n`Created` `IssuancePending` `IssuancePendingRetry` `IssuanceFailed` `IssuanceSuccess` `AcquisitionPending` `AcquisitionSuccess` `AcquisitionFailed` `Advanced` `NotAdvanced` `Canceled` `Recourse`";
                        readonly enum: readonly ["Created", "IssuancePending", "IssuancePendingRetry", "IssuanceFailed", "IssuanceSuccess", "AcquisitionPending", "AcquisitionSuccess", "AcquisitionFailed", "Advanced", "NotAdvanced", "Canceled", "Recourse"];
                        readonly examples: readonly ["Advanced"];
                    };
                    readonly collectionStatus: {
                        readonly type: "string";
                        readonly description: "Installment (asset) collection status.\n\n`Open` `Repaid` `Settled` `Default` `Canceled`";
                        readonly enum: readonly ["Open", "Repaid", "Settled", "Default", "Canceled"];
                        readonly examples: readonly ["Open"];
                    };
                    readonly refundAmountCents: {
                        readonly type: "number";
                        readonly description: "Refund value cents.";
                        readonly examples: readonly [10000];
                    };
                    readonly refundStatus: {
                        readonly type: "string";
                        readonly description: "Refund status.\n\n`NoRefund` `PartialRefund` `FullRefund`";
                        readonly enum: readonly ["NoRefund", "PartialRefund", "FullRefund"];
                        readonly examples: readonly ["NoRefund"];
                    };
                    readonly settledAt: {
                        readonly format: "date-time";
                        readonly type: "string";
                        readonly description: "The date, in UTC ISO 8601 format, when the amounts were paid to CrediPay.";
                        readonly examples: readonly ["2024-02-29T00:00:00.000Z"];
                    };
                    readonly maturityDate: {
                        readonly format: "date-time";
                        readonly type: "string";
                        readonly description: "The date, in UTC ISO 8601 format, when the asset is expected to be paid.";
                        readonly examples: readonly ["2024-03-20T00:00:00.000Z"];
                    };
                    readonly invoice: {
                        readonly description: "The invoice that originated this installment (asset)";
                        readonly type: "object";
                        readonly required: readonly ["invoiceNumber"];
                        readonly properties: {
                            readonly invoiceNumber: {
                                readonly type: "string";
                                readonly description: "Invoice number. It can be the seller's internal invoice ID.";
                                readonly examples: readonly ["NFe51240530460444000170550010000001971976454382"];
                            };
                        };
                    };
                };
                readonly required: readonly ["id", "faceValueCents", "status", "assetStatus", "collectionStatus", "refundAmountCents", "refundStatus", "maturityDate", "invoice"];
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const ListOrders: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly externalId: {
                    readonly type: "string";
                    readonly examples: readonly ["REF-10230456"];
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Returns orders with the provided external id.";
                };
                readonly updatedAfter: {
                    readonly default: "2024-02-05T00:00:00Z";
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Updated after UTC date in ISO 8601 format.";
                };
            };
            readonly required: readonly [];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly type: "array";
            readonly items: {
                readonly type: "object";
                readonly properties: {
                    readonly id: {
                        readonly type: "string";
                        readonly description: "CrediPay's internal order ID.";
                        readonly examples: readonly ["46dd63dd-1be4-4658-8deb-fa5dc578ad0b"];
                    };
                    readonly externalId: {
                        readonly type: "string";
                        readonly description: "Internal order ID of the seller.";
                        readonly examples: readonly ["REF-10230456"];
                    };
                    readonly subtotalAmountCents: {
                        readonly type: "number";
                        readonly description: "The value of the order's goods and or services in cents.";
                        readonly examples: readonly [1020000];
                    };
                    readonly taxAmountCents: {
                        readonly type: "number";
                        readonly description: "Tax amount in cents.";
                        readonly examples: readonly [81600];
                    };
                    readonly shippingCostCents: {
                        readonly type: "number";
                        readonly description: "Shipping costs in cents.";
                        readonly examples: readonly [5000];
                    };
                    readonly buyerFeesCents: {
                        readonly type: "number";
                        readonly description: "This field will automatically be calculated. It will have a non-zero value when the seller is configured to charge fees to buyers. Note that this value is already included in the total amount cents.";
                        readonly examples: readonly [10978];
                    };
                    readonly totalAmountCents: {
                        readonly type: "number";
                        readonly description: "Total amount in cents. This amount includes buyer fees if applicable. The value of the to-be-created invoice should equal this amount.";
                        readonly examples: readonly [1117578];
                    };
                    readonly shippingLocation: {
                        readonly description: "Shipping location.";
                        readonly type: "object";
                        readonly required: readonly ["address1", "city", "region", "postalCode", "country"];
                        readonly properties: {
                            readonly address1: {
                                readonly type: "string";
                                readonly description: "Street address 1.";
                                readonly default: "Rua da Consolação, 930";
                            };
                            readonly address2: {
                                readonly type: "string";
                                readonly description: "Street address 2.";
                                readonly default: "Apto 101";
                            };
                            readonly city: {
                                readonly type: "string";
                                readonly description: "City.";
                                readonly default: "São Paulo";
                            };
                            readonly region: {
                                readonly type: "string";
                                readonly description: "Region.";
                                readonly default: "São Paulo";
                            };
                            readonly postalCode: {
                                readonly type: "string";
                                readonly description: "Postal code.";
                                readonly default: "01302000";
                            };
                            readonly country: {
                                readonly type: "string";
                                readonly description: "Country.";
                                readonly default: "Brazil";
                            };
                        };
                    };
                    readonly paymentTermDays: {
                        readonly type: "string";
                        readonly description: "Payment term in days. The maturity date of the to-be-created invoice should equal the payment term days added to the order creation date.";
                        readonly examples: readonly [30];
                    };
                    readonly status: {
                        readonly type: "string";
                        readonly description: "Order status.\n\n`new` `created` `accepted` `cancelled` `rejected` `finalized` `captured` `expired` `invalidated`";
                        readonly enum: readonly ["new", "created", "accepted", "cancelled", "rejected", "finalized", "captured", "expired", "invalidated"];
                        readonly examples: readonly ["finalized"];
                    };
                    readonly estimatedDeliveryDate: {
                        readonly type: "object";
                        readonly description: "Estimated delivery UTC date in ISO 8601 format.";
                        readonly examples: readonly ["2024-02-05T00:00:00Z"];
                        readonly additionalProperties: true;
                    };
                    readonly createdAt: {
                        readonly type: "string";
                        readonly description: "Creation UTC date in ISO 8601 format.";
                        readonly examples: readonly ["2024-02-01T00:00:00Z"];
                    };
                    readonly sellerTaxId: {
                        readonly type: "string";
                        readonly description: "Seller company tax ID.";
                        readonly examples: readonly ["15853054000096"];
                    };
                    readonly buyerTaxId: {
                        readonly type: "string";
                        readonly description: "Buyer company tax ID.";
                        readonly examples: readonly ["18360341000052"];
                    };
                    readonly noAdvancing: {
                        readonly type: "boolean";
                        readonly description: "No advancing";
                        readonly examples: readonly [false];
                    };
                    readonly installments: {
                        readonly description: "Installments for the order.";
                        readonly type: "array";
                        readonly items: {
                            readonly type: "object";
                            readonly properties: {
                                readonly maturityDate: {
                                    readonly type: "string";
                                    readonly description: "Installments Maturity Date.";
                                    readonly default: "2024-02-10T00:00:00Z";
                                };
                                readonly faceValueCents: {
                                    readonly type: "number";
                                    readonly description: "Face value of the installment";
                                    readonly default: 1020000;
                                };
                            };
                            readonly required: readonly ["maturityDate", "faceValueCents"];
                        };
                    };
                };
                readonly required: readonly ["id", "externalId", "subtotalAmountCents", "taxAmountCents", "shippingCostCents", "buyerFeesCents", "totalAmountCents", "paymentTermDays", "status", "estimatedDeliveryDate", "createdAt", "sellerTaxId", "buyerTaxId", "noAdvancing", "installments"];
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const PostCancelOrder: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly orderId: {
                    readonly type: "string";
                    readonly examples: readonly ["46dd63dd-1be4-4658-8deb-fa5dc578ad0b"];
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "CrediPay's internal order ID.";
                };
            };
            readonly required: readonly ["orderId"];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly id: {
                    readonly type: "string";
                    readonly description: "CrediPay's internal order ID.";
                    readonly examples: readonly ["46dd63dd-1be4-4658-8deb-fa5dc578ad0b"];
                };
                readonly externalId: {
                    readonly type: "string";
                    readonly description: "Internal order ID of the seller.";
                    readonly examples: readonly ["REF-10230456"];
                };
                readonly subtotalAmountCents: {
                    readonly type: "number";
                    readonly description: "The value of the order's goods and or services in cents.";
                    readonly examples: readonly [1020000];
                };
                readonly taxAmountCents: {
                    readonly type: "number";
                    readonly description: "Tax amount in cents.";
                    readonly examples: readonly [81600];
                };
                readonly shippingCostCents: {
                    readonly type: "number";
                    readonly description: "Shipping costs in cents.";
                    readonly examples: readonly [5000];
                };
                readonly buyerFeesCents: {
                    readonly type: "number";
                    readonly description: "This field will automatically be calculated. It will have a non-zero value when the seller is configured to charge fees to buyers. Note that this value is already included in the total amount cents.";
                    readonly examples: readonly [10978];
                };
                readonly totalAmountCents: {
                    readonly type: "number";
                    readonly description: "Total amount in cents. This amount includes buyer fees if applicable. The value of the to-be-created invoice should equal this amount.";
                    readonly examples: readonly [1117578];
                };
                readonly shippingLocation: {
                    readonly description: "Shipping location.";
                    readonly type: "object";
                    readonly required: readonly ["address1", "city", "region", "postalCode", "country"];
                    readonly properties: {
                        readonly address1: {
                            readonly type: "string";
                            readonly description: "Street address 1.";
                            readonly default: "Rua da Consolação, 930";
                        };
                        readonly address2: {
                            readonly type: "string";
                            readonly description: "Street address 2.";
                            readonly default: "Apto 101";
                        };
                        readonly city: {
                            readonly type: "string";
                            readonly description: "City.";
                            readonly default: "São Paulo";
                        };
                        readonly region: {
                            readonly type: "string";
                            readonly description: "Region.";
                            readonly default: "São Paulo";
                        };
                        readonly postalCode: {
                            readonly type: "string";
                            readonly description: "Postal code.";
                            readonly default: "01302000";
                        };
                        readonly country: {
                            readonly type: "string";
                            readonly description: "Country.";
                            readonly default: "Brazil";
                        };
                    };
                };
                readonly paymentTermDays: {
                    readonly type: "string";
                    readonly description: "Payment term in days. The maturity date of the to-be-created invoice should equal the payment term days added to the order creation date.";
                    readonly examples: readonly [30];
                };
                readonly status: {
                    readonly type: "string";
                    readonly description: "Order status.\n\n`new` `created` `accepted` `cancelled` `rejected` `finalized` `captured` `expired` `invalidated`";
                    readonly enum: readonly ["new", "created", "accepted", "cancelled", "rejected", "finalized", "captured", "expired", "invalidated"];
                    readonly examples: readonly ["cancelled"];
                };
                readonly estimatedDeliveryDate: {
                    readonly type: "object";
                    readonly description: "Estimated delivery UTC date in ISO 8601 format.";
                    readonly examples: readonly ["2024-02-05T00:00:00Z"];
                    readonly additionalProperties: true;
                };
                readonly createdAt: {
                    readonly type: "string";
                    readonly description: "Creation UTC date in ISO 8601 format.";
                    readonly examples: readonly ["2024-02-01T00:00:00Z"];
                };
                readonly sellerTaxId: {
                    readonly type: "string";
                    readonly description: "Seller company tax ID.";
                    readonly examples: readonly ["15853054000096"];
                };
                readonly buyerTaxId: {
                    readonly type: "string";
                    readonly description: "Buyer company tax ID.";
                    readonly examples: readonly ["18360341000052"];
                };
                readonly noAdvancing: {
                    readonly type: "boolean";
                    readonly description: "No advancing";
                    readonly examples: readonly [false];
                };
                readonly installments: {
                    readonly description: "Installments for the order.";
                    readonly type: "array";
                    readonly items: {
                        readonly type: "object";
                        readonly properties: {
                            readonly maturityDate: {
                                readonly type: "string";
                                readonly description: "Installments Maturity Date.";
                                readonly default: "2024-02-10T00:00:00Z";
                            };
                            readonly faceValueCents: {
                                readonly type: "number";
                                readonly description: "Face value of the installment";
                                readonly default: 1020000;
                            };
                        };
                        readonly required: readonly ["maturityDate", "faceValueCents"];
                    };
                };
            };
            readonly required: readonly ["id", "externalId", "subtotalAmountCents", "taxAmountCents", "shippingCostCents", "buyerFeesCents", "totalAmountCents", "paymentTermDays", "status", "estimatedDeliveryDate", "createdAt", "sellerTaxId", "buyerTaxId", "noAdvancing", "installments"];
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const PostCreateOrder: {
    readonly body: {
        readonly type: "object";
        readonly properties: {
            readonly externalId: {
                readonly type: "string";
                readonly description: "Seller's internal order ID.";
                readonly default: "REF-10230456";
            };
            readonly subtotalAmountCents: {
                readonly type: "number";
                readonly description: "The value of the order's goods and or services in cents.";
                readonly default: 1020000;
            };
            readonly taxAmountCents: {
                readonly type: "number";
                readonly description: "Tax amount in cents.";
                readonly default: 81600;
            };
            readonly shippingCostCents: {
                readonly type: "number";
                readonly description: "Shipping costs in cents.";
                readonly default: 5000;
            };
            readonly shippingLocation: {
                readonly description: "Shipping location.";
                readonly type: "object";
                readonly required: readonly ["address1", "city", "region", "postalCode", "country"];
                readonly properties: {
                    readonly address1: {
                        readonly type: "string";
                        readonly description: "Street address 1.";
                        readonly default: "Rua da Consolação, 930";
                    };
                    readonly address2: {
                        readonly type: "string";
                        readonly description: "Street address 2.";
                        readonly default: "Apto 101";
                    };
                    readonly city: {
                        readonly type: "string";
                        readonly description: "City.";
                        readonly default: "São Paulo";
                    };
                    readonly region: {
                        readonly type: "string";
                        readonly description: "Region.";
                        readonly default: "São Paulo";
                    };
                    readonly postalCode: {
                        readonly type: "string";
                        readonly description: "Postal code.";
                        readonly default: "01302000";
                    };
                    readonly country: {
                        readonly type: "string";
                        readonly description: "Country.";
                        readonly default: "Brazil";
                    };
                };
            };
            readonly estimatedDeliveryDateUTC: {
                readonly format: "date-time";
                readonly type: "string";
                readonly description: "Estimated delivery UTC date in ISO 8601 format.";
                readonly default: "2024-02-05T00:00:00Z";
            };
            readonly installments: {
                readonly description: "Installments for the order.";
                readonly type: "array";
                readonly items: {
                    readonly type: "object";
                    readonly properties: {
                        readonly maturityDate: {
                            readonly type: "string";
                            readonly description: "Installments Maturity Date.";
                            readonly default: "2024-02-10T00:00:00Z";
                        };
                        readonly faceValueCents: {
                            readonly type: "number";
                            readonly description: "Face value of the installment";
                            readonly default: 1020000;
                        };
                    };
                    readonly required: readonly ["maturityDate", "faceValueCents"];
                };
            };
            readonly sellerTaxId: {
                readonly type: "string";
                readonly description: "Seller company tax ID.";
                readonly examples: readonly ["35027057000088"];
            };
            readonly buyerTaxId: {
                readonly type: "string";
                readonly description: "Buyer company tax ID.";
                readonly examples: readonly ["56037284000064"];
            };
            readonly items: {
                readonly description: "Order items.";
                readonly type: "array";
                readonly items: {
                    readonly type: "object";
                    readonly properties: {
                        readonly productId: {
                            readonly type: "string";
                            readonly description: "Unique product identifier.";
                            readonly default: "7891910000197";
                        };
                        readonly productName: {
                            readonly type: "string";
                            readonly description: "Name.";
                            readonly default: "Cerveja Skol 350ml";
                        };
                        readonly quantity: {
                            readonly type: "number";
                            readonly description: "Quantity.";
                            readonly default: 1000;
                        };
                        readonly unitPriceCents: {
                            readonly type: "number";
                            readonly description: "Unit price in cents.";
                            readonly default: 1020;
                        };
                    };
                    readonly required: readonly ["productId", "productName", "quantity", "unitPriceCents"];
                };
            };
        };
        readonly required: readonly ["subtotalAmountCents", "taxAmountCents", "shippingCostCents", "installments", "sellerTaxId", "buyerTaxId", "items"];
        readonly $schema: "http://json-schema.org/draft-04/schema#";
    };
    readonly response: {
        readonly "201": {
            readonly type: "object";
            readonly properties: {
                readonly id: {
                    readonly type: "string";
                    readonly description: "CrediPay's internal order ID.";
                    readonly examples: readonly ["46dd63dd-1be4-4658-8deb-fa5dc578ad0b"];
                };
                readonly externalId: {
                    readonly type: "string";
                    readonly description: "Internal order ID of the seller.";
                    readonly examples: readonly ["REF-10230456"];
                };
                readonly subtotalAmountCents: {
                    readonly type: "number";
                    readonly description: "The value of the order's goods and or services in cents.";
                    readonly examples: readonly [1020000];
                };
                readonly taxAmountCents: {
                    readonly type: "number";
                    readonly description: "Tax amount in cents.";
                    readonly examples: readonly [81600];
                };
                readonly shippingCostCents: {
                    readonly type: "number";
                    readonly description: "Shipping costs in cents.";
                    readonly examples: readonly [5000];
                };
                readonly buyerFeesCents: {
                    readonly type: "number";
                    readonly description: "This field will automatically be calculated. It will have a non-zero value when the seller is configured to charge fees to buyers. Note that this value is already included in the total amount cents.";
                    readonly examples: readonly [10978];
                };
                readonly totalAmountCents: {
                    readonly type: "number";
                    readonly description: "Total amount in cents. This amount includes buyer fees if applicable. The value of the to-be-created invoice should equal this amount.";
                    readonly examples: readonly [1117578];
                };
                readonly shippingLocation: {
                    readonly description: "Shipping location.";
                    readonly type: "object";
                    readonly required: readonly ["address1", "city", "region", "postalCode", "country"];
                    readonly properties: {
                        readonly address1: {
                            readonly type: "string";
                            readonly description: "Street address 1.";
                            readonly default: "Rua da Consolação, 930";
                        };
                        readonly address2: {
                            readonly type: "string";
                            readonly description: "Street address 2.";
                            readonly default: "Apto 101";
                        };
                        readonly city: {
                            readonly type: "string";
                            readonly description: "City.";
                            readonly default: "São Paulo";
                        };
                        readonly region: {
                            readonly type: "string";
                            readonly description: "Region.";
                            readonly default: "São Paulo";
                        };
                        readonly postalCode: {
                            readonly type: "string";
                            readonly description: "Postal code.";
                            readonly default: "01302000";
                        };
                        readonly country: {
                            readonly type: "string";
                            readonly description: "Country.";
                            readonly default: "Brazil";
                        };
                    };
                };
                readonly paymentTermDays: {
                    readonly type: "string";
                    readonly description: "Payment term in days. The maturity date of the to-be-created invoice should equal the payment term days added to the order creation date.";
                    readonly examples: readonly [30];
                };
                readonly status: {
                    readonly type: "string";
                    readonly description: "Order status.\n\n`new` `created` `accepted` `cancelled` `rejected` `finalized` `captured` `expired` `invalidated`";
                    readonly enum: readonly ["new", "created", "accepted", "cancelled", "rejected", "finalized", "captured", "expired", "invalidated"];
                    readonly examples: readonly ["finalized"];
                };
                readonly estimatedDeliveryDate: {
                    readonly type: "object";
                    readonly description: "Estimated delivery UTC date in ISO 8601 format.";
                    readonly examples: readonly ["2024-02-05T00:00:00Z"];
                    readonly additionalProperties: true;
                };
                readonly createdAt: {
                    readonly type: "string";
                    readonly description: "Creation UTC date in ISO 8601 format.";
                    readonly examples: readonly ["2024-02-01T00:00:00Z"];
                };
                readonly sellerTaxId: {
                    readonly type: "string";
                    readonly description: "Seller company tax ID.";
                    readonly examples: readonly ["15853054000096"];
                };
                readonly buyerTaxId: {
                    readonly type: "string";
                    readonly description: "Buyer company tax ID.";
                    readonly examples: readonly ["18360341000052"];
                };
                readonly noAdvancing: {
                    readonly type: "boolean";
                    readonly description: "No advancing";
                    readonly examples: readonly [false];
                };
                readonly installments: {
                    readonly description: "Installments for the order.";
                    readonly type: "array";
                    readonly items: {
                        readonly type: "object";
                        readonly properties: {
                            readonly maturityDate: {
                                readonly type: "string";
                                readonly description: "Installments Maturity Date.";
                                readonly default: "2024-02-10T00:00:00Z";
                            };
                            readonly faceValueCents: {
                                readonly type: "number";
                                readonly description: "Face value of the installment";
                                readonly default: 1020000;
                            };
                        };
                        readonly required: readonly ["maturityDate", "faceValueCents"];
                    };
                };
            };
            readonly required: readonly ["id", "externalId", "subtotalAmountCents", "taxAmountCents", "shippingCostCents", "buyerFeesCents", "totalAmountCents", "paymentTermDays", "status", "estimatedDeliveryDate", "createdAt", "sellerTaxId", "buyerTaxId", "noAdvancing", "installments"];
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const PostFinalizeOrder: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly orderId: {
                    readonly type: "string";
                    readonly examples: readonly ["46dd63dd-1be4-4658-8deb-fa5dc578ad0b"];
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "CrediPay's internal order ID.";
                };
            };
            readonly required: readonly ["orderId"];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly id: {
                    readonly type: "string";
                    readonly description: "CrediPay's internal order ID.";
                    readonly examples: readonly ["46dd63dd-1be4-4658-8deb-fa5dc578ad0b"];
                };
                readonly externalId: {
                    readonly type: "string";
                    readonly description: "Internal order ID of the seller.";
                    readonly examples: readonly ["REF-10230456"];
                };
                readonly subtotalAmountCents: {
                    readonly type: "number";
                    readonly description: "The value of the order's goods and or services in cents.";
                    readonly examples: readonly [1020000];
                };
                readonly taxAmountCents: {
                    readonly type: "number";
                    readonly description: "Tax amount in cents.";
                    readonly examples: readonly [81600];
                };
                readonly shippingCostCents: {
                    readonly type: "number";
                    readonly description: "Shipping costs in cents.";
                    readonly examples: readonly [5000];
                };
                readonly buyerFeesCents: {
                    readonly type: "number";
                    readonly description: "This field will automatically be calculated. It will have a non-zero value when the seller is configured to charge fees to buyers. Note that this value is already included in the total amount cents.";
                    readonly examples: readonly [10978];
                };
                readonly totalAmountCents: {
                    readonly type: "number";
                    readonly description: "Total amount in cents. This amount includes buyer fees if applicable. The value of the to-be-created invoice should equal this amount.";
                    readonly examples: readonly [1117578];
                };
                readonly shippingLocation: {
                    readonly description: "Shipping location.";
                    readonly type: "object";
                    readonly required: readonly ["address1", "city", "region", "postalCode", "country"];
                    readonly properties: {
                        readonly address1: {
                            readonly type: "string";
                            readonly description: "Street address 1.";
                            readonly default: "Rua da Consolação, 930";
                        };
                        readonly address2: {
                            readonly type: "string";
                            readonly description: "Street address 2.";
                            readonly default: "Apto 101";
                        };
                        readonly city: {
                            readonly type: "string";
                            readonly description: "City.";
                            readonly default: "São Paulo";
                        };
                        readonly region: {
                            readonly type: "string";
                            readonly description: "Region.";
                            readonly default: "São Paulo";
                        };
                        readonly postalCode: {
                            readonly type: "string";
                            readonly description: "Postal code.";
                            readonly default: "01302000";
                        };
                        readonly country: {
                            readonly type: "string";
                            readonly description: "Country.";
                            readonly default: "Brazil";
                        };
                    };
                };
                readonly paymentTermDays: {
                    readonly type: "string";
                    readonly description: "Payment term in days. The maturity date of the to-be-created invoice should equal the payment term days added to the order creation date.";
                    readonly examples: readonly [30];
                };
                readonly status: {
                    readonly type: "string";
                    readonly description: "Order status.\n\n`new` `created` `accepted` `cancelled` `rejected` `finalized` `captured` `expired` `invalidated`";
                    readonly enum: readonly ["new", "created", "accepted", "cancelled", "rejected", "finalized", "captured", "expired", "invalidated"];
                    readonly examples: readonly ["finalized"];
                };
                readonly estimatedDeliveryDate: {
                    readonly type: "object";
                    readonly description: "Estimated delivery UTC date in ISO 8601 format.";
                    readonly examples: readonly ["2024-02-05T00:00:00Z"];
                    readonly additionalProperties: true;
                };
                readonly createdAt: {
                    readonly type: "string";
                    readonly description: "Creation UTC date in ISO 8601 format.";
                    readonly examples: readonly ["2024-02-01T00:00:00Z"];
                };
                readonly sellerTaxId: {
                    readonly type: "string";
                    readonly description: "Seller company tax ID.";
                    readonly examples: readonly ["15853054000096"];
                };
                readonly buyerTaxId: {
                    readonly type: "string";
                    readonly description: "Buyer company tax ID.";
                    readonly examples: readonly ["18360341000052"];
                };
                readonly noAdvancing: {
                    readonly type: "boolean";
                    readonly description: "No advancing";
                    readonly examples: readonly [false];
                };
                readonly installments: {
                    readonly description: "Installments for the order.";
                    readonly type: "array";
                    readonly items: {
                        readonly type: "object";
                        readonly properties: {
                            readonly maturityDate: {
                                readonly type: "string";
                                readonly description: "Installments Maturity Date.";
                                readonly default: "2024-02-10T00:00:00Z";
                            };
                            readonly faceValueCents: {
                                readonly type: "number";
                                readonly description: "Face value of the installment";
                                readonly default: 1020000;
                            };
                        };
                        readonly required: readonly ["maturityDate", "faceValueCents"];
                    };
                };
            };
            readonly required: readonly ["id", "externalId", "subtotalAmountCents", "taxAmountCents", "shippingCostCents", "buyerFeesCents", "totalAmountCents", "paymentTermDays", "status", "estimatedDeliveryDate", "createdAt", "sellerTaxId", "buyerTaxId", "noAdvancing", "installments"];
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const PostOrderExtendPaymentTerms: {
    readonly body: {
        readonly type: "object";
        readonly properties: {
            readonly numberOfDays: {
                readonly type: "number";
                readonly description: "Number of days for extending the payment terms.";
                readonly examples: readonly [1020000];
            };
            readonly assetId: {
                readonly type: "string";
                readonly description: "Id of the asset to be extended";
                readonly examples: readonly ["cb9e8408-aac0-4b4a-9848-904656272de2"];
            };
        };
        readonly required: readonly ["numberOfDays", "assetId"];
        readonly $schema: "http://json-schema.org/draft-04/schema#";
    };
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly orderId: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                };
            };
            readonly required: readonly ["orderId"];
        }];
    };
};
declare const PostOrderRefund: {
    readonly body: {
        readonly type: "object";
        readonly properties: {
            readonly refundValueCents: {
                readonly type: "number";
                readonly description: "Refund value in cents.";
                readonly examples: readonly [1020000];
            };
            readonly value: {
                readonly type: "number";
                readonly description: "Refund value in cents. This property is deprecated use refundValueCents in body instead";
                readonly deprecated: true;
                readonly examples: readonly [1020000];
            };
        };
        readonly required: readonly ["refundValueCents", "value"];
        readonly $schema: "http://json-schema.org/draft-04/schema#";
    };
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly orderId: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                };
            };
            readonly required: readonly ["orderId"];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly id: {
                    readonly type: "string";
                    readonly description: "CrediPay's internal order ID.";
                    readonly examples: readonly ["46dd63dd-1be4-4658-8deb-fa5dc578ad0b"];
                };
                readonly externalId: {
                    readonly type: "string";
                    readonly description: "Internal order ID of the seller.";
                    readonly examples: readonly ["REF-10230456"];
                };
                readonly subtotalAmountCents: {
                    readonly type: "number";
                    readonly description: "The value of the order's goods and or services in cents.";
                    readonly examples: readonly [1020000];
                };
                readonly taxAmountCents: {
                    readonly type: "number";
                    readonly description: "Tax amount in cents.";
                    readonly examples: readonly [81600];
                };
                readonly shippingCostCents: {
                    readonly type: "number";
                    readonly description: "Shipping costs in cents.";
                    readonly examples: readonly [5000];
                };
                readonly buyerFeesCents: {
                    readonly type: "number";
                    readonly description: "This field will automatically be calculated. It will have a non-zero value when the seller is configured to charge fees to buyers. Note that this value is already included in the total amount cents.";
                    readonly examples: readonly [10978];
                };
                readonly totalAmountCents: {
                    readonly type: "number";
                    readonly description: "Total amount in cents. This amount includes buyer fees if applicable. The value of the to-be-created invoice should equal this amount.";
                    readonly examples: readonly [1117578];
                };
                readonly shippingLocation: {
                    readonly description: "Shipping location.";
                    readonly type: "object";
                    readonly required: readonly ["address1", "city", "region", "postalCode", "country"];
                    readonly properties: {
                        readonly address1: {
                            readonly type: "string";
                            readonly description: "Street address 1.";
                            readonly default: "Rua da Consolação, 930";
                        };
                        readonly address2: {
                            readonly type: "string";
                            readonly description: "Street address 2.";
                            readonly default: "Apto 101";
                        };
                        readonly city: {
                            readonly type: "string";
                            readonly description: "City.";
                            readonly default: "São Paulo";
                        };
                        readonly region: {
                            readonly type: "string";
                            readonly description: "Region.";
                            readonly default: "São Paulo";
                        };
                        readonly postalCode: {
                            readonly type: "string";
                            readonly description: "Postal code.";
                            readonly default: "01302000";
                        };
                        readonly country: {
                            readonly type: "string";
                            readonly description: "Country.";
                            readonly default: "Brazil";
                        };
                    };
                };
                readonly paymentTermDays: {
                    readonly type: "string";
                    readonly description: "Payment term in days. The maturity date of the to-be-created invoice should equal the payment term days added to the order creation date.";
                    readonly examples: readonly [30];
                };
                readonly status: {
                    readonly type: "string";
                    readonly description: "Order status.\n\n`new` `created` `accepted` `cancelled` `rejected` `finalized` `captured` `expired` `invalidated`";
                    readonly enum: readonly ["new", "created", "accepted", "cancelled", "rejected", "finalized", "captured", "expired", "invalidated"];
                    readonly examples: readonly ["cancelled"];
                };
                readonly estimatedDeliveryDate: {
                    readonly type: "object";
                    readonly description: "Estimated delivery UTC date in ISO 8601 format.";
                    readonly examples: readonly ["2024-02-05T00:00:00Z"];
                    readonly additionalProperties: true;
                };
                readonly createdAt: {
                    readonly type: "string";
                    readonly description: "Creation UTC date in ISO 8601 format.";
                    readonly examples: readonly ["2024-02-01T00:00:00Z"];
                };
                readonly sellerTaxId: {
                    readonly type: "string";
                    readonly description: "Seller company tax ID.";
                    readonly examples: readonly ["15853054000096"];
                };
                readonly buyerTaxId: {
                    readonly type: "string";
                    readonly description: "Buyer company tax ID.";
                    readonly examples: readonly ["18360341000052"];
                };
                readonly noAdvancing: {
                    readonly type: "boolean";
                    readonly description: "No advancing";
                    readonly examples: readonly [false];
                };
                readonly installments: {
                    readonly description: "Installments for the order.";
                    readonly type: "array";
                    readonly items: {
                        readonly type: "object";
                        readonly properties: {
                            readonly maturityDate: {
                                readonly type: "string";
                                readonly description: "Installments Maturity Date.";
                                readonly default: "2024-02-10T00:00:00Z";
                            };
                            readonly faceValueCents: {
                                readonly type: "number";
                                readonly description: "Face value of the installment";
                                readonly default: 1020000;
                            };
                        };
                        readonly required: readonly ["maturityDate", "faceValueCents"];
                    };
                };
            };
            readonly required: readonly ["id", "externalId", "subtotalAmountCents", "taxAmountCents", "shippingCostCents", "buyerFeesCents", "totalAmountCents", "paymentTermDays", "status", "estimatedDeliveryDate", "createdAt", "sellerTaxId", "buyerTaxId", "noAdvancing", "installments"];
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const PostOrderSimulation: {
    readonly body: {
        readonly type: "object";
        readonly properties: {
            readonly sellerTaxId: {
                readonly type: "string";
                readonly description: "Seller's Tax Id.";
                readonly examples: readonly ["73021656000164"];
            };
            readonly buyerTaxId: {
                readonly type: "string";
                readonly description: "Buyer's Tax Id.";
                readonly examples: readonly ["64456744000106"];
            };
            readonly totalOrderAmountCents: {
                readonly type: "number";
                readonly description: "Total order amount in cents.";
                readonly examples: readonly [1020000];
            };
            readonly paymentTerms: {
                readonly description: "Payment terms in days.";
                readonly default: readonly [30, 60, 90];
                readonly type: "array";
                readonly items: {
                    readonly type: "number";
                };
            };
            readonly maxNumberOfInstallments: {
                readonly type: "number";
                readonly description: "Number of installments.";
                readonly examples: readonly [3];
            };
            readonly periodDuration: {
                readonly type: "number";
                readonly description: "Period duration in days.";
                readonly examples: readonly [30];
            };
        };
        readonly required: readonly ["sellerTaxId", "buyerTaxId", "totalOrderAmountCents", "paymentTerms", "maxNumberOfInstallments", "periodDuration"];
        readonly $schema: "http://json-schema.org/draft-04/schema#";
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly maxPaymentTermDays: {
                    readonly type: "number";
                    readonly description: "Maximum payment term days.";
                    readonly examples: readonly [90];
                };
                readonly totalOrderAmountCents: {
                    readonly type: "number";
                    readonly description: "Total order amount in cents.";
                    readonly examples: readonly [1000];
                };
                readonly invoiceTotalsWithFees: {
                    readonly description: "Invoice totals with fees.";
                    readonly type: "array";
                    readonly items: {
                        readonly type: "object";
                        readonly properties: {
                            readonly totalInvoiceAmountCents: {
                                readonly type: "number";
                                readonly description: "Total invoice amount in cents.";
                                readonly examples: readonly [1100];
                            };
                            readonly fees: {
                                readonly description: "Fees.";
                                readonly type: "object";
                                readonly required: readonly ["buyerFeesCents", "buyerFeesPercentage"];
                                readonly properties: {
                                    readonly buyerFeesCents: {
                                        readonly type: "number";
                                        readonly description: "Buyer fees in cents.";
                                        readonly examples: readonly [100];
                                    };
                                    readonly buyerFeesPercentage: {
                                        readonly type: "number";
                                        readonly description: "Buyer fees percentage.";
                                        readonly examples: readonly [0.1];
                                    };
                                };
                            };
                            readonly paymentTermDays: {
                                readonly type: "number";
                                readonly description: "Payment term days.";
                                readonly examples: readonly [30];
                            };
                        };
                        readonly required: readonly ["totalInvoiceAmountCents", "fees", "paymentTermDays"];
                    };
                };
                readonly installments: {
                    readonly description: "Installments for the order.";
                    readonly type: "array";
                    readonly items: {
                        readonly type: "object";
                        readonly properties: {
                            readonly maturityDate: {
                                readonly type: "string";
                                readonly description: "Installments Maturity Date.";
                                readonly default: "2024-02-10T00:00:00Z";
                            };
                            readonly faceValueCents: {
                                readonly type: "number";
                                readonly description: "Face value of the installment";
                                readonly default: 1020000;
                            };
                        };
                        readonly required: readonly ["maturityDate", "faceValueCents"];
                    };
                };
            };
            readonly required: readonly ["maxPaymentTermDays", "totalOrderAmountCents", "invoiceTotalsWithFees", "installments"];
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const PostSubmitInvoiceXml: {
    readonly body: {
        readonly type: "object";
        readonly properties: {
            readonly invoice: {
                readonly type: "string";
                readonly format: "binary";
            };
        };
        readonly required: readonly ["invoice"];
        readonly $schema: "http://json-schema.org/draft-04/schema#";
    };
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly orderId: {
                    readonly type: "string";
                    readonly examples: readonly ["46dd63dd-1be4-4658-8deb-fa5dc578ad0b"];
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "CrediPay's internal order ID. UUID v4 format. If provided the uploaded invoice will be linked to this order.";
                };
            };
            readonly required: readonly [];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly id: {
                    readonly type: "string";
                    readonly description: "Credipay's internal invoice ID. UUID v4 format.";
                    readonly examples: readonly ["46dd63dd-1be4-4658-8deb-fa5dc578ad0b"];
                };
                readonly invoiceNumber: {
                    readonly type: "string";
                    readonly description: "Invoice number. Extracted from the NF-e.";
                    readonly examples: readonly ["NFe35240341264992000141550010000007431018280440"];
                };
                readonly dueDate: {
                    readonly type: "string";
                    readonly description: "Invoice due date in ISO 8601 format. In the case of multiple installments, this is the due date of the last installment.";
                    readonly examples: readonly ["2024-02-29T00:00:00.000Z"];
                };
                readonly issuanceDate: {
                    readonly type: "string";
                    readonly description: "Invoice issuance date in ISO 8601 format. Extracted from the NF-e.";
                    readonly examples: readonly ["2024-02-29T00:00:00.000Z"];
                };
                readonly originalFaceValueCents: {
                    readonly type: "number";
                    readonly description: "Invoice face value cents.";
                    readonly examples: readonly [10000];
                };
                readonly faceValueCents: {
                    readonly type: "number";
                    readonly description: "Invoice face value cents.";
                    readonly deprecated: true;
                    readonly examples: readonly [10000];
                };
                readonly currentFaceValueCents: {
                    readonly type: "number";
                    readonly description: "Invoice face value cents.";
                    readonly examples: readonly [10000];
                };
                readonly refundAmountCents: {
                    readonly type: "number";
                    readonly description: "Refund value cents.";
                    readonly examples: readonly [10000];
                };
                readonly refundStatus: {
                    readonly type: "string";
                    readonly description: "Refund status.\n\n`NoRefund` `PartialRefund` `FullRefund`";
                    readonly enum: readonly ["NoRefund", "PartialRefund", "FullRefund"];
                    readonly examples: readonly ["NoRefund"];
                };
                readonly installments: {
                    readonly description: "Invoice installments.";
                    readonly type: "array";
                    readonly items: {
                        readonly type: "object";
                        readonly properties: {
                            readonly id: {
                                readonly type: "string";
                                readonly description: "Installment ID.";
                                readonly examples: readonly ["f56ac4ff-4a1f-471d-ba14-e22c64bc769c"];
                            };
                            readonly status: {
                                readonly type: "string";
                                readonly description: "Installment status.\n\n`Created` `Settled` `FundingSuccess`";
                                readonly enum: readonly ["Created", "Settled", "FundingSuccess"];
                                readonly examples: readonly ["FundingSuccess"];
                            };
                            readonly faceValueCents: {
                                readonly type: "number";
                                readonly description: "Face value cents.";
                                readonly examples: readonly [10000];
                            };
                            readonly fundedAt: {
                                readonly type: "object";
                                readonly description: "Funded date in ISO 8601 format. Defaults to null if the installment has yet to be funded.";
                                readonly examples: readonly ["2024-02-20T00:00:00.000Z"];
                                readonly additionalProperties: true;
                            };
                            readonly settledAt: {
                                readonly type: "object";
                                readonly description: "Settled date in ISO 8601 format. Defaults to null if the installment has yet to be settled.";
                                readonly examples: readonly ["2024-02-20T00:00:00.000Z"];
                                readonly additionalProperties: true;
                            };
                            readonly disbursedAmountCents: {
                                readonly type: "number";
                                readonly description: "Disbursed amount cents. Defaults to 0 if no disbursement has been made.";
                                readonly default: 0;
                                readonly examples: readonly [10000];
                            };
                            readonly refundAmountCents: {
                                readonly type: "number";
                                readonly description: "Refund value cents.";
                                readonly examples: readonly [10000];
                            };
                            readonly refundStatus: {
                                readonly type: "string";
                                readonly description: "Refund status.\n\n`NoRefund` `PartialRefund` `FullRefund`";
                                readonly enum: readonly ["NoRefund", "PartialRefund", "FullRefund"];
                                readonly examples: readonly ["NoRefund"];
                            };
                            readonly latestRefundDate: {
                                readonly type: "object";
                                readonly description: "Latest refund date in ISO 8601 format. Defaults to null if the installment has not been refunded.";
                                readonly examples: readonly ["2024-02-20T00:00:00.000Z"];
                                readonly additionalProperties: true;
                            };
                            readonly maturityDate: {
                                readonly type: "string";
                                readonly description: "Maturity date in ISO 8601 format.";
                                readonly examples: readonly ["2024-02-29T00:00:00.000Z"];
                            };
                        };
                        readonly required: readonly ["id", "status", "faceValueCents", "fundedAt", "settledAt", "disbursedAmountCents", "refundAmountCents", "refundStatus", "latestRefundDate", "maturityDate"];
                    };
                };
                readonly repayments: {
                    readonly description: "Invoice repayments.";
                    readonly type: "array";
                    readonly items: {
                        readonly type: "object";
                        readonly properties: {
                            readonly id: {
                                readonly type: "string";
                                readonly description: "Repayment ID.";
                                readonly examples: readonly ["f56ac4ff-4a1f-471d-ba14-e22c64bc769c"];
                            };
                            readonly status: {
                                readonly type: "string";
                                readonly description: "repayment status.\n\n`open` `paid` `restructured` `renegotiated`";
                                readonly enum: readonly ["open", "paid", "restructured", "renegotiated"];
                                readonly examples: readonly ["open"];
                            };
                            readonly amount: {
                                readonly type: "number";
                                readonly description: "Amount value cents.";
                                readonly examples: readonly [10000];
                            };
                            readonly dueDate: {
                                readonly type: "string";
                                readonly description: "Invoice due date in ISO 8601 format. In the case of multiple installments, this is the due date of the last installment.";
                                readonly examples: readonly ["2024-02-29T00:00:00.000Z"];
                            };
                            readonly pdfURL: {
                                readonly type: "object";
                                readonly description: "Repayment PDF URL";
                                readonly examples: readonly ["https://pdfurl.com"];
                                readonly additionalProperties: true;
                            };
                        };
                        readonly required: readonly ["id", "status", "amount", "dueDate", "pdfURL"];
                    };
                };
                readonly order: {
                    readonly description: "The order associated with this invoice";
                    readonly type: "object";
                    readonly required: readonly ["id", "externalId", "status"];
                    readonly properties: {
                        readonly id: {
                            readonly type: "string";
                            readonly description: "CrediPay's internal order ID.";
                            readonly examples: readonly ["46dd63dd-1be4-4658-8deb-fa5dc578ad0b"];
                        };
                        readonly externalId: {
                            readonly type: "string";
                            readonly description: "Seller's internal order ID.";
                            readonly examples: readonly ["REF-10230456"];
                        };
                        readonly status: {
                            readonly type: "string";
                            readonly description: "Order status.\n\n`new` `created` `accepted` `cancelled` `rejected` `finalized` `captured` `expired` `invalidated`";
                            readonly enum: readonly ["new", "created", "accepted", "cancelled", "rejected", "finalized", "captured", "expired", "invalidated"];
                            readonly examples: readonly ["created"];
                        };
                    };
                };
                readonly payer: {
                    readonly description: "The payer of the invoice";
                    readonly type: "object";
                    readonly required: readonly ["name", "taxId"];
                    readonly properties: {
                        readonly name: {
                            readonly type: "string";
                            readonly description: "Payer company name.";
                            readonly examples: readonly ["Aurora Soluções Ltda."];
                        };
                        readonly taxId: {
                            readonly type: "string";
                            readonly description: "Payer tax ID.";
                            readonly examples: readonly ["73.682.637/0000-06"];
                        };
                    };
                };
            };
            readonly required: readonly ["id", "invoiceNumber", "dueDate", "issuanceDate", "originalFaceValueCents", "faceValueCents", "currentFaceValueCents", "refundAmountCents", "refundStatus", "installments", "repayments", "order", "payer"];
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
export { GetBuyer, GetBuyers, GetInvoice, GetInvoices, GetInvoicesOld, GetOrder, GetOrderDocuments, ListInstallments, ListInstallmentsDeprecated, ListOrders, PostCancelOrder, PostCreateOrder, PostFinalizeOrder, PostOrderExtendPaymentTerms, PostOrderRefund, PostOrderSimulation, PostSubmitInvoiceXml };
