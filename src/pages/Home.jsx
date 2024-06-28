import React from 'react'
import Banner from '../componets/Home/Banner'
import Hero from '../componets/Home/Hero'
import Categories from '../componets/Home/Categories'
import Product from '../componets/Home/Product'
import Instagram from '../componets/Home/Instagram'
import LatestBlog from '../componets/Home/LatestBlog'

export const Home = () => {
  return (
      <>
          <Hero />
          <Banner />
          <Product />
          <Categories />
          <Instagram />
          <LatestBlog />
    </>
  )
}
