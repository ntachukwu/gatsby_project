import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import Head from "../components/head"

const NotFound = () => {
    return (
        <Layout>
            <Head title='404'/>
            <h1>Page Does not exist</h1>
            <p><Link to='/'>Go Back Home</Link></p>
        </Layout>
    )
}

export default NotFound