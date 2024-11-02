import { describe, it, expect } from 'vitest'

import { mount } from '@vue/test-utils'
import Recommendations from '../Recommendations.vue'

describe('HelloWorld', () => {
  it('renders properly', () => {
    const wrapper = mount(Recommendations, { props: { msg: 'Hello Vitest' } })
    expect(wrapper.text()).toContain('Hello Vitest')
  })
})
