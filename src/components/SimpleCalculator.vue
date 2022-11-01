<template>
  <div class="calculator">
    <div class="container">
      <form class="form py-6">
        <div>
          <div>Your Total Income: (after salary sacrifice, before tax)</div> 
          <input ref="income" v-model="income" class="border-2" type='number' min='0' max='999999999' />
        </div>
        <div class="mt-4">
          <div>Disclaimer:</div>
          <ul class="list-disc pl-4">
            <li :key="k" v-for="(item, k) in disclaimer">
              {{item}}
            </li>
          </ul>
        </div>
        <div class="mt-4">
          Compulsory superannuation rate: {{ superContribution * 100 }}%  
        </div>
        <button ref="submit" type="button" class="bg-black text-white px-4 mt-4 mb-4" @click="calc()">Submit</button>
      </form>
      <div :class="show">
          <div>The estimated tax on your taxable income is ${{ Number(tax).toLocaleString() }} </div>
          <div>The super contribution amount is ${{ Number(superannuation).toLocaleString() }} per month</div>
      </div>
    </div>
  </div>
</template>

<script>
import {calcTax, calcSuper} from '../utils/calc.js'
export default {
  name: 'SimpleCalculator',
  props: {
   
  },
  data() {
    return {
      showResult: false,
      income: 0,
      tax: 0,
      superannuation: 0,
      superContribution: 0.105,
      medicareLevy: 0.02,
      disclaimer: [
        'The rates are for Australian residents.',
        'Your marginal tax rate does not include the Medicare levy, which is calculated separately.',
        'The Medicare levy is calculated as 2% of taxable income for most taxpayers. The Medicare levy in this calculator is based on individual rates and does not take into account family income or dependent children.',
        'The calculations do not include the Medicare Levy Surcharge (1%-1.5%), an additional levy on individuals and families with higher incomes who do not have private health insurance.',
        'These calculations do not take into account any tax rebates or tax offsets you may be entitled to.',
      ],
      taxable: [
        {base: 0, increator: 0, floor: 0, ceiling: 18200},
        {base: 0, increator: 0.19, floor: 18200, ceiling: 37000},
        {base: 3572, increator: 0.325, floor: 37000, ceiling: 90000},
        {base: 20797, increator: 0.37, floor: 90000, ceiling: 180000},
        {base: 54097, increator: 0.45, floor: 180000, ceiling: 999999999},
      ]
    }
  },
  computed: {
    show() {
      if (this.showResult) {
        return 'block';
      } else {
        return 'hidden';
      }
    }
  },
  methods: {
    calc() {
      this.calcTax();
      this.calcSuper();
      this.showResult = true;
    },

    calcTax() {
      this.tax = calcTax(this.income, this.taxable, this.medicareLevy);
    },

    calcSuper() {
      this.superannuation = calcSuper(this.income, this.superContribution);
    },
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.calculator {
  display: flex;
  flex-direction: column;
}

.container {
  margin: auto;
  max-width: 1024px;
}

</style>
