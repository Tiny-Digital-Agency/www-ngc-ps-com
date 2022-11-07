import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Herosection from "../components/Herosection";
import About from "../components/About";
export default function Home() {
  return (
    <>
      <Herosection/>
      <About/>
    </>
  )
}
