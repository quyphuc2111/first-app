 import Link from 'next/link'
import React from 'react'
import { Button, Card } from 'react-bootstrap'
import Layout from '../../components/Layout'
import { getRandomJoke } from '../../lib/joke'
 
 function Random({joke}) {
     return (
         <Layout>
            <Card className='my-3-shadow'>
                <Card.Title>Here your random joke for today</Card.Title>
                <Card.Text>{joke.value}</Card.Text>
                <Link href="/" passHref>
                    <Button variant="dark">Back</Button>
                </Link>
            </Card>
         </Layout>
     )
 }

 export const getServerSideProps = async () => {
     const joke = await getRandomJoke()
     return {
         props: {
             joke
         }
     }
 }
 
 export default Random
 