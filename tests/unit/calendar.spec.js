import { shallowMount } from '@vue/test-utils'
import CalendarLanding from '@/components/CalendarLanding.vue'

describe('CalendarLanding.vue', () => {
  it('shows landing page text', () => {
    const msg = 'Calendar Landing Page'
    const wrapper = shallowMount(CalendarLanding, {
      propsData: { msg }
    })
    expect(wrapper.find('h1').text()).toMatch(msg)
  })
});
