describe("Mortgage", function() {
  var mortgage;

  beforeEach(function() {
    defaults = {
      years: 30,
      price: 100000,
      market_value: 100000,
      down_payment_percent: 10,
      interest_percent: 6.5,
      annual_taxes: 500,
      annual_insurance: 500
    };
    mortgage = new Mortgage.Calculator(defaults);
  });
  describe("calculations", function() {
    it("years", function() {
      expect(mortgage.years()).toEqual(defaults.years);
    });

    it("price", function() {
      expect(mortgage.price()).toEqual(100000);
    });

    it("price_in_cents", function() {
      expect(mortgage.price_in_cents()).toEqual(defaults.price * 100);
    });
    it("market_value", function() {
      expect(mortgage.market_value()).toEqual(100000);
    });
    it("down_payment_percent", function() {
      expect(mortgage.down_payment_percent()).toEqual(10);
    });

    it("down_payment_rate", function() {
      expect(mortgage.down_payment_rate()).toEqual(0.10);
    });

    it("down_payment", function() {
      expect(mortgage.down_payment()).toEqual(10000);
    });
    it("down_payment_in_cents", function() {
      expect(mortgage.down_payment_in_cents()).toEqual(1000000);
    });
    it("amount", function() {
      expect(mortgage.amount()).toEqual(90000);
    });
    it("amount_in_cents", function() {
      expect(mortgage.amount_in_cents()).toEqual(9000000);
    });

    it("interest_percent", function() {
      expect(mortgage.interest_percent()).toEqual(6.5);
    });

    it("interest_rate", function() {
      expect(mortgage.interest_rate()).toEqual(0.065);
    });

    it("interest_factor", function() {
      expect(mortgage.interest_factor()).toEqual(158.21081953707426);
    });

    it("annual_taxes", function() {
      expect(mortgage.annual_taxes()).toEqual(500);
    });

    it("annual_insurance", function() {
      expect(mortgage.annual_insurance()).toEqual(500);
    });

    it("monthly_payment", function() {
      expect(mortgage.monthly_payment()).toEqual(568.86);
    });
    it("ltv_ratio_percent", function() {
      expect(mortgage.ltv_ratio_percent()).toEqual(90);
    });
    it("annual_pmi", function() {
      expect(mortgage.annual_pmi()).toEqual(594);
    });
    it("monthly_pmi", function() {
      expect(mortgage.monthly_pmi()).toEqual(49.50);
    });
    it("amortization table", function() {
        expect(mortgage.amortization_table().length === 30);
    });
  });
});

