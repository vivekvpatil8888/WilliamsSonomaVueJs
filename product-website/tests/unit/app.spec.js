import { shallowMount, mount} from '@vue/test-utils'
import Product from '@/components/Product.vue'
import Carousel from '@/components/Carousel.vue'

describe('Product.vue', () => {
  it('product name is correct', () => {
    const productData = {
      name: 'cup',
      price: 12
    }
    const wrapper = shallowMount(Product, {
      props: { productData }
    })
    expect(wrapper.text()).toContain(productData.name.toUpperCase())
  })

  it('product price is correct', () => {
    const productData = {
      name: 'cup',
      price: {
        regular: 12
      }
    }
    const wrapper = shallowMount(Product, {
      props: { productData },
      data() {
        return {
          price: productData.price
        }
      }
    })
    expect(wrapper.html()).toContain(productData.price.regular)
  })

  it('show N/A when product price is absent', () => {
    const productData = {
      id: 20,
      name: 'cup',
      price: null,
      thumbnail: { href: 'https:test.com/123.jpg'}
    }
    const wrapper = shallowMount(Product, {
      props: { productData },
      data() {
        return {
          price: productData.price,
          href: productData.thumbnail
        }
      }
    })
    expect(wrapper.html()).toContain('N/A')
  })

  it('product image has correct thumbnail', () => {
    const productData = {
      id: 20,
      name: 'cup',
      price: null,
      thumbnail: { href: 'https:test.com/123.jpg'}
    }
    const wrapper = mount(Product, {
      props: {productData},
      data() {
        return {
          price: productData.price,
          href: productData.thumbnail
        }
      }
    })
    expect(wrapper.html()).toContain('<img src="https:test.com/123.jpg"')
  })

  test('emits show-carousel event with correct product id', async () => {
    const productData = {
      id: 20,
      name: 'cup',
      price: null,
      thumbnail: { href: 'https:test.com/123.jpg'}
    }
    const wrapper = mount(Product, {
      props: {productData},
      data() {
        return {
          price: productData.price,
          href: productData.thumbnail
        }
      }
    })
    await wrapper.find('img').trigger('click')
    const event = wrapper.emitted('show-carousel')
    expect(event[0][0]).toEqual(20)
  })
})

describe('Carousel.vue', ()=> {
  it('show images passed as props', () => {
    const images = [{
        href: 'https:xyz.jpg',
        alt: ''
      }, {
        href: 'https:xyz2.jpg',
        alt: ''
      }]
    const wrapper = shallowMount(Carousel, {
      props: { images }
    })
    expect(wrapper.html()).toContain('<img src="https:xyz.jpg" alt="" id="0"')
  })

  it('show small circles', () => {
    const images = [{
        href: 'https:xyz.jpg',
        alt: '',
        id: 0
      }, {
        href: 'https:xyz2.jpg',
        alt: ''
      }]
    const wrapper = shallowMount(Carousel, {
      props: { images }
    })
    expect(wrapper.html()).toContain("o")
  })

  it('emit close-carousel event on X click', async () => {
    const images = [{
        href: 'https:xyz.jpg',
        alt: '',
        id: 0
      }, {
        href: 'https:xyz2.jpg',
        alt: ''
      }]
    const wrapper = shallowMount(Carousel, {
      props: { images }
    })
    await wrapper.find('button').trigger('click')
    const event = wrapper.emitted()
    expect(event).toHaveProperty('close-carousel')
  })

  it('show next button', async () => {
    const images = [{
        href: 'https:xyz.jpg',
        alt: '',
        id: 0
      }, {
        href: 'https:xyz2.jpg',
        alt: ''
      }]
    const wrapper = shallowMount(Carousel, {
      props: { images },
      data() {
        return {
          currentIndex: 0
        }
      }
    })
    expect(wrapper.html()).toContain('right')
  })

  it('show prev button', ()=> {
    const images = [{
      href: 'https:xyz.jpg',
      alt: '',
      id: 0
    }, {
      href: 'https:xyz2.jpg',
      alt: ''
    }]
    const wrapper = shallowMount(Carousel, {
      props: { images },
      data() {
        return {
          currentIndex: 0
        }
      }
    })
    expect(wrapper.html()).toContain("left")
  })
})