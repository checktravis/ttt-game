import { shallowMount } from '@vue/test-utils'
import UserView from '@/components/HelloWorld.vue'


describe('UserView', () => {
  it('renders the component', () => {
    // arrange
    const wrapper = shallowMount(UserView)

    // assert
    expect(wrapper.html()).toMatchSnapshot()
  })

})
