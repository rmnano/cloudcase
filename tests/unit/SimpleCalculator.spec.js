import { mount, createLocalVue } from '@vue/test-utils';
import SimpleCalculator from '@/components/SimpleCalculator.vue';

const createWrapper = (propsOverrides = {}) => {
  const localVue = createLocalVue();
  return mount(SimpleCalculator, {
    localVue,
    propsData: {
      ...propsOverrides,
    },
  });
};

describe('SimpleCalculator.vue', () => {
  let wrapper;
  let incomeInput;
  let btn;

  beforeEach(() => {
    wrapper = createWrapper();
    incomeInput = wrapper.findComponent({ ref: 'income' })
    btn = wrapper.findComponent({ ref: 'submit' })
  });

  

  it('calc Tax with income 10,000', () => {
    
    incomeInput.setValue("10000")
    btn.trigger('click')
    expect(wrapper.vm.tax).toBe(0)
    expect(wrapper.vm.superannuation).toBe(1050)
  });

  it('calc Tax with income 20,000', () => {
    
    incomeInput.setValue("20000")
    btn.trigger('click')
    expect(wrapper.vm.tax).toBe(342)
    expect(wrapper.vm.superannuation).toBe(2100)
  });

  it('calc Tax with income 50,000', () => {
    incomeInput.setValue("50000")
    btn.trigger('click')
    expect(wrapper.vm.tax).toBe(6797)
    expect(wrapper.vm.superannuation).toBe(5250)
  });

  it('calc Tax with income 100,000', () => {
    incomeInput.setValue("100000")
    btn.trigger('click')
    expect(wrapper.vm.tax).toBe(22497)
    expect(wrapper.vm.superannuation).toBe(10500)
  });
});
