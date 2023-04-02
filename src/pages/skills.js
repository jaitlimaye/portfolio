import React from 'react'
import Layout from '../components/layout'
import { Container } from 'react-bootstrap'
import Seo from "../components/seo"

const skills = () => {
  return (
    <Layout>
      <ul>
        <li>Programming Languages</li> 
       <div>C++, C, Python, JavaScript, Java</div>
        </ul>
    </Layout>
  )
}

export const Head = () => <Seo title="Skills" />
export default skills