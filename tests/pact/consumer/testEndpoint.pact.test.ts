import { describe, expect, it } from "vitest";

import { mockProvider } from "./pactMockProvider.pact";
import { createClients } from '../clients';

describe("consumer pact test - GET test endpoints", () => {
  describe("request GET on test endpoints", () => {
    it("test03 returns { foo: 'bar03' }", async () => {
      expect.assertions(1);

      const endpointPath = "/test03";
      const responseBody = { foo: "bar03" };

      await mockProvider
        .uponReceiving(`a request to GET ${endpointPath}`)
        .withRequest({
          method: "GET",
          path: endpointPath,
        })
        .willRespondWith({
          status: 200,
          body: responseBody,
        })
        .executeTest(async (mockService) => {
          const { client } = createClients(mockService.url);
          const response = await client.getTest03();

          expect(response.data).toStrictEqual(responseBody);
        });
    });
  });
});
