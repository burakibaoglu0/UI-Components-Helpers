import { expect } from 'chai'
import { shallowMount } from '@vue/test-utils'
import BiButton from '@/components/generic_components/bi-button.vue'

describe('bi-button message test', () => {
  it('renders props.btnText when passed', async () => {
    const buttonText = 'bi-button message test'
    const wrapper = shallowMount(BiButton, {
      propsData: { btnText : buttonText }
    })
    expect(wrapper.text()).to.include(buttonText);
  })
})
